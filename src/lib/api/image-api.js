import dynamic from 'next/dynamic';
import { join } from 'path';
import { getImageFilenames } from '@utils/image-utils';
import { getFilenameWithExtension } from '@utils/file-utils';

/**
 * @constant {string} The image base directory.
 */
const IMAGE_BASE_RELATIVE_DIR = 'assets/index';

/**
 * @class ImageApi
 */
class ImageApi {
    constructor(relativePath) {
        this.relativePath = join(IMAGE_BASE_RELATIVE_DIR, relativePath);
        this.filenames = getImageFilenames(this.relativePath);
    }

    /**
     * Get an image by dynamicaly importing it.
     * 
     * @param {string} filename - The filename of the image.
     * @returns {object} The image object.
     */
    getImageFromDynamicImport(filename) {
        return dynamic(() => import(`@assets/index/${filename}`));
    }

    /**
     * Get the image corresponding to a image name.
     * 
     * @param {string} name - The image name.
     * @returns {object} The image.
     */
    getImage(name) {
        const filename = getFilenameWithExtension(name, this.filenames);
        return this.getImageFromDynamicImport(filename);
    }

    /**
     * Get all the images.
     * 
     * @returns {object[]} The images.
     */
    getAllImages() {
        return this.filenames.map((filename) => this.getImageFromDynamicImport(filename));
    }
}

export default ImageApi;