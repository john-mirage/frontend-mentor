import { join } from 'path';
import fs from 'fs';

/**
 * Get a filename without extension.
 * 
 * @param {string} filename - The filename with extension (markdown-file.md).
 * @throws {Error} The filename must be valid.
 * @returns {string} The filename without extension (markdown-file).
 */
export function getFilenameWithoutExtension(filename) {
    const regex = /(?<=^.+)\.[A-Za-z0-9]+$/;
    if (filename.search(regex) === -1) throw new Error(`${filename} does not include a file extension`);
    return filename.replace(regex, '');
}

/**
 * Get the filename with the correct extension.
 * You need to provide a list of correct filenames.
 * The function will search the filename with the extension in the filenames
 * provided and return the result if there is one.
 * 
 * @param {string} filenameWithoutExtension - The filename without extension. 
 * @param {string[]} filenames - A list of correct filenames.
 * @throws {Error} The filename need to be found in the filenames.
 * @returns {string} The filename with the correct extension.
 */
export function getFilenameWithExtension(filenameWithoutExtension, filenames) {
    const filename = filenames.find((filename) => {
        const regex = new RegExp(`^${filenameWithoutExtension}\\.[A-Za-z0-9]+$`);
        return filename.search(regex) !== -1;
    });
    if (!filename) throw new Error(`${filenameWithoutExtension} does not correspond to any filenames`);
    return filename;
}

export function getFile(filename, relativePath) {
    const directoryPath = getAbsolutePath(relativePath);
    const filePath = join(directoryPath, filename);
    return fs.readFileSync(filePath, 'utf8');
}

/**
 * Get the filenames of a directory corresponding to one or more file extensions.
 * 
 * @param {string} relativePath - The relative path where the files are located.
 * @param {string[]} fileExtensions - The file extensions of the filenames.
 * @throws {Error} The directory must contain at least one file.
 * @throws {Error} The directory must contain at least one file with the file extensions.
 * @returns {string[]} The filenames corresponding to the file extensions.
 */
export function getDirectoryFilenames(relativePath, fileExtensions) {
    const absolutePath = getAbsolutePath(relativePath);
    const filenames = fs.readdirSync(absolutePath);
    if (filenames.length <= 0) throw new Error(`${absolutePath} folder is empty`);
    const markdownFilenames = filenames.filter((filename) => {
        return fileExtensions.some((fileExtension) => filename.endsWith(`.${fileExtension}`));
    });
    if (markdownFilenames.length <= 0) throw new Error(`There is no files in ${absolutePath} with the desired extensions`);
    return markdownFilenames;
}

/**
 * Get the absolute path of a relative path.
 * 
 * @param {string} relativePath - The relative path.
 * @throws {Error} The relative path must correspond to a real directory or file.
 * @returns {string} The absolute path of a relative path.
 */
export function getAbsolutePath(relativePath) {
    const absolutePath = join(process.cwd(), relativePath);
    if (!fs.existsSync(absolutePath)) throw new Error(`${relativePath} does not exist on your system`);
    return absolutePath;
}
