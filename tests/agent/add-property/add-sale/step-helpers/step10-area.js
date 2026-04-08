import { expect } from '@playwright/test';

export async function fillStep10area(page) {
  await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(1000);

  const heading = page
    .locator('h1, [role="heading"]')
    .filter({ hasText: /Provide property area details/i })
    .first();
  await expect(heading).toBeVisible({ timeout: 10000 });

  const areaInput = page.getByRole('textbox', { name: 'Area (Sq. Feet) *' });
  const nextButton = page.getByRole('button', { name: 'Next' });

  await expect(page.getByRole('button', { name: 'Sq. Feet' })).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('button', { name: 'Ropani' })).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('button', { name: 'Bigha' })).toBeVisible({ timeout: 10000 });
  await expect(areaInput).toBeVisible({ timeout: 10000 });
  await expect(nextButton).toBeVisible();

  await page.getByRole('button', { name: 'Ropani' }).click();
  await page.getByRole('button', { name: 'Bigha' }).click();
  await page.getByRole('button', { name: 'Sq. Feet' }).click();
  await areaInput.click();
  await areaInput.fill('221');
  await expect(areaInput).toHaveValue('221');

  await nextButton.click();
  await page.waitForURL((url) => url.href.includes('/road-details'), { timeout: 15000 });
  await expect(page).toHaveURL(/\/road-details$/);
}
