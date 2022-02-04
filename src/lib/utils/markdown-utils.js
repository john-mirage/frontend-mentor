import { unified } from 'unified';
import markdownParser from 'remark-parse';
import markdownToHtml from 'remark-rehype';
import htmlSanitizer, { defaultSchema } from 'rehype-sanitize';
import htmlSerializer from 'rehype-stringify';
import { getDirectoryFilenames, getFile } from '@utils/file-utils';

/**
 * @constant {string[]} The markdown file extensions.
 */
 const MARKDOWN_EXTENSIONS = ['md', 'markdown'];

/**
 * Get HTML content from Markdown content.
 * Markdown content is sanitized.
 * 
 * @param {string} markdownContent - The Markdown formated content as a string.
 * @returns string - The HTML sanitized content as a string.
 */
export async function getHtmlFromMarkdown(markdownContent) {
    const htmlContent = await unified()
        .use(markdownParser)
        .use(markdownToHtml)
        .use(htmlSanitizer, defaultSchema)
        .use(htmlSerializer)
        .process(markdownContent);
    return String(htmlContent);
}

/**
 * Check the frontmatter of a Markdown file.
 * 
 * @param {string} filename - The filename of the checked Markdown file frontmatter.
 * @param {object} frontmatter - The fronmatter of the Markdown file you want to test.
 * @param {string[]} keys - The keys that need to be in the frontmatter object.
 * @throws {Error} All the keys must be in the frontmatter object.
 */
export function checkMarkdownFileFrontmatter(filename, frontmatter, keys) {
    const frontmatterIsValid = keys.every((key) => frontmatter[key]);
    if (!frontmatterIsValid) throw new Error(`One or more fields are missing in ${filename}`);
}

/**
 * Get the Markdown filenames of a directory.
 * 
 * @param {string} relativePath - The relative path.
 * @returns {string[]} The Markdown filenames.
 */
export function getMarkdownFilenames(relativePath) {
    return getDirectoryFilenames(relativePath, MARKDOWN_EXTENSIONS);
}

/**
 * Get the Markdown file located in a directory.
 * 
 * @param {string} filename - The filename of the Markdown file.
 * @param {string} relativePath - The relative directory path of the Markdown file.
 * @returns {object} The Markdown file object.
 */
export function getMarkdownFile(filename, relativePath) {
    const file = getFile(filename, relativePath);
    const { data, content } = matter(file);
    return { filename, data, content };
}