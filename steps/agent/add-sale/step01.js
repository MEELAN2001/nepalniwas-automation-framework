import { expect } from '@playwright/test';

export async function fillStep01Overview(page) {
  await page.goto('/users/sale/overview');

  await page.waitForLoadState('networkidle');

  await expect(page.getByText(/Tell us about your place/i)).toBeVisible();
  await expect(page.getByText(/Make it stand out/i)).toBeVisible();
  await expect(page.getByText(/Finish up and publish/i)).toBeVisible();
}