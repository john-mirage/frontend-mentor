import { checkIsoDate } from '@utils/date-utils';
import { getDirectoryNames } from '@utils/fs-utils';
import { checkFrontmatter, getMarkdownFile } from '@utils/markdown-utils';
import { join } from 'path';

/**
 * @constant {string} The Challenge directory relative to the src folder.
 */
const CHALLENGE_BASE_DIR = 'src/docs';

/**
 * @constant {string} The challenge markdown file name.
 */
const CHALLENGE_README_FILENAME = 'README.md';

/**
 * @constant {string} The default challenge order.
 */
const CHALLENGE_DEFAULT_ORDER = 'descending';

/**
 * Sort the challenges by date.
 * 
 * @param {object[]} challenges - The challenges.
 * @param {string} order - The challenge order.
 * @returns {object[]} The sorted challenges.
 */
export function sortChallengesByDate(challenges, order = CHALLENGE_DEFAULT_ORDER) {
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
 * Get the challenge names based on the folders in src/docs.
 * 
 * @returns {string[]} The challenge names.
 */
export function getAllChallengeSlugs() {
    return getDirectoryNames(CHALLENGE_BASE_DIR);
}

/**
 * Get The challenge corresponding to a name.
 * 
 * @param {string} slug - The challenge slug.
 * @returns {object} The challenge object.
 */
export function getChallenge(slug) {
    const directory = join(CHALLENGE_BASE_DIR, slug);
    const markdownFile =  getMarkdownFile(CHALLENGE_README_FILENAME, directory);
    checkFrontmatter(markdownFile.filename, markdownFile.frontmatter);
    checkIsoDate(markdownFile.frontmatter.date);
    return {
        slug: slug,
        name: markdownFile.frontmatter.name,
        date: markdownFile.frontmatter.date,
        tags: markdownFile.frontmatter.tags,
        markdown: markdownFile.markdown,
    };
}

/**
 * Get all the challenges.
 * 
 * @param {string} order - The challenges order.
 * @returns {object[]} The challenge objects.
 */
export function getAllChallenges() {
    const directoryNames = getAllChallengeSlugs();
    const challenges = directoryNames.map((directoryName) => getChallenge(directoryName));
    return sortChallengesByDate(challenges);
}