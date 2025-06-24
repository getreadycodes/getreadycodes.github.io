import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Use '/' for GitHub user/org pages like getreadycodes.github.io
  plugins: [react()],
});
