import { expect } from '@playwright/test';

export async function fillStep04stepdescription(page) {
  // Wait for the main heading
  await expect(page.getByRole('heading', { name: /What kind of place are you listing in Residential/i })).toBeVisible({ timeout: 10000 });

  // Assert that all property type options are visible
  await expect(page.getByRole('heading', { name: /Room/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Apartment|Flat/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Studio/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Single Family|Bungalow/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Multi-Family/i })).toBeVisible();

  // Assert navigation buttons
  await expect(page.getByRole('button', { name: 'Exit' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();

  // Select the 'Room' option by clicking the heading (if clickable)
  await page.getByRole('heading', { name: /Room/i }).click();
  await page.waitForTimeout(500); // Short wait for UI update
  await page.getByRole('button', { name: 'Next' }).click();
}
