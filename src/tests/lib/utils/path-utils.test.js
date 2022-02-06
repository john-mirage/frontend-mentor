import { join } from 'path';
import fs from 'fs';
import { getAbsolutePath } from '@utils/path-utils';

jest.mock('path', () => {
    return {
        join: jest.fn(),
    };
});

jest.mock('fs', () => {
    return {
        existsSync: jest.fn(),
    };
});

describe('GetAbsolutePath', () => {

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