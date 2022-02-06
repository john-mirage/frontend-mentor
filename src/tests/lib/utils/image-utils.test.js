import { getDirEntityNames } from "@utils/fs-utils";
import { getImageFilenames } from "@utils/image-utils";

jest.mock('@utils/fs-utils', () => {
    return {
        getDirEntityNames: jest.fn(),
    };
});

describe('GetImageFilenames', () => {

    afterEach(() => {
        getDirEntityNames.mockClear();
    });

    const DIRECTORY = 'docs';

    it('should return the filenames with image extensions', () => {
        const FILENAMES = ['file.md', 'file.png', 'file.mp3', 'file.jpg', 'file.markdown'];
        getDirEntityNames.mockReturnValueOnce(FILENAMES);
        const filenames = getImageFilenames(DIRECTORY);
        expect(filenames).toEqual(['file.png', 'file.jpg']);
        expect(getDirEntityNames).toHaveBeenCalledTimes(1);
        expect(getDirEntityNames).toHaveBeenNthCalledWith(1, DIRECTORY, false);
    });

    it('should throw an error if there is no markdown files', () => {
        const FILENAMES = ['file.md5', 'file.pdf', 'file.mp3', 'file.doc', 'file.mp4'];
        getDirEntityNames.mockReturnValueOnce(FILENAMES);
        expect(() => {
            getImageFilenames(DIRECTORY);
        }).toThrow('There is no files in docs with the desired extensions');
        expect(getDirEntityNames).toHaveBeenCalledTimes(1);
        expect(getDirEntityNames).toHaveBeenNthCalledWith(1, DIRECTORY, false);
    });

});