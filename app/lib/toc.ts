// lib/toc.ts

export interface TOCHeading {
  text: string;
  slug: string;
  level: number;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-');    // Replace multiple - with single -
}

export function extractHeadings(blocks: any[]): TOCHeading[] {
  if (!Array.isArray(blocks)) return [];

  const headings: TOCHeading[] = [];

  blocks.forEach((block) => {
    // Only care about h2 and h3
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      // Extract the text from the block's children
      const text = block.children?.map((child: any) => child.text).join('') || '';
      if (text) {
        headings.push({
          text,
          slug: slugify(text),
          level: block.style === 'h2' ? 2 : 3,
        });
      }
    }
  });

  return headings;
}
