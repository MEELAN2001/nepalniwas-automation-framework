import { expect } from '@playwright/test';

export async function fillStep012Utilities(page) {
  // Assumes already on the utilities page and logged in
  await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  
  // Verify the utilities form is visible
  await expect(page.getByText(/Tick the available utilities/i)).toBeVisible({ timeout: 15000 });
  
  const exitButton = page.getByRole('button', { name: 'Exit' });
  await expect(exitButton).toBeVisible();
  
  const backButton = page.getByRole('button', { name: 'Back' });
  await expect(backButton).toBeVisible();
  
  const nextButton = page.getByRole('button', { name: 'Next' });
  await expect(nextButton).toBeVisible();
  
  // Wait for page to settle
  await page.waitForTimeout(2000);
  
  // Select Electricity Supply options
  await page.locator('div').filter({ hasText: /^Electricity Supply$/ }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Community Distribution$/ }).click();
  await page.getByText('National Grid Connection').click();
  
  // Select Water Supply options
  await page.locator('div').filter({ hasText: /^Water Supply$/ }).nth(2).click();
  await page.getByText('Municipal Water Supply').click();
  
  // Select Sewer System options
  await page.locator('div').filter({ hasText: /^Sewer System$/ }).nth(2).click();
  await page.getByText('Community Sewage System').click();
  
  // Select Drainage System options
  await page.locator('div').filter({ hasText: /^Drainage System$/ }).nth(2).click();
  await page.getByText('Municipal Drainage System').click();
  
  // Select Waste Management options
  await page.locator('div').filter({ hasText: /^Waste Management$/ }).nth(3).click();
  await page.locator('div').filter({ hasText: /^Waste Management$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Waste Management$/ }).nth(2).click();
  await page.getByText('Municipal Waste Collection').click();
  
  // Take screenshot of completed utilities form
  await page.screenshot({ path: 'test-results/step012-utilities-filled.png' });
  
  // Click Next button to proceed
  await nextButton.click();
  await page.waitForURL((url) => url.href.includes('/photos'), { timeout: 15000 });
  await expect(page).toHaveURL(/\/photos$/);
}

