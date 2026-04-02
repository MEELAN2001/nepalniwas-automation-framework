import { expect } from '@playwright/test';

export async function fillStep02aboutyourplace(page) {
  // Assumes already on the overview page and logged in
  await page.waitForLoadState('networkidle');
  await expect(page.getByText(/Tell us about the property you're selling/i)).toBeVisible({ timeout: 10000 });
  const exitButton = page.getByRole('button', { name: 'Exit' });
  await expect(exitButton).toBeVisible();  
  const backButton = page.getByRole('button', { name: 'Back' });
  await expect(backButton).toBeVisible();
  const getStartedButton = page.getByRole('button', { name: 'Next' });
  await expect(getStartedButton).toBeVisible();
  await page.waitForTimeout(2000);
  await getStartedButton.click();
}
