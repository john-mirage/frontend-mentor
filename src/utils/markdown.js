import { join } from 'path';
import fs from 'fs';
import { unified } from 'unified';
import markdownParser from 'remark-parse';
import markdownToHtml from 'remark-rehype';
import htmlSanitizer, { defaultSchema } from 'rehype-sanitize';
import htmlSerializer from 'rehype-stringify';
import dynamic from 'next/dynamic';

const DATE_FORMAT_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const CHALLENGE_DIRECTORY = "docs";
const PICTURE_DIRECTORY = "assets/index";
const DEFAULT_CHALLENGE_ORDER = "descending";
const MARKDOWN_EXTENSIONS = ['md', 'markdown'];
const PICTURE_EXTENSIONS = ['png', "jpg", "jpeg"];

export function getChallenge(challengeName) {
    const challengeDirectory = getDirectory(CHALLENGE_DIRECTORY);
    const challengeFilenames = getFilenames(challengeDirectory, MARKDOWN_EXTENSIONS);
    const challengeFilename = getFilenameWithExtension(challengeName, challengeFilenames);
    return getChallengeFromMarkdownFile(challengeFilename, challengeDirectory);
}

export function getAllChallenges(challengeOrder = DEFAULT_CHALLENGE_ORDER) {
    const challengeDirectory = getDirectory(CHALLENGE_DIRECTORY);
    const challengeFilenames = getFilenames(challengeDirectory, MARKDOWN_EXTENSIONS);
    const challenges = challengeFilenames.map((challengeFilename) => getChallengeFromMarkdownFile(challengeFilename, challengeDirectory));
    return sortChallengesByDate(challenges, challengeOrder);
}

export function getLocaleDate(dateLocale, dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(dateLocale, DATE_FORMAT_OPTIONS);
}

export async function getHtmlFromMarkdown(markdownContent) {
    const htmlContent = await unified()
        .use(markdownParser)
        .use(markdownToHtml)
        .use(htmlSanitizer, defaultSchema)
        .use(htmlSerializer)
        .process(markdownContent);
    return String(htmlContent);
}

export function getChallengePictures(pictures) {
    const directory = getDirectory(PICTURE_DIRECTORY);
    return pictures.map((picture) => {
        const path = join(directory, picture);
        if (!fs.existsSync(path)) throw new Error(`${path} does not exist on your system`);
        return dynamic(() => import(`@assets/index/${picture}`));
    });
}

function getChallengeFromMarkdownFile(filename, challengeDirectory) {
    const markdownFile = getMarkdownFile(filename, challengeDirectory);
    const frontmatter = getChallengeFrontmatter(filename, markdownFile.data);
    const challengeName = removeFilenameExtension(filename);
    checkISODate(frontmatter.date);
    return {
        name: challengeName,
        content: markdownFile.content,
        pictures: frontmatter.pictures,
        date: frontmatter.date,
        tags: frontmatter.tags,
    };
}

function getMarkdownFile(filename, challengeDirectory) {
    const path = join(challengeDirectory, filename);
    const content = fs.readFileSync(path, 'utf8');
    const { data, content } = matter(rawFile.content);
    return { filename, data, content };
}

function getFilenameWithExtension(filenameWithoutExtension, filenames) {
    const filename = filenames.find((filename) => {
        const regex = new RegExp(`^${filenameWithoutExtension}\\.[A-Za-z0-9]+$`);
        return filename.search(regex) !== -1;
    });
    if (!filename) throw new Error(`${filenameWithoutExtension} does not correspond to any filenames`);
    return filename;
}

function removeFilenameExtension(filename) {
    const regex = /(?<=^.+)\.[A-Za-z0-9]+$/;
    if (filename.search(regex) === -1) throw new Error(`${filename} does not include a file extension`);
    return filename.replace(regex, '');
}

function getFilenames(directory, extensions) {
    const filenames = fs.readdirSync(directory);
    if (filenames.length <= 0) throw new Error(`${directory} folder is empty`);
    const markdownFilenames = filenames.filter((filename) => {
        return extensions.some((fileExtension) => filename.endsWith(`.${fileExtension}`));
    });
    if (markdownFilenames.length <= 0) throw new Error(`There is no Markdown files in ${directory}`);
    return markdownFilenames;
}

function getDirectory(directory) {
    const challengeDirectory = join(process.cwd(), directory);
    if (!fs.existsSync(challengeDirectory)) throw new Error(`${fileDirectory} does not exist on your system`);
    return challengeDirectory;
}

function getChallengeFrontmatter(filename, frontmatter) {
    if (
        frontmatter.date &&
        frontmatter.pictures &&
        frontmatter.tags
    ) {
        return {
            date: frontmatter.date,
            pictures: frontmatter.pictures,
            tags: frontmatter.tags
        };
    }
    throw new Error(`One or more fields are missing in ${filename}`);
}

function checkISODate(ISODateString) {
    const ISODateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
    if (ISODateString.search(ISODateRegex) === -1) throw new Error(`The ISO date (${ISODateString}) is not valid`);
}

function sortChallengesByDate(challenges, challengeOrder) {
    return challenges.sort((challengeA, challengeB) => {
        switch (challengeOrder) {
            case 'descending': {
                return challengeA.date > challengeB.date ? -1 : 1;
            }
            case 'ascending': {
                return challengeA.date < challengeB.date ? -1 : 1;
            }
            default: {
                throw new Error('The order is invalid');
            }
        }
    });
}
