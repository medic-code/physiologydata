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
  webServer: {
    command: 'npm run build && vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});
