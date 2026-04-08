import { expect } from '@playwright/test';

export async function fillStep09MakeYourPlace(page) {
  // Wait for page to be fully loaded
  await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  
  // Add delay to ensure elements are fully rendered
  await page.waitForTimeout(1000);
  
  // Verify section heading is visible
  const heading = page.locator('h1, [role="heading"]').filter({ hasText: /Make your place stand out/i }).first();
  await heading.scrollIntoViewIfNeeded();
  await expect(heading).toBeVisible({ timeout: 10000 });

  // Verify key sections are visible
  await expect(page.getByText(/Step 2/i)).toBeVisible();
  await expect(page.getByText(/In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then, you’ll create a title and description./i)).toBeVisible();

  // Verify navigation buttons are visible
  const backButton = page.getByRole('button', { name: 'Back' });
  const nextButton = page.getByRole('button', { name: 'Next' });
  await expect(backButton).toBeVisible();
  await expect(nextButton).toBeVisible();
  
  // Click next button and verify navigation
  await nextButton.click();
  await page.waitForURL((url) => url.href.includes('/area'), { timeout: 15000 });
  await expect(page).toHaveURL(/\/area$/);
}
