import { marked, type Tokens } from "marked";
import GithubSlugger from "github-slugger";

export type TocItem = {
  depth: number;
  text: string;
  id: string;
};

/**
 * Extract H2 + H3 headings for a clean Table of Contents
 */
export function buildToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const toc: TocItem[] = [];

  for (const line of markdown.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;

    const depth = match[1].length; // 2 or 3
    const rawText = match[2];

    const cleanText = rawText
      .replace(/\[(.*?)\]\(.*?\)/g, "$1") // strip markdown links
      .replace(/`/g, "")
      .replace(/<[^>]*>/g, "")
      .trim();

    const id = slugger.slug(cleanText);
    toc.push({ depth, text: cleanText, id });
  }

  return toc;
}

/**
 * Render Markdown to HTML
 * Compatible with marked v14 (token-based renderer).
 * No headerIds/headerPrefix (these are not in marked@14 typings).
 */
export function renderMarkdown(markdown: string): string {
  const slugger = new GithubSlugger();
  const renderer = new marked.Renderer();

  // marked@14: heading takes a token object (not text, level)
  renderer.heading = (token: Tokens.Heading) => {
    const level = token.depth;
    const clean = String(token.text).replace(/<[^>]*>/g, "").trim();
    const id = slugger.slug(clean);
    return `<h${level} id="${id}">${token.text}</h${level}>`;
  };

  // Use a safe config shape + cast to avoid TS mismatch across marked versions
  marked.use(({ gfm: true, breaks: false, renderer } as unknown) as any);

  return String(marked.parse(markdown));
}
