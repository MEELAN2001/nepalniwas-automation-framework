import { expect } from '@playwright/test';

export async function fillStep01Overview(page) {
  // Assumes already on the overview page and logged in
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
