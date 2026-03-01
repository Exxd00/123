import { marked, type Tokens } from "marked";
import GithubSlugger from "github-slugger";
import sanitizeHtml from "sanitize-html";

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
    const raw = match[2];

    const clean = raw
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .replace(/`/g, "")
      .replace(/<[^>]*>/g, "")
      .trim();

    toc.push({
      depth,
      text: clean,
      id: slugger.slug(clean),
    });
  }

  return toc;
}

/**
 * Render Markdown to HTML
 * Compatible with marked v14+
 */
export function renderMarkdown(markdown: string): string {
  const slugger = new GithubSlugger();

  const renderer = new marked.Renderer();

  renderer.heading = (token: Tokens.Heading) => {
    const level = token.depth;
    const clean = String(token.text).replace(/<[^>]*>/g, "").trim();
    const id = slugger.slug(clean);

    return `<h${level} id="${id}">${token.text}</h${level}>`;
  };

  const html = marked.parse(markdown, {
    gfm: true,
    breaks: false,
    renderer,
  }) as string;

  // Safety: sanitize rendered HTML (prevents XSS if content ever becomes external).
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ]),
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      "*": ["id", "class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "nofollow noopener", target: "_blank" }),
    },
  });
}
