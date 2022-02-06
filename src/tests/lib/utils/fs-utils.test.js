import fs from 'fs';
import { join } from 'path';
import { getAbsolutePath } from '@utils/path-utils';
import { getDirEntityNames, getFile, removeFilenameExtension, searchFilename } from '@utils/fs-utils';

jest.mock('fs', () => {
    return {
        readdirSync: jest.fn(),
        readFileSync: jest.fn(),
    };
});

jest.mock('path', () => {
    return {
        join: jest.fn(),
    };
});

jest.mock('@utils/path-utils', () => {
    return {
        getAbsolutePath: jest.fn(),
    };
});

const isDirectoryMock = jest.fn();

describe('RemoveFilenameExtension', () => {

    it('should return a filename without the extension', () => {
        const filenameWithoutExtension = removeFilenameExtension('file.md');
        expect(filenameWithoutExtension).toBe('file');
    });

    it('should throw an error if the filename does not have an extension', () => {
        expect(() => {
            removeFilenameExtension('file');
        }).toThrow('file does not include a file extension');
    });

});

describe('SearchFilename', () => {

    const FILENAMES = ['file.pdf', 'filename.md', 'file.md'];
    const EXTENSIONS = ['markdown', 'md'];

    it('should return the filename corresponding to a name', () => {
        const filename = searchFilename('file', FILENAMES, EXTENSIONS);
        expect(filename).toBe('file.md');
    });

    it('should throw an error if the name is not found in the filenames', () => {
        expect(() => {
            searchFilename('wrongFile', FILENAMES, EXTENSIONS);
        }).toThrow('wrongFile does not correspond to any filenames');
    });

});

describe('GetFile', () => {

    const FILENAME = 'file.md';
    const DIRECTORY = 'docs';
    const RELATIVE_PATH = 'docs/file.md';
    const ABSOLUTE_PATH = 'project/src/docs/file.md';
    const FILE_CONTENT = 'file content';

    afterEach(() => {
        join.mockClear();
        getAbsolutePath.mockClear();
        fs.readFileSync.mockClear();
    });

    it('should return a file', () => {
        join.mockReturnValueOnce(RELATIVE_PATH);
        getAbsolutePath.mockReturnValueOnce(ABSOLUTE_PATH);
        fs.readFileSync.mockReturnValueOnce(FILE_CONTENT);
        const fileContent = getFile(FILENAME, DIRECTORY);
        expect(fileContent).toBe(FILE_CONTENT);
        expect(join).toHaveBeenCalledTimes(1);
        expect(join).toHaveBeenNthCalledWith(1, DIRECTORY, FILENAME);
        expect(getAbsolutePath).toHaveBeenCalledTimes(1);
        expect(getAbsolutePath).toHaveBeenNthCalledWith(1, RELATIVE_PATH);
        expect(fs.readFileSync).toHaveBeenCalledTimes(1);
        expect(fs.readFileSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH, 'utf8');
    });

});

describe('GetDirEntityNames', () => {

    afterEach(() => {
        getAbsolutePath.mockClear();
        fs.readdirSync.mockClear();
        isDirectoryMock.mockClear();
    });
    
    const DIRECTORY = 'docs';
    const ABSOLUTE_PATH = 'project/src/docs';

    it('should return a list of directory names', () => {
        getAbsolutePath.mockReturnValueOnce(ABSOLUTE_PATH);
        isDirectoryMock.mockReturnValueOnce(true);
        isDirectoryMock.mockReturnValueOnce(false);
        fs.readdirSync.mockReturnValueOnce([
            { name: 'directory', isDirectory: isDirectoryMock },
            { name: 'file.md', isDirectory: isDirectoryMock },
        ]);
        const directories = getDirEntityNames(DIRECTORY, true);
        expect(directories).toEqual(['directory']);
        expect(getAbsolutePath).toHaveBeenCalledTimes(1);
        expect(getAbsolutePath).toHaveBeenNthCalledWith(1, DIRECTORY);
        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
        expect(fs.readdirSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH, { withFileTypes: true });
        expect(isDirectoryMock).toHaveBeenCalledTimes(2);
    });

    it('should return a list of file names', () => {
        getAbsolutePath.mockReturnValueOnce(ABSOLUTE_PATH);
        isDirectoryMock.mockReturnValueOnce(true);
        isDirectoryMock.mockReturnValueOnce(false);
        fs.readdirSync.mockReturnValueOnce([
            { name: 'directory', isDirectory: isDirectoryMock },
            { name: 'file.md', isDirectory: isDirectoryMock },
        ]);
        const files = getDirEntityNames(DIRECTORY);
        expect(files).toEqual(['file.md']);
        expect(getAbsolutePath).toHaveBeenCalledTimes(1);
        expect(getAbsolutePath).toHaveBeenNthCalledWith(1, DIRECTORY);
        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
        expect(fs.readdirSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH, { withFileTypes: true });
        expect(isDirectoryMock).toHaveBeenCalledTimes(2);
    });

    it('should throw an error if the directory has no files for a file search', () => {
        getAbsolutePath.mockReturnValueOnce(ABSOLUTE_PATH);
        isDirectoryMock.mockReturnValueOnce(true);
        isDirectoryMock.mockReturnValueOnce(true);
        fs.readdirSync.mockReturnValueOnce([
            { name: 'directory1', isDirectory: isDirectoryMock },
            { name: 'directory2', isDirectory: isDirectoryMock },
        ]);
        expect(() => {
            getDirEntityNames(DIRECTORY);
        }).toThrow(`There is no files in the ${DIRECTORY} folder`);
        expect(getAbsolutePath).toHaveBeenCalledTimes(1);
        expect(getAbsolutePath).toHaveBeenNthCalledWith(1, DIRECTORY);
        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
        expect(fs.readdirSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH, { withFileTypes: true });
        expect(isDirectoryMock).toHaveBeenCalledTimes(2);
    });

    it('should throw an error if the directory has no directories for a directory search', () => {
        getAbsolutePath.mockReturnValueOnce(ABSOLUTE_PATH);
        isDirectoryMock.mockReturnValueOnce(false);
        isDirectoryMock.mockReturnValueOnce(false);
        fs.readdirSync.mockReturnValueOnce([
            { name: 'file.pdf', isDirectory: isDirectoryMock },
            { name: 'file.md', isDirectory: isDirectoryMock },
        ]);
        expect(() => {
            getDirEntityNames(DIRECTORY, true);
        }).toThrow(`There is no directories in the ${DIRECTORY} folder`);
        expect(getAbsolutePath).toHaveBeenCalledTimes(1);
        expect(getAbsolutePath).toHaveBeenNthCalledWith(1, DIRECTORY);
        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
        expect(fs.readdirSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH, { withFileTypes: true });
        expect(isDirectoryMock).toHaveBeenCalledTimes(2);
    });

});