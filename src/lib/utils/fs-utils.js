import { join } from 'path';
import fs from 'fs';

/**
 * Get a file.
 * 
 * @param {string} absolutePath - The absolute path.
 * @returns {object} The file raw data.
 */
export function getFile(absolutePath) {
    return fs.readFileSync(absolutePath, 'utf8');
}

/**
 * Remove the file extension in a filename.
 * 
 * @param {string} filename - The filename. 
 * @returns {string} The filename without file extension.
 */
export function removeFilenameExtension(filename) {
    const regex = /(?<=^.+)\.[A-Za-z0-9]+$/;
    if (filename.search(regex) === -1) throw new Error(`${filename} does not include a file extension`);
    return filename.replace(regex, '');
}

/**
 * Get the filenames inside a directory.
 * 
 * @param {string} absolutePath - The absolute path of the directory.
 * @returns {string[]} The name of the files.
 */
export function getFilenames(absolutePath) {
    const directories = fs
        .readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => !dirent.isDirectory());
    if (directories.length <= 0) throw new Error(`There is no files in the folder`);
    return directories.map(dirent => dirent.name);
}

/**
 * Get the absolute path of a relative path.
 * The relative path must be relative to the project root folder.
 * 
 * @param {string} relativePath - The relative path.
 * @throws {Error} The absolute path must correspond to a real directory or file on the host system.
 * @returns {string} The absolute path.
 */
export function getAbsolutePath(relativePath) {
    const absolutePath = join(process.cwd(), relativePath);
    if (!fs.existsSync(absolutePath)) throw new Error(`${relativePath} does not exist on your system`);
    return absolutePath;
}
