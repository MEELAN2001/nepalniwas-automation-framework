import { test, expect } from '@playwright/test';

test('tests', async ({ page }) => {
  await page.goto('https://staging.nepalniwas.com/');
  await page.waitForTimeout(5000);
  //wait for 5 sec before clicking on login button
  await page.getByRole('button', { name: 'Login' }).click();

});