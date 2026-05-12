import { test } from '@playwright/test';
import { fillStep015Amenities } from './step-helpers/step015-amenities.js';

test('Step 015 Amenities works', async ({ page }) => {
  await fillStep015Amenities(page);
});
