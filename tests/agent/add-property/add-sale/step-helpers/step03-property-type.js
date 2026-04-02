import { expect } from '@playwright/test';

export async function fillStep03propertytype(page) {
  // Assumes already on the overview page and logged in
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: /What kind of place are you listing\?/i })).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: /Residential/i })).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: /Commercial/i })).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: /Land/i })).toBeVisible({ timeout: 10000 });
  const exitButton = page.getByRole('button', { name: 'Exit' });
  await expect(exitButton).toBeVisible();  
  const backButton = page.getByRole('button', { name: 'Back' });
  await expect(backButton).toBeVisible();

  // Click/select Residential option
  const residentialOption = page.getByRole('heading', { name: /Residential/i });
  await residentialOption.click();

  const nextButton = page.getByRole('button', { name: 'Next' });
  await expect(nextButton).toBeVisible();
  await page.waitForTimeout(500); // Short wait for UI update
  await nextButton.click();
}
