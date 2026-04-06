import { expect } from '@playwright/test';

export async function fillStep06location(page) {
  // Wait for the location heading
  await expect(page.getByRole('heading', { name: /Where's your place located\?/i })).toBeVisible({ timeout: 20000 });

  // Wait for the textbox to be visible and interactable
  const textbox = page.getByRole('textbox', { name: 'Search for a location in Nepal' });
  await expect(textbox).toBeVisible({ timeout: 10000 });
  await textbox.click();
  await textbox.fill('boudha');
  // Wait up to 1 minute for the suggestion to appear after searching

  // Wait up to 1 minute for the suggestion containing the address to appear and select it
  const suggestion = page.getByText('Boudha, Ward 6, Kathmandu, Bagmati', { exact: false });
  await expect(suggestion.first()).toBeVisible({ timeout: 60000 });
  await suggestion.first().click();

  // Wait for the Next button and click
  const nextBtn = page.getByRole('button', { name: 'Next' });
  await expect(nextBtn).toBeVisible({ timeout: 10000 });

  // Verify navigation to the expected location page
  await page.waitForURL('**/users/sale/new/location', { timeout: 10000 });
  expect(page.url()).toContain('/users/sale/new/location');
}