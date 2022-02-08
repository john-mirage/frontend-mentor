import { getAbsolutePath, getFile, getFilenames, removeFilenameExtension } from '@utils/fs-utils';
import fs from 'fs';
import { join } from 'path';

jest.mock('fs', () => {
    return {
        readdirSync: jest.fn(),
        readFileSync: jest.fn(),
        existsSync: jest.fn(),
    };
});

jest.mock('path', () => {
    return {
        join: jest.fn(),
    };
});

const isDirectoryMock = jest.fn();

describe('Fs utils: get file', () => {

    afterEach(() => {
        fs.readFileSync.mockClear();
    });

    it('should return a file', () => {
        const ABSOLUTE_PATH = 'absolute path';
        const FILE = 'file content';
        fs.readFileSync.mockReturnValueOnce(FILE);
        const file = getFile(ABSOLUTE_PATH);
        expect(file).toBe(FILE);
        expect(fs.readFileSync).toHaveBeenCalledTimes(1);
        expect(fs.readFileSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH, 'utf8');
    });

});

describe('Fs utils: remove filename extension', () => {

    it('should remove the file extension of a valid filename', () => {
        const VALID_FILENAME = 'file.md';
        const filenameWithoutExtension = removeFilenameExtension(VALID_FILENAME);
        expect(filenameWithoutExtension).toBe('file');
    });

    it('should throw an error if the filename is not valid', () => {
        const INVALID_FILENAME = 'file';
        expect(() => {
            removeFilenameExtension(INVALID_FILENAME);
        }).toThrow('file does not include a file extension');
    });

});

describe('Fs utils: get filenames', () => {

    afterEach(() => {
        fs.readdirSync.mockClear();
        isDirectoryMock.mockClear();
    });

    const ABSOLUTE_PATH = 'absolute path';

    it('should return the filenames of a directory', () => {
        isDirectoryMock.mockReturnValueOnce(true);
        isDirectoryMock.mockReturnValueOnce(false);
        isDirectoryMock.mockReturnValueOnce(false);
        fs.readdirSync.mockReturnValueOnce([
            { name: 'directory', isDirectory: isDirectoryMock },
            { name: 'file.md', isDirectory: isDirectoryMock },
            { name: 'file.mp3', isDirectory: isDirectoryMock },
        ]);
        const filenames = getFilenames(ABSOLUTE_PATH);
        expect(filenames).toEqual(['file.md', 'file.mp3']);
        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
        expect(fs.readdirSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH, { withFileTypes: true });
        expect(isDirectoryMock).toHaveBeenCalledTimes(3);
    });

    it('should throw an error if there is no files in the directory', () => {
        isDirectoryMock.mockReturnValueOnce(true);
        isDirectoryMock.mockReturnValueOnce(true);
        isDirectoryMock.mockReturnValueOnce(true);
        fs.readdirSync.mockReturnValueOnce([
            { name: 'directory1', isDirectory: isDirectoryMock },
            { name: 'directory2', isDirectory: isDirectoryMock },
            { name: 'directory3', isDirectory: isDirectoryMock },
        ]);
        expect(() => {
            getFilenames(ABSOLUTE_PATH);
        }).toThrow('There is no files in the folder');
    });

});

describe('Fs utils: get absolute path', () => {

    afterEach(() => {
        join.mockClear();
        fs.existsSync.mockClear();
    });

    const RELATIVE_PATH = 'docs';
    const CURRENT_WORKING_DIR = '/project/src/';
    const ABSOLUTE_PATH = CURRENT_WORKING_DIR + RELATIVE_PATH;

    it('should return the absolute path of a relative path', () => {
        const cwdSpy = jest.spyOn(process, 'cwd');
        cwdSpy.mockReturnValueOnce(CURRENT_WORKING_DIR);
        join.mockReturnValueOnce(ABSOLUTE_PATH);
        fs.existsSync.mockReturnValueOnce(true);
        const absolutePath = getAbsolutePath(RELATIVE_PATH);
        expect(absolutePath).toBe(ABSOLUTE_PATH);
        expect(cwdSpy).toHaveBeenCalledTimes(1);
        expect(join).toHaveBeenCalledTimes(1);
        expect(join).toHaveBeenNthCalledWith(1, CURRENT_WORKING_DIR, RELATIVE_PATH);
        expect(fs.existsSync).toHaveBeenCalledTimes(1);
        expect(fs.existsSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH);
        cwdSpy.mockRestore();
    });

    it('should throw an error if the absolute path does not exist on the host system', () => {
        const cwdSpy = jest.spyOn(process, 'cwd');
        cwdSpy.mockReturnValueOnce(CURRENT_WORKING_DIR);
        join.mockReturnValueOnce(ABSOLUTE_PATH);
        fs.existsSync.mockReturnValueOnce(false);
        expect(() => {
            getAbsolutePath(RELATIVE_PATH);
        }).toThrow(`${RELATIVE_PATH} does not exist on your system`);
        expect(cwdSpy).toHaveBeenCalledTimes(1);
        expect(join).toHaveBeenCalledTimes(1);
        expect(join).toHaveBeenNthCalledWith(1, CURRENT_WORKING_DIR, RELATIVE_PATH);
        expect(fs.existsSync).toHaveBeenCalledTimes(1);
        expect(fs.existsSync).toHaveBeenNthCalledWith(1, ABSOLUTE_PATH);
        cwdSpy.mockRestore();
    });

});