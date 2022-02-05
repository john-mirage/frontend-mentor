import { getFilenames } from "./fs-utils";

/**
 * @constant {string[]} The picture file extensions.
 */
 const IMAGE_EXTENSIONS = ['png', "jpg", "jpeg"];

/**
 * Get the images filenames of a directory.
 * 
 * @param {string} relativePath - The relative path.
 * @returns {string[]} The image filenames.
 */
 export function getImageFilenames(relativePath) {
    const filenames = getFilenames(relativePath);
    const imageFilenames = filenames.filter((filename) => {
        return IMAGE_EXTENSIONS.some((imageExtension) => filename.endsWith(`.${imageExtension}`));
    });
    if (imageFilenames.length <= 0) throw new Error(`There is no files in ${absolutePath} with the desired extensions`);
    return imageFilenames
}