import { join } from 'path';
import { getAbsolutePath, getFile, getFilenames, removeFilenameExtension } from '@utils/fs-utils';
import { checkFrontmatter, extractFrontmatter, getMarkdownFilenames } from '@utils/markdown-utils';
import { checkIsoDate } from '@utils/date-utils';

/**
 * @constant BASE_DIR - The base directory of the challenges.
 */
const BASE_DIR = 'src/docs';

/**
 * @constant DEFAULT_ORDER - The default order of the challenges.
 */
const DEFAULT_ORDER = 'descending';

/**
 * @constant MENDATORY_FIELDS - The mendatory fields of the frontmatter.
 */
const MENDATORY_FIELDS = ['name', 'tags', 'date', 'styleGuide', 'featuredImage'];

/**
 * Sort the challenges by date.
 * 
 * @param {object[]} challenges - The challenges to sort.
 * @param {string} challengesOrder - The challenges order.
 * @returns {object[]} The sorted challenges.
 */
export function sortChallengesByDate(
    challenges,
    challengesOrder = DEFAULT_ORDER
) {
    return challenges.sort((challengeA, challengeB) => {
        switch (challengesOrder) {
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

/**
 * Get the challenge filenames from the base directory.
 * 
 * @returns {string[]} The challenge filenames.
 */
export function getChallengeFilenamesFromBaseDir() {
    const absolutePath = getAbsolutePath(BASE_DIR);
    const filenames = getFilenames(absolutePath);
    return getMarkdownFilenames(filenames);
}

/**
 * Get the challenge from a markdown file.
 * 
 * @param {string} challengeFilename - The challenge filename.
 * @returns {object} The challenge.
 */
export function getChallengeFromMarkdownFile(
    challengeFilename
) {
    const relativePath = join(BASE_DIR, challengeFilename);
    const absolutePath = getAbsolutePath(relativePath);
    const file = getFile(absolutePath);
    const markdownFile = extractFrontmatter(file);
    checkFrontmatter(markdownFile.frontmatter, MENDATORY_FIELDS);
    checkIsoDate(markdownFile.frontmatter.date);
    return {
        slug: removeFilenameExtension(challengeFilename),
        markdown: markdownFile.markdown,
        ...markdownFile.frontmatter,
    }
}

/**
 * Search a challenge filename.
 * 
 * @param {string} challengeSlug - The challenge slug.
 * @param {function} getChallengeFilenames - The function to get the challenge filenames.
 * @returns {string} The challenge filename.
 */
export function searchChallengeFilename(
    challengeSlug,
    getChallengeFilenames = getChallengeFilenamesFromBaseDir
) {
    const challengeFilenames = getChallengeFilenames();
    const result = challengeFilenames.find((challengeFilename) => {
        const regex = new RegExp(`^${challengeSlug}\\.${MARKDOWN_EXTENSION}$`);
        return challengeFilename.search(regex) !== -1;
    });
    if (!result) throw new Error(`${challengeSlug} does not correspond to any filenames`);
    return result;
}

/**
 * Get the challenge slugs.
 * 
 * @param {function} getChallengeFilenames - The function to get the challenge filenames.
 * @returns {string[]} The challenge slugs.
 */
export function getChallengeSlugs(
    getChallengeFilenames = getChallengeFilenamesFromBaseDir
) {
    const challengeFilenames = getChallengeFilenames();
    return challengeFilenames.map(challengeFilename => removeFilenameExtension(challengeFilename));
}

/**
 * Get a challenge.
 * 
 * @param {string} challengeFilename - The challenge filename.
 * @param {function} getChallenge - The function to get a challenge.
 * @returns {object} The challenge.
 */
export function getChallenge(
    challengeFilename,
    getChallenge = getChallengeFromMarkdownFile
) {
    return getChallenge(challengeFilename);
}

/**
 * Get all the challenges.
 * 
 * @param {function} getChallengeFilenames - The function to get the challenge filenames.
 * @param {function} getChallenge - The function to get a challenge.
 * @param {function} sortChallenges - The function to sort the challenges.
 * @returns {object[]} The challenges.
 */
export function getAllChallenges(
    getChallengeFilenames = getChallengeFilenamesFromBaseDir,
    getChallenge = getChallengeFromMarkdownFile,
    sortChallenges = sortChallengesByDate
) {
    const challengeFilenames = getChallengeFilenames();
    const challenges = challengeFilenames.map(challengeFilename => getChallenge(challengeFilename));
    return sortChallenges(challenges);
}
