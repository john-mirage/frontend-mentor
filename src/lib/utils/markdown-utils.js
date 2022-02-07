import matter from 'gray-matter';

/**
 * @constant MARKDOWN_EXTENSIONS - The markdown file extensions.
 */
export const MARKDOWN_EXTENSION = 'md';

/**
 * Get the markdown filenames.
 * 
 * @param {string} filenames - The filenames.
 * @returns {string[]} The markdown filenames.
 */
export function getMarkdownFilenames(filenames) {
    return filenames.filter(filename => filename.endsWith(`.${MARKDOWN_EXTENSION}`));
}

/**
 * Check the frontmatter of a Markdown file.
 * 
 * @param {object} frontmatter - The frontmatter of the Markdown file.
 * @param {string[]} fields - The mendatory fields of the frontmatter.
 * @throws {Error} All the fiels must be present in the frontmatter.
 */
export function checkFrontmatter(frontmatter, fields) {
    const frontmatterIsValid = fields.every(field => frontmatter[field]);
    if (!frontmatterIsValid) throw new Error(`One or more fields are missing`);
}

/**
 * Extract the frontmatter of a Markdown file.
 * 
 * @param {string} file - The file.
 * @returns {object} An object with the markdown and the frontmatter.
 */
export function extractFrontmatter(file) {
    const { data, content } = matter(file);
    return { frontmatter: data, markdown: content };
}