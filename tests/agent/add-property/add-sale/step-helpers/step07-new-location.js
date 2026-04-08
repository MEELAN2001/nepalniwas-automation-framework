import { expect } from '@playwright/test';

export async function fillStep07newlocation(page) {
  await expect(page.getByRole('heading', { name: /Where's your place located\?/i })).toBeVisible({ timeout: 20000 });
  await expect(page.getByText(/Which floor is the property on\?/i)).toBeVisible();
  await expect(page.getByText(/Address Details/i)).toBeVisible();

  await expect(page.getByText('Province *', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('District *', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Municipality *', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Ward No. *', { exact: false }).first()).toBeVisible();
  await expect(page.getByText(/Area \(e\.g\. Balaju,\s*Thamel\) \*/i).first()).toBeVisible();
  await expect(page.getByText('Street/Tole *', { exact: false }).first()).toBeVisible();

  const exitButton = page.getByRole('button', { name: 'Exit' });
  const backButton = page.getByRole('button', { name: 'Back' });
  const nextButton = page.getByRole('button', { name: 'Next' });
  await expect(exitButton).toBeVisible();
  await expect(backButton).toBeVisible();
  await expect(nextButton).toBeVisible();

  const floorNumber = page.getByRole('textbox', { name: 'Floor Number' });
  const houseNumber = page.getByRole('textbox', { name: 'House Number' });
  await expect(floorNumber).toBeVisible();
  await expect(houseNumber).toBeVisible();
  await expect(floorNumber).toHaveValue('');
  await expect(houseNumber).toHaveValue('');

  const streetToleInput = page.getByRole('textbox', { name: 'Street/Tole *' });
  await expect(streetToleInput).toBeVisible();
  await streetToleInput.click();
  const currentStreetTole = (await streetToleInput.inputValue()).trim();
  if (!currentStreetTole) {
    await streetToleInput.fill('siddhartha street');
    await expect(streetToleInput).toHaveValue(/\S+/, { timeout: 5000 });
  }
  await page.getByRole('textbox', { name: 'House Number' }).click();
  await page.getByRole('textbox', { name: 'House Number' }).fill('h39');

  const currentUrl = page.url();
  await nextButton.click();
  
  // Wait for navigation to location page
  await page.waitForURL((url) => url.href.includes('/location'), { timeout: 15000 });
  await expect(page).toHaveURL(/\/location$/);
  
  // Wait 5-6 seconds on location page
  await page.waitForTimeout(5500);
  
  // Click next button again
  const locationUrl = page.url();
  await nextButton.click();
  
  // Wait for navigation to complete (away from location page)
  await page.waitForURL((url) => !url.href.includes('/location'), { timeout: 15000 });
  
  // Additional wait for page content to render
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
}