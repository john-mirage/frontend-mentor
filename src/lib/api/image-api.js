import dynamic from 'next/dynamic';
import { getImageFilenames } from '@utils/image-utils';
import { getFilenameWithExtension } from '@utils/file-utils';

/**
 * Get the image corresponding to a image name.
 * 
 * @param {string} imageName - The image name.
 * @param {string} relativePath - The relative directory path.
 * @returns {object} The image.
 */
export function getImage(imageName, relativePath) {
    const imageFilenames = getImageFilenames(relativePath);
    const imageFilename = getFilenameWithExtension(imageName, imageFilenames);
    return dynamic(() => import(`@assets/index/${imageFilename}`));
}

/**
 * Get all the images.
 * 
 * @param {string} relativePath - The relative directory path.
 * @returns {object[]} The images.
 */
 export function getAllImages(relativePath) {
    const imageFilenames = getImageFilenames(relativePath);
    return imageFilenames.map((imageFilename) => dynamic(() => import(`@assets/index/${imageFilename}`)));
}