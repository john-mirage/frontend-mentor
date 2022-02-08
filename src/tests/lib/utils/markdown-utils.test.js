import matter from 'gray-matter';
import { checkFrontmatter, extractFrontmatter, getMarkdownFilenames } from "@utils/markdown-utils";

jest.mock('gray-matter', () => {
    return jest.fn();
});

describe('Markdown utils: get markdown filenames', () => {

    it('should only return markdown filenames', () => {
        const FILENAMES = ['file.md', 'file.pdf', 'file.mp3', 'directorymd', 'file.mp4', 'other-file.md'];
        const markdownFilenames = getMarkdownFilenames(FILENAMES);
        expect(markdownFilenames).toEqual(['file.md', 'other-file.md']);
    });

});

describe('Markdown utils: check frontmatter', () => {

    const FRONTMATTER = {
        title: 'title',
        description: 'description',
        date: '12/12/2020',
        tags: ['linux', 'windows'],
        optionalField: 'something'
    }

    it('should not return if the markdown file frontmatter is valid', () => {
        const KEYS = ['title', 'description', 'date', 'tags'];
        expect(checkFrontmatter(FRONTMATTER, KEYS)).toBeUndefined();
    });

    it('should throw an error if one key is missing in the frontmatter', () => {
        const KEYS = ['title', 'description', 'date', 'pictures', 'platform'];
        expect(() => {
            checkFrontmatter(FRONTMATTER, KEYS);
        }).toThrow('One or more fields are missing');
    });

});

describe('Markdown utils: extract frontmatter', () => {

    afterEach(() => {
        matter.mockClear();
    });

    it('should extract the frontmatter of a markdown file', () => {
        const FILE = 'file content';
        const MARKDOWN_FILE = { data: 'frontmatter', content: 'markdown' };
        matter.mockReturnValueOnce(MARKDOWN_FILE);
        const markdownFile = extractFrontmatter(FILE);
        expect(markdownFile).toEqual({ frontmatter: MARKDOWN_FILE.data, markdown: MARKDOWN_FILE.content });
        expect(matter).toHaveBeenCalledTimes(1);
        expect(matter).toHaveBeenNthCalledWith(1, FILE);
    });

});