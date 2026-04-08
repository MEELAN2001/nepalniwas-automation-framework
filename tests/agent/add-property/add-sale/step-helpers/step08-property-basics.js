import { expect } from '@playwright/test';

export async function fillStep08PropertyBasics(page) {
  // Wait for page to be fully loaded
  await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  
  // Add delay to ensure elements are fully rendered
  await page.waitForTimeout(2000);
  
  // Log current URL for debugging
  console.log('Step 08 Current URL:', page.url());
  
  // Try to find the heading with multiple attempts
  const heading = page.locator('h1, [role="heading"]').filter({ hasText: /layout of the property/i }).first();
  await heading.scrollIntoViewIfNeeded();
  await expect(heading).toBeVisible({ timeout: 10000 });

  // Verify all property layout sections are visible
  await expect(page.getByText('Floors', { exact: true })).toBeVisible();
  await expect(page.getByText('Bedrooms', { exact: true })).toBeVisible();
  await expect(page.getByText('Bathrooms', { exact: true })).toBeVisible();
  await expect(page.getByText('Living Room', { exact: true })).toBeVisible();
  await expect(page.getByText('Kitchens', { exact: true })).toBeVisible();
  await expect(page.getByText('Car Parking Space', { exact: true })).toBeVisible();
  await expect(page.getByText('MotorBike Parking Space', { exact: true })).toBeVisible();

  // Verify navigation buttons are visible
  const backButton = page.getByRole('button', { name: 'Back' });
  const nextButton = page.getByRole('button', { name: 'Next' });
  await expect(backButton).toBeVisible();
  await expect(nextButton).toBeVisible();

  // Increase floors to 3
  await page.getByRole('button', { name: 'Increase floors' }).click();
  await page.getByRole('button', { name: 'Increase floors' }).click();
  await page.getByRole('button', { name: 'Increase floors' }).click();
  await page.getByRole('button', { name: 'Increase floors' }).click();
  await page.getByRole('button', { name: 'Increase floors' }).click();
  await page.getByRole('button', { name: 'Decrease floors' }).click();
  await page.getByRole('button', { name: 'Decrease floors' }).click();
  
  // Increase bedrooms to 3
  await page.getByRole('button', { name: 'Increase bedrooms' }).click();
  await page.getByRole('button', { name: 'Increase bedrooms' }).click();
  await page.getByRole('button', { name: 'Increase bedrooms' }).click();
  
  // Increase bathrooms to 3
  await page.getByRole('button', { name: 'Increase bathrooms' }).click();
  await page.getByRole('button', { name: 'Increase bathrooms' }).click();
  await page.getByRole('button', { name: 'Increase bathrooms' }).click();
  
  // Increase living rooms to 2
  await page.getByRole('button', { name: 'Increase living room' }).click();
  await page.getByRole('button', { name: 'Increase living room' }).click();
  await page.getByRole('button', { name: 'Increase living room' }).click();
  await page.getByRole('button', { name: 'Decrease living room' }).click();
  
  // Increase kitchens to 3
  await page.getByRole('button', { name: 'Increase kitchens' }).click();
  await page.getByRole('button', { name: 'Increase kitchens' }).click();
  await page.getByRole('button', { name: 'Increase kitchens' }).click();
  
  // Increase car parking spaces to 2
  await page.getByRole('button', { name: 'Increase car parking space' }).click();
  await page.getByRole('button', { name: 'Increase car parking space' }).click();
  
  // Increase motorbike parking to 2
  await page.getByRole('button', { name: 'Increase motorbike parking' }).click();
  await page.getByRole('button', { name: 'Increase motorbike parking' }).click();

  //wait for the data to see eithe rits is full fille or not properly
  await page.waitForTimeout(10000);  
  
  // Click next button and verify navigation
  await nextButton.click();
  await page.waitForURL((url) => url.href.includes('/make-your-place'), { timeout: 15000 });
  await expect(page).toHaveURL(/\/make-your-place$/);
}
