import { marked, type Tokens } from "marked";
import GithubSlugger from "github-slugger";

export type TocItem = { depth: number; text: string; id: string };

export function buildToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const toc: TocItem[] = [];

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const depth = match[1].length;
    const text = match[2].replace(/\[(.*?)\]\(.*?\)/g, "$1").trim();
    const id = slugger.slug(text);
    toc.push({ depth, text, id });
  }

  return toc;
}

export function renderMarkdown(markdown: string) {
  const slugger = new GithubSlugger();

  // marked@14 uses token-based renderer signatures (e.g. heading(token)).
  // We generate stable heading IDs for in-page anchors + ToC links.
  const renderer = new marked.Renderer();
  renderer.heading = (token: Tokens.Heading) => {
    const level = token.depth;
    // token.text is a plain-text representation of the heading.
    const clean = String(token.text).replace(/<[^>]*>/g, "");
    const id = slugger.slug(clean);
    return `<h${level} id="${id}">${token.text}</h${level}>`;
  };

  marked.use({
    gfm: true,
    breaks: false,
    renderer,
  });

  return marked.parse(markdown);
}
