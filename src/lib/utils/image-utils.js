import { getDirEntityNames } from "@utils/fs-utils";

/**
 * @constant {string[]} The picture file extensions.
 */
 export const IMAGE_EXTENSIONS = ['png', "jpg", "jpeg"];

/**
 * Get the images filenames of a directory.
 * 
 * @param {string} directory - The relative path.
 * @returns {string[]} The image filenames.
 */
 export function getImageFilenames(directory) {
    const filenames = getDirEntityNames(directory, false);
    const imageFilenames = filenames.filter((filename) => {
        return IMAGE_EXTENSIONS.some((imageExtension) => filename.endsWith(`.${imageExtension}`));
    });
    if (imageFilenames.length <= 0) throw new Error(`There is no files in ${directory} with the desired extensions`);
    return imageFilenames;
}