import { unified } from 'unified';
import markdownParser from 'remark-parse';
import markdownToHtml from 'remark-rehype';
import htmlSerializer from 'rehype-stringify';
import htmlSanitizer, { defaultSchema } from 'rehype-sanitize';
import { getHtmlFromMarkdown } from '@utils/html-utils';


jest.mock('unified', () => {
  return { unified: jest.fn() };
});
jest.mock('remark-parse', () => jest.fn());
jest.mock('remark-rehype', () => jest.fn());
jest.mock('rehype-stringify', () => jest.fn());
jest.mock('rehype-sanitize', () => {
  return { default: jest.fn(), defaultSchema: jest.fn() };
});

describe('GetHtmlFromMarkdown', () => {

    it('should return HTML content from Markdown content', async () => {
    const useMock = jest.fn().mockReturnThis();
    const processMock = jest
        .fn()
        .mockReturnValue(new String('<h1>markdown</h1>'));
    unified.mockReturnValue({
        use: useMock,
        process: processMock,
    });
    const htmlContent = await getHtmlFromMarkdown('# markdown');
    expect(unified).toHaveBeenCalledTimes(1);
    expect(useMock).toHaveBeenCalledTimes(4);
    expect(useMock).toHaveBeenNthCalledWith(1, markdownParser);
    expect(useMock).toHaveBeenNthCalledWith(2, markdownToHtml);
    expect(useMock).toHaveBeenNthCalledWith(3, htmlSanitizer, defaultSchema);
    expect(useMock).toHaveBeenNthCalledWith(4, htmlSerializer);
    expect(processMock).toHaveBeenCalledTimes(1);
    expect(processMock).toHaveBeenNthCalledWith(1, '# markdown');
    expect(htmlContent).toEqual('<h1>markdown</h1>');
    });

});