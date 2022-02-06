import { join } from 'path';
import { getAbsolutePath, getDirectoryNames, getFile } from '@utils/fs-utils';
import { checkFrontmatter, extractFrontmatter } from '@utils/markdown-utils';
import { checkIsoDate } from '@utils/date-utils';

/**
 * @constant BASE_DIR - The base directory of the challenges.
 */
const BASE_DIR = 'src/docs';

/**
 * @constant README_FILENAME - The challenge Markdown file.
 */
const README_FILENAME = 'README.md';

/**
 * @constant DEFAULT_ORDER - The default order of the challenges.
 */
const DEFAULT_ORDER = 'descending';

/**
 * @constant MENDATORY_FIELDS - The mendatory fields of the frontmatter.
 */
const MENDATORY_FIELDS = ['name', 'tags', 'date'];

/**
 * Sort the challenges by date.
 * 
 * @param {object[]} challenges - The challenges.
 * @param {string} order - The challenge order.
 * @returns {object[]} The sorted challenges.
 */
export function sortChallengesByDate(challenges, order = DEFAULT_ORDER) {
    return challenges.sort((challengeA, challengeB) => {
        switch (order) {
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
 * Get the challenge slugs based on the directories inside the base directory.
 * 
 * @returns {string[]} The challenge slugs.
 */
export function getChallengeSlugs() {
    return getDirectoryNames(BASE_DIR);
}

/**
 * Get the challenge corresponding to a slug.
 * 
 * @param {string} slug - The challenge slug.
 * @returns {object} The challenge.
 */
export function getChallenge(slug) {
    const relativePath = join(BASE_DIR, slug, README_FILENAME);
    const absolutePath = getAbsolutePath(relativePath);
    const file = getFile(absolutePath);
    const markdownFile = extractFrontmatter(file);
    checkFrontmatter(markdownFile.frontmatter, MENDATORY_FIELDS);
    checkIsoDate(markdownFile.frontmatter.date);
    return {
        slug: slug,
        markdown: markdownFile.markdown,
        ...markdownFile.frontmatter,
    }
}
