import { test, expect } from '@playwright/test';

async function fillStep01Overview(page) {
  await page.goto('https://staging.nepalniwas.com/users/sale/overview');
  console.log('After redirect URL:', page.url());
  await page.waitForLoadState('networkidle');
  await expect(page.getByText(/Tell us about your place/i)).toBeVisible({ timeout: 15000 });
  await expect(page.getByText(/Make it stand out/i)).toBeVisible({ timeout: 10000 });
  await expect(page.getByText(/Finish up and publish/i)).toBeVisible({ timeout: 10000 });
  const exitButton = page.getByRole('button', { name: 'Exit' });
  await expect(exitButton).toBeVisible();
  const getStartedButton = page.getByRole('button', { name: 'Get started' });
  await expect(getStartedButton).toBeVisible();
  await getStartedButton.click();
}

test('Step 01 Overview works', async ({ page }) => {
  await fillStep01Overview(page);
});