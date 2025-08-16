import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        include: ['tests/unit/**/*.spec.js', 'tests/dom/**/*.spec.js', 'tests/e2e/**/*.spec.js'],
        exclude: [...configDefaults.exclude, 'tests/e2e/**'],
        setupFiles: './tests/setup.js',
        converage: {
            provider: 'v8',
            reports: ['text', 'html'],
        },
    },
});