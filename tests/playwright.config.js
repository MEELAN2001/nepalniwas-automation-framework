// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  use: {
    baseURL: 'https://staging.nepalniwas.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'auth.json',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});