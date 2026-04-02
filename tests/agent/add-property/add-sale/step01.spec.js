
import { fillStep01Overview } from './step-helpers/step01-overview.js';

test('Step 01 Overview works', async ({ page }) => {
  await fillStep01Overview(page);
});