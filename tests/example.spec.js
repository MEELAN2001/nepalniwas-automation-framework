import { test, expect } from '@playwright/test';

test('Open Login Page', async ({ page }) => {
  await page.goto('https://staging.nepalniwas.com/login');
  await expect(page).toHaveTitle('Login');
  await page.waitForTimeout(3000);
});