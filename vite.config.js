import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(dirname(fileURLToPath(import.meta.url)), 'src'),
        },
    },
});
