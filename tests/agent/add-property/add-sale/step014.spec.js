import { test } from '@playwright/test';
import { fillStep014VideoTour } from './step-helpers/step014-video-tour.js';

test('Step 014 Video Tour works', async ({ page }) => {
  await fillStep014VideoTour(page);
});
