import { expect } from '@playwright/test';

export async function fillStep014VideoTour(page) {
  // Assumes already on the video tour page and logged in
  
  // Verify the video tour form is visible
  await expect(page.getByRole('heading', { name: /Add a video tour of your property/i })).toBeVisible({ timeout: 15000 });
  await expect(page.getByText(/Show potential guests what it's like to walk through/i)).toBeVisible();
  
  // Verify optional badge is visible
  await expect(page.getByText('Optional')).toBeVisible();
  
  const exitButton = page.getByRole('button', { name: 'Exit' });
  const backButton = page.getByRole('button', { name: 'Back' });
  const nextButton = page.getByRole('button', { name: 'Next' });
  
  // Verify all navigation buttons are visible
  await expect(exitButton).toBeVisible();
  await expect(backButton).toBeVisible();
  await expect(nextButton).toBeVisible();
  
  // Since video is optional, simply click Next to proceed
  await nextButton.click();
  
  // Wait for navigation to complete (away from video page)
  await page.waitForURL((url) => !url.href.includes('/video'), { timeout: 15000 });
}
