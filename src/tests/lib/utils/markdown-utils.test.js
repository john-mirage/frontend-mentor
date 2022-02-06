import { getDirEntityNames, getFile } from "@utils/fs-utils";
import matter from 'gray-matter';
import { checkMarkdownFileFrontmatter, getMarkdownFile, getMarkdownFilenames } from "@utils/markdown-utils";

jest.mock('@utils/fs-utils', () => {
    return {
        getDirEntityNames: jest.fn(),
        getFile: jest.fn(),
    };
});

jest.mock('gray-matter', () => {
    return jest.fn();
});

describe('GetMarkdownFilenames', () => {

    afterEach(() => {
        getDirEntityNames.mockClear();
    });

    const DIRECTORY = 'docs';

    it('should return the filenames with markdown extensions', () => {
        const FILENAMES = ['file.md', 'file.pdf', 'file.mp3', 'file.doc', 'file.markdown'];
        getDirEntityNames.mockReturnValueOnce(FILENAMES);
        const filenames = getMarkdownFilenames(DIRECTORY);
        expect(filenames).toEqual(['file.md', 'file.markdown']);
        expect(getDirEntityNames).toHaveBeenCalledTimes(1);
        expect(getDirEntityNames).toHaveBeenNthCalledWith(1, DIRECTORY, false);
    });

    it('should throw an error if there is no markdown files', () => {
        const FILENAMES = ['file.md5', 'file.pdf', 'file.mp3', 'file.doc', 'file.mp4'];
        getDirEntityNames.mockReturnValueOnce(FILENAMES);
        expect(() => {
            getMarkdownFilenames(DIRECTORY);
        }).toThrow('There is no files in docs with the desired extensions');
        expect(getDirEntityNames).toHaveBeenCalledTimes(1);
        expect(getDirEntityNames).toHaveBeenNthCalledWith(1, DIRECTORY, false);
    });

});

describe('CheckMarkdownFileFrontmatter', () => {

    const FILENAME = 'file.md';
    const FRONTMATTER = {
        title: 'title',
        description: 'description',
        date: '12/12/2020',
        tags: ['linux', 'windows'],
    }

    it('should not return if the markdown file frontmatter is valid', () => {
        const KEYS = ['title', 'description', 'date', 'tags'];
        expect(checkMarkdownFileFrontmatter(FILENAME, FRONTMATTER, KEYS)).toBeUndefined();
    });

    it('should throw an error if one key is missing in the frontmatter', () => {
        const KEYS = ['title', 'description', 'date', 'pictures', 'platform'];
        expect(() => {
            checkMarkdownFileFrontmatter(FILENAME, FRONTMATTER, KEYS);
        }).toThrow('One or more fields are missing in file.md');
    });

});

describe('GetMarkdownFile', () => {

    afterEach(() => {
        getFile.mockClear();
        matter.mockClear();
    });

    const DIRECTORY = 'docs';
    const FILE_CONTENT = 'file content';

    it('should return a markdown file', () => {
        const MARKDOWN_FILE = {
            filename: 'file.md',
            data: 'frontmatter',
            content: 'markdown content',
        }
        getFile.mockReturnValueOnce(FILE_CONTENT);
        matter.mockReturnValueOnce({ data: MARKDOWN_FILE.data, content: MARKDOWN_FILE.content });
        const markdownFile = getMarkdownFile(MARKDOWN_FILE.filename, DIRECTORY);
        expect(markdownFile).toEqual(MARKDOWN_FILE);
        expect(getFile).toHaveBeenCalledTimes(1);
        expect(getFile).toHaveBeenNthCalledWith(1, MARKDOWN_FILE.filename, DIRECTORY);
        expect(matter).toHaveBeenCalledTimes(1);
        expect(matter).toHaveBeenNthCalledWith(1, FILE_CONTENT);
    });

});