import { getDirectoryFilenames } from "./file-utils";

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
    return getDirectoryFilenames(relativePath, IMAGE_EXTENSIONS);
}