import { checkISODate } from "@utils/date-utils";
import { getFilenameWithExtension, getFilenameWithoutExtension } from "@utils/file-utils";
import { checkMarkdownFileFrontmatter, getMarkdownFile, getMarkdownFilenames } from "@utils/markdown-utils";

/**
 * @constant {string} The Challenge directory relative to the src folder.
 */
const CHALLENGE_RELATIVE_PATH = "docs";

/**
 * @constant {string} The default challenge order.
 */
const CHALLENGE_DEFAULT_ORDER = "descending";

/**
 * Get The challenge corresponding to a name.
 * 
 * @param {challengeName} challengeName - The challenge name.
 * @returns {object} The challenge as object.
 */
export function getChallenge(challengeName) {
    const challengeFilenames = getMarkdownFilenames(CHALLENGE_RELATIVE_PATH);
    const challengeFilename = getFilenameWithExtension(challengeName, challengeFilenames);
    return getChallengeFromMarkdownFile(challengeFilename);
}

/**
 * Get all the challenges.
 * 
 * @param {string} challengeOrder - The challenge order.
 * @returns {object[]} The challenge objects.
 */
export function getAllChallenges(challengeOrder = CHALLENGE_DEFAULT_ORDER) {
    const challengeFilenames = getMarkdownFilenames(CHALLENGE_RELATIVE_PATH);
    const challenges = challengeFilenames.map((challengeFilename) => getChallengeFromMarkdownFile(challengeFilename, challengeDirectory));
    return sortChallengesByDate(challenges, challengeOrder);
}

/**
 * Get a challenge from a Markdown file.
 * 
 * @param {string} challengeFilename - The challenge filename of the Markdown file.
 * @returns {object} The challenge object.
 */
function getChallengeFromMarkdownFile(challengeFilename) {
    const markdownFile = getMarkdownFile(challengeFilename, CHALLENGE_RELATIVE_PATH);
    checkMarkdownFileFrontmatter(challengeFilename, markdownFile.data, ["pictures", "date", "tags"]);
    checkISODate(markdownFile.data.date);
    return {
        name: getFilenameWithoutExtension(challengeFilename),
        content: markdownFile.content,
        pictures: markdownFile.data.pictures,
        date: markdownFile.data.date,
        tags: markdownFile.data.tags,
    };
}

/**
 * Sort the challenges by date.
 * 
 * @param {object[]} challenges - The challenges. 
 * @param {string} challengeOrder - The challenge order.
 * @returns {object[]} The sorted challenges.
 */
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