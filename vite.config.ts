/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry:    resolve(__dirname, 'lib/main.js'),
            name:     'Nestable',
            fileName: format => `nestable.${format}.js`,
        },
    },
    server: {
        port: 3080,
    },
});
