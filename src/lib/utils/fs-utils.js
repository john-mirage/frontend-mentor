import { join } from 'path';
import fs from 'fs';
import { getAbsolutePath } from '@utils/path-utils';

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
 * Get the directory names of a directory.
 * 
 * @param {string} directory - The directory.
 * @returns {string[]} The directory names.
 */
export function getDirectoryNames(directory) {
    const absolutePath = getAbsolutePath(directory);
    const directories = fs
        .readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory());
    if (directories.length <= 0) throw new Error(`There is no directories in the ${directory} folder`);
    return directories.map(dirent => dirent.name);
}

/**
 * Get the file names of a directory.
 * 
 * @param {string} directory - The directory.
 * @param {boolean=false} isDirectory - The search type (directory or files).
 * @returns {string[]} The file names.
 */
 export function getFileNames(directory) {
    const absolutePath = getAbsolutePath(directory);
    const files = fs
        .readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => !dirent.isDirectory());
    if (files.length <= 0) throw new Error(`There is no files in the ${directory} folder`);
    return files.map(dirent => dirent.name);
}
