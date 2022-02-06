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
export function searchFilename(name, filenames, extensions) {
    const result = filenames.find((filename) => {
        return extensions.some((extension) => {
            const regex = new RegExp(`^${name}\\.${extension}$`);
            return filename.search(regex) !== -1;
        });
    });
    if (!result) throw new Error(`${name} does not correspond to any filenames`);
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
 * Get the entities of a directory.
 * 
 * @param {string} directory - The directory.
 * @param {boolean=false} isDirectory - The search type (directory or files).
 * @returns {string[]} The directories or files names.
 */
export function getDirEntityNames(directory, isDirectory = false) {
    const absolutePath = getAbsolutePath(directory);
    const entities = fs
        .readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() === isDirectory);
    if (entities.length <= 0) throw new Error(`There is no ${isDirectory ? 'directories' : 'files'} in the ${directory} folder`);
    return entities.map(dirent => dirent.name);
}
