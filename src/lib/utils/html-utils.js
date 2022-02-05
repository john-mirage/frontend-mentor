import { unified } from 'unified';
import markdownParser from 'remark-parse';
import markdownToHtml from 'remark-rehype';
import htmlSanitizer, { defaultSchema } from 'rehype-sanitize';
import htmlSerializer from 'rehype-stringify';

/**
 * Get HTML content from Markdown content.
 * Markdown content is sanitized.
 * 
 * @param {string} markdown - The Markdown formated content as a string.
 * @returns string - The HTML sanitized content as a string.
 */
export async function getHtmlFromMarkdown(markdown) {
    const html = await unified()
        .use(markdownParser)
        .use(markdownToHtml)
        .use(htmlSanitizer, defaultSchema)
        .use(htmlSerializer)
        .process(markdown);
    return String(html);
}