import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});
import { defineConfig } from 'astro/config';
import markdown from '@astro/markdown';

export default defineConfig({
  integrations: [markdown()],
});

