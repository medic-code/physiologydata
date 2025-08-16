import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests/e2e',
    retries: 0,
    use: {
        trace: 'on-first-retry', // collect trace if a test retries
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        baseURL: process.env.E2E_BASE_URL || 'http://localhost:4173', // vite preview default
    },
    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ],
});