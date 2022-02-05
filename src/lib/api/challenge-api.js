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
 * @class ChallengApi
 */
class ChallengeApi {

    /**
     * @constructor
     */
    constructor() {
        this.filenames = getMarkdownFilenames(CHALLENGE_RELATIVE_PATH);
    }

    /**
     * Sort the challenges by date.
     * 
     * @param {object[]} challenges - The challenges.
     * @param {string} order - The challenge order.
     * @returns {object[]} The sorted challenges.
     */
    sortChallengesByDate(challenges, order = CHALLENGE_DEFAULT_ORDER) {
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
     * Get a challenge from a Markdown file.
     * 
     * @param {string} filename - The challenge filename of the Markdown file.
     * @returns {object} The challenge object.
     */
    getChallengeFromMarkdownFile(filename) {
        const markdownFile = getMarkdownFile(filename, CHALLENGE_RELATIVE_PATH);
        checkMarkdownFileFrontmatter(filename, markdownFile.data, ["pictures", "date", "tags"]);
        checkISODate(markdownFile.data.date);
        return {
            name: getFilenameWithoutExtension(filename),
            content: markdownFile.content,
            pictures: markdownFile.data.pictures,
            date: markdownFile.data.date,
            tags: markdownFile.data.tags,
        };
    }

    /**
     * Get The challenge corresponding to a name.
     * 
     * @param {string} name - The challenge name.
     * @returns {object} The challenge object.
     */
    getChallenge(name) {
        const filename = getFilenameWithExtension(name, this.filenames);
        return this.getChallengeFromMarkdownFile(filename);
    }

    /**
     * Get all the challenges.
     * 
     * @param {string} order - The challenges order.
     * @returns {object[]} The challenge objects.
     */
    getAllChallenges(order = CHALLENGE_DEFAULT_ORDER) {
        const challenges = this.filenames.map((filename) => this.getChallengeFromMarkdownFile(filename));
        return this.sortChallengesByDate(challenges, order);
    }
}

export default ChallengeApi;