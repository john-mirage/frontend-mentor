import { join } from 'path';
import fs from 'fs';

/**
 * Get the absolute path of a relative path.
 * The relative path must be relative to the src folder.
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