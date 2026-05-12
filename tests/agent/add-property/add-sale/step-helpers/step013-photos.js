import { expect } from '@playwright/test';
import path from 'path';

export async function fillStep013Photos(page) {
  // Assumes already on the photos page and logged in
  
  // Verify the photos form is visible
  await expect(page.getByRole('heading', { name: /Add some photos of your house/i })).toBeVisible({ timeout: 15000 });
  await expect(page.getByText(/To begin, please upload 5 photos/i)).toBeVisible();
  
  const exitButton = page.getByRole('button', { name: 'Exit' });
  const backButton = page.getByRole('button', { name: 'Back' });
  const nextButton = page.getByRole('button', { name: 'Next' });
  
  await expect(exitButton).toBeVisible();
  await expect(backButton).toBeVisible();
  
  // Click Add Photos button
  const addPhotosButton = page.getByRole('button', { name: 'Add Photos' });
  await expect(addPhotosButton).toBeVisible();
  await addPhotosButton.click();
  
  // Wait briefly for file input dialog
  await page.waitForTimeout(300);
  
  // Prepare file paths for the test images from photos directory
  const photosDir = path.join(__dirname, '../../../photos');
  const testImages = [
    path.join(photosDir, 'A.jpg'),
    path.join(photosDir, 'B.jpg'),
    path.join(photosDir, 'C.jpg'),
    path.join(photosDir, 'D.jpg'),
    path.join(photosDir, 'E.jpg')
  ];
  
  // Get the file input element and set files
  const fileInput = page.locator('input[type="file"].sr-only');
  await fileInput.setInputFiles(testImages);
  
  // Wait for preview to load
  await page.waitForTimeout(500);
  
  // Click Upload button
  const uploadButton = page.getByRole('button', { name: 'Upload', exact: true });
  await expect(uploadButton).toBeVisible({ timeout: 10000 });
  await uploadButton.click({ force: true });
  
  // Wait for upload to complete and button to enable
  await page.waitForTimeout(1000);
  
  // Wait for Next button to be enabled
  await nextButton.waitFor({ state: 'visible', timeout: 10000 });
  await page.waitForTimeout(200);
  
  // Click Next
  await nextButton.click({ force: true });
  
  // Wait for navigation away from photos page
  await page.waitForURL((url) => !url.href.includes('/photos'), { timeout: 15000 });
}
