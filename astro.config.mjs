import { defineConfig } from 'astro/config';
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAstroRelativeMarkdownLinks],
  },
});
