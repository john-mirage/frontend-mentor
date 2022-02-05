import { getFile } from '@utils/file-utils';
import { getFilenames } from './fs-utils';

/**
 * @constant {string[]} The markdown file extensions.
 */
 const MARKDOWN_EXTENSIONS = ['md', 'markdown'];

/**
 * Get the Markdown filenames of a directory.
 * 
 * @param {string} relativePath - The relative path.
 * @throws {Error} The directory must contain at least one file with the file extensions.
 * @returns {string[]} The Markdown filenames.
 */
export function getMarkdownFilenames(relativePath) {
    const filenames = getFilenames(relativePath);
    const markdownFilenames = filenames.filter((filename) => {
        return MARKDOWN_EXTENSIONS.some((markdownExtension) => filename.endsWith(`.${markdownExtension}`));
    });
    if (markdownFilenames.length <= 0) throw new Error(`There is no files in ${absolutePath} with the desired extensions`);
    return markdownFilenames;
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