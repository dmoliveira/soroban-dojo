import { defineConfig } from '@playwright/test';

const configuredBaseURL = process.env.PLAYWRIGHT_BASE_URL || 'https://dmoliveira.github.io/soroban-dojo/';
const baseURL = configuredBaseURL.endsWith('/') ? configuredBaseURL : `${configuredBaseURL}/`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'list' : 'html',
  use: {
    baseURL,
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
