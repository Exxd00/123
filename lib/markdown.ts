import { marked } from "marked";
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

  marked.use({
    gfm: true,
    breaks: false,
    headerIds: true,
    headerPrefix: "",
    renderer: {
      heading(text, level) {
        const clean = String(text).replace(/<[^>]*>/g, "");
        const id = slugger.slug(clean);
        return `<h${level} id="${id}">${text}</h${level}>`;
      }
    }
  });

  return marked.parse(markdown);
}
