import { expect } from '@playwright/test';

export async function fillStep10RoadDetails(page) {
  // Wait for page to be fully loaded
  await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  
  // Add delay to ensure elements are fully rendered
  await page.waitForTimeout(1000);
  
  // Verify section heading is visible
  const heading = page.locator('h1, [role="heading"]').filter({ hasText: /Provide property area details/i }).first();
  await heading.scrollIntoViewIfNeeded();
  await expect(heading).toBeVisible({ timeout: 10000 });

  // Verify key sections are visible
  await expect(page.getByText(/Enter property area in your preferred measurement system/i)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sq. Feet' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Ropani' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Bigha' })).toBeVisible();
  
  // Verify quick conversion reference is visible
  await expect(page.getByText(/Quick Conversion Reference/i)).toBeVisible();
  await expect(page.getByText(/Ropani System/i)).toBeVisible();
  await expect(page.getByText(/Bigha System/i)).toBeVisible();
  await expect(page.getByText(/Metric Conversion/i)).toBeVisible();

  // Verify area input field is visible
  const areaInput = page.getByRole('textbox', { name: 'Area (Sq. Feet) *' });
  await expect(areaInput).toBeVisible({ timeout: 10000 });

  // Verify navigation buttons are visible
  const backButton = page.getByRole('button', { name: 'Back' });
  const nextButton = page.getByRole('button', { name: 'Next' });
  await expect(backButton).toBeVisible();
  await expect(nextButton).toBeVisible();

  // Click through measurement unit options (Sq. Feet, Ropani, Bigha tabs)
  await page.getByRole('button', { name: 'Sq. Feet' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Ropani' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Bigha' }).click();
  await page.waitForTimeout(300);
  
  // Select Sq. Feet and fill in the area
  await page.getByRole('button', { name: 'Sq. Feet' }).click();
  await page.waitForTimeout(300);
  
  // Fill in the area field
  await areaInput.click();
  await areaInput.fill('2234');
  await expect(areaInput).toHaveValue('2234');
  
  // Click next button and verify navigation
  await nextButton.click();
  await page.waitForURL((url) => url.href.includes('/road-details'), { timeout: 15000 });
  await expect(page).toHaveURL(/\/road-details$/);
}
