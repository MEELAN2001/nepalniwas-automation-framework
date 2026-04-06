import { expect } from '@playwright/test';

export async function fillStep05PropertyStatus(page) {
  // Wait for the main heading
  await expect(page.getByRole('heading', { name: /What’s the furnishing status of your Residential\?/i })).toBeVisible({ timeout: 10000 });

  // Assert all furnishing status options and their descriptions
  await expect(page.getByRole('heading', { name: /Unfurnished/i })).toBeVisible();
  await expect(page.getByText('Property without furniture or appliances.')).toBeVisible();

  await expect(page.getByRole('heading', { name: /Semi-Furnished/i })).toBeVisible();
  await expect(page.getByText('Property includes basic furniture and essential appliances.')).toBeVisible();

  await expect(page.getByRole('heading', { name: /Fully Furnished/i })).toBeVisible();
  await expect(page.getByText('Property with all furniture and appliances ready for occupancy.')).toBeVisible();

  // Assert navigation buttons
  await expect(page.getByRole('button', { name: 'Exit' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();

    // Select the 'Semi-Furnished' option by clicking the heading (if clickable)
   await page.getByRole('heading', { name: /Semi-Furnished/i }).click();
   
   await page.waitForTimeout(3000); // Short wait for UI update
   await page.getByRole('button', { name: 'Next' }).click();
}
