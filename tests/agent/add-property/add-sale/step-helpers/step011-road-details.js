import { expect } from '@playwright/test';

export async function fillStep11RoadDetails(page) {
  // Wait for page to be fully loaded
  await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  
  // Add delay to ensure elements are fully rendered
  await page.waitForTimeout(1000);
  
  // Verify section heading is visible
  const heading = page.locator('h1, [role="heading"]').filter({ hasText: /Provide property area and road details/i }).first();
  await heading.scrollIntoViewIfNeeded();
  await expect(heading).toBeVisible({ timeout: 10000 });

  // Verify description is visible
  await expect(page.getByText(/Enter details which suits your property. This will help buyers to understand your property better./i)).toBeVisible();

  // Verify all form fields are visible
  const livingSpaceInput = page.getByRole('textbox', { name: 'Living Space Area *' });
  const roadTypeLabel = page.getByText('Road Type');
  const propertyFaceLabel = page.getByText('Property Face');
  const roadWidthInput = page.getByRole('textbox', { name: 'Road Width (feet) *' });
  const builtYearInput = page.getByRole('textbox', { name: 'Built Year *' });

  // Use role-based combobox locators; this page has multiple comboboxes.
  // AX order observed: unit selector, road type, property face, B.S./A.D.
  const roadTypeCombo = page.getByRole('combobox').nth(1);
  const propertyFaceCombo = page.getByRole('combobox').nth(2);

  await expect(livingSpaceInput).toBeVisible();
  await expect(roadTypeLabel).toBeVisible();
  await expect(propertyFaceLabel).toBeVisible();
  await expect(roadWidthInput).toBeVisible();
  await expect(builtYearInput).toBeVisible();
  await expect(roadTypeCombo).toBeVisible();
  await expect(propertyFaceCombo).toBeVisible();

  // Verify navigation buttons are visible
  const backButton = page.getByRole('button', { name: 'Back' });
  const nextButton = page.getByRole('button', { name: 'Next' });
  await expect(backButton).toBeVisible();
  await expect(nextButton).toBeVisible();

  await livingSpaceInput.click();
  await livingSpaceInput.fill('321');
  await expect(livingSpaceInput).toHaveValue('321');

  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Pakki Sadak' }).click();

  await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
  await page.getByRole('option', { name: 'South', exact: true }).click();

  await roadWidthInput.click();
  await roadWidthInput.fill('12');
  await expect(roadWidthInput).toHaveValue('12');

  await builtYearInput.click();
  await builtYearInput.fill('1990');
  await expect(builtYearInput).toHaveValue('1990');

  // Click next button and verify navigation
  await nextButton.click();
  await page.waitForURL((url) => url.href.includes('/utilities'), { timeout: 15000 });
  await expect(page).toHaveURL(/\/utilities$/);
}
