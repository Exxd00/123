import { marked, type Tokens } from "marked";
import GithubSlugger from "github-slugger";

export type TocItem = {
  depth: number;
  text: string;
  id: string;
};

/**
 * Extract H2 + H3 headings for Table of Contents
 */
export function buildToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const toc: TocItem[] = [];

  const lines = markdown.split("\n");

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;

    const depth = match[1].length;
    const rawText = match[2];

    const cleanText = rawText
      .replace(/\[(.*?)\]\(.*?\)/g, "$1") // remove markdown links
      .replace(/`/g, "")
      .replace(/<[^>]*>/g, "")
      .trim();

    const id = slugger.slug(cleanText);

    toc.push({
      depth,
      text: cleanText,
      id,
    });
  }

  return toc;
}

/**
 * Render Markdown to HTML
 * Compatible with marked v14 (token-based renderer)
 */
export function renderMarkdown(markdown: string): string {
  const slugger = new GithubSlugger();

  const renderer = new marked.Renderer();

  renderer.heading = (token: Tokens.Heading) => {
    const level = token.depth;

    const cleanText = String(token.text)
      .replace(/<[^>]*>/g, "")
      .trim();

    const id = slugger.slug(cleanText);

    return `<h${level} id="${id}">${token.text}</h${level}>`;
  };

  marked.use({
    gfm: true,
    breaks: false,
    renderer,
  });

  return String(marked.parse(markdown));
}
