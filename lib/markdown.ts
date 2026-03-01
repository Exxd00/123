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

  for (const line of markdown.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;

    const depth = match[1].length;
    const rawText = match[2];

    const cleanText = rawText
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
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
 * marked@14 compatible (token-based renderer)
 *
 * IMPORTANT:
 * We intentionally keep headerIds/headerPrefix but cast to any
 * so TypeScript won't fail even if marked typings don't include them.
 */
export function renderMarkdown(markdown: string): string {
  const slugger = new GithubSlugger();
  const renderer = new marked.Renderer();

  // ✅ marked@14: heading receives a token object (not text, level)
  renderer.heading = (token: Tokens.Heading) => {
    const level = token.depth;
    const clean = String(token.text).replace(/<[^>]*>/g, "").trim();
    const id = slugger.slug(clean);
    return `<h${level} id="${id}">${token.text}</h${level}>`;
  };

  // ✅ Keep these options but force TS to accept them
  marked.use(
    ({
      gfm: true,
      breaks: false,
      headerIds: true,     // will not break TypeScript due to "as any"
      headerPrefix: "",    // will not break TypeScript due to "as any"
      renderer,
    } as unknown) as any
  );

  return String(marked.parse(markdown));
}
