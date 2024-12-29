import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',  // The directory where your test files are located
  timeout: 10000,  // Global test timeout
  retries: 1,  // Retries in case of test failure
  use: {
    baseURL: 'https://www.saucedemo.com',  // The base URL for all tests
    browserName: 'chromium',  // You can choose 'firefox', 'webkit', or 'chromium'
    headless: false,  // Set to false if you want to see the browser during tests
    screenshot: 'only-on-failure',  // Screenshot on failure
    video: 'retain-on-failure',  // Video recording on failure
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
