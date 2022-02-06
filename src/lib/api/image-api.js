import dynamic from 'next/dynamic';

const BASE_DIR = 'src/docs';
const IMAGE_DIR = 'images';

/**
 * Get the optimized version of an image.
 * 
 * @param {object} image - The image as object.
 * @returns {object} The optimized version of the image. 
 */
export function getOptimizedImage(image) {
    // optional: optimize the image (webp)
}

/**
 * Get the image corresponding to a folder and a filename.
 * 
 * @param {string} slug - The slug corresponding to the directory where the image live.
 * @param {string} filename - The filename of the image.
 */
export function getImage(slug, filename) {
    // join the base dir with the slug and the images dir and the filename (src/docs /room-homepage /images /desktop-design.jpg)
    // get the absolute path of the file and check it
    // dynamic import the image
    // optional: get the optimized version of the image
}
