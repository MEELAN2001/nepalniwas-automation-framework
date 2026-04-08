import { test } from '@playwright/test';
import { fillStep012Utilities } from './step-helpers/step012-utilities.js';

test('Step 012 Utilities works', async ({ page }) => {
  await fillStep012Utilities(page);
});
