import { test } from '@playwright/test';
import { fillStep013Photos } from './step-helpers/step013-photos.js';

test('Step 013 Photos works', async ({ page }) => {
  await fillStep013Photos(page);
});
