import { join } from 'path';
import fs from 'fs';
import { getAbsolutePath } from '@utils/path-utils';

/**
 * Remove the extension of a filename.
 * 
 * @param {string} filename - The filename with extension (markdown-file.md).
 * @throws {Error} The filename must be valid.
 * @returns {string} The filename without extension (markdown-file).
 */
export function removeFilenameExtension(filename) {
    const regex = /(?<=^.+)\.[A-Za-z0-9]+$/;
    if (filename.search(regex) === -1) throw new Error(`${filename} does not include a file extension`);
    return filename.replace(regex, '');
}

/**
 * Search a name in a list of filenames and return the corresponding filename.
 * To match, the name must correspond to everything in the filename except the file extension
 * wich is not included in the name.
 * 
 * @param {string} name - A name that should correspond to a filename.
 * @param {string[]} filenames - A list of correct filenames.
 * @throws {Error} The name need to be found in the filenames.
 * @returns {string} The filename.
 */
export function searchFilename(name, filenames) {
    const result = filenames.find((filename) => {
        const regex = new RegExp(`^${name}\\.[A-Za-z0-9]+$`);
        return filename.search(regex) !== -1;
    });
    if (!result) throw new Error(`${name} does not correspond to any files`);
    return result;
}

/**
 * Get a file.
 * 
 * @param {string} filename - The filename.
 * @param {string} directory - The relative directory path of the filename.
 * @returns {object} The file raw data.
 */
export function getFile(filename, directory) {
    const fileRelativePath = join(directory, filename);
    const fileAbsolutePath = getAbsolutePath(fileRelativePath);
    return fs.readFileSync(fileAbsolutePath, 'utf8');
}

/**
 * Get the filenames of a directory corresponding to one or more file extensions.
 * 
 * @param {string} directory - The directory relative path.
 * @throws {Error} The directory must contain at least one file.
 * @returns {string[]} The filenames corresponding to the file extensions.
 */
export function getFilenames(directory) {
    const absolutePath = getAbsolutePath(directory);
    const filenames = fs
        .readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => !dirent.isDirectory())
        .map(dirent => dirent.name);
    if (filenames.length <= 0) throw new Error(`${absolutePath} folder does not contain files`);
    return filenames
}

/**
 * Get the directories inside a directory.
 * 
 * @param {string} directory - The directory relative path.
 * @returns {string[]} The directory names.
 */
export function getDirectories(directory) {
    const absolutePath = getAbsolutePath(directory);
    return fs
        .readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}
