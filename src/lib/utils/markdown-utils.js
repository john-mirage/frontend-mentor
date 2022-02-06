import { getFile } from "@utils/fs-utils";
import matter from 'gray-matter';

/**
 * Check the frontmatter of a Markdown file.
 * 
 * @param {string} filename - The filename of the checked Markdown file frontmatter.
 * @param {object} frontmatter - The fronmatter of the Markdown file you want to test.
 * @throws {Error} All the keys must be in the frontmatter object.
 */
export function checkFrontmatter(filename, frontmatter) {
    if (
        frontmatter.name &&
        frontmatter.date &&
        frontmatter.tags
    ) {
        return frontmatter;
    }
    throw new Error(`One or more fields are missing in ${filename}`);
}

/**
 * Get the Markdown file located in a directory.
 * 
 * @param {string} filename - The filename of the Markdown file.
 * @param {string} directory - The relative directory path of the Markdown file.
 * @returns {object} The Markdown file object.
 */
export function getMarkdownFile(filename, directory) {
    const file = getFile(filename, directory);
    const { data, content } = matter(file);
    return { 
        filename: filename,
        frontmatter: data,
        markdown: content,
    };
}