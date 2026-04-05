import { test } from '@playwright/test';
import { login } from '../../../../utils/auth';
import { fillStep01Overview } from './step-helpers/step01-overview.js';
import { fillStep02aboutyourplace, fillStep02Overview } from './step-helpers/step02-about-your-place.js';
import { fillStep03propertytype } from './step-helpers/step03-property-type.js';
import { fillStep04stepdescription } from './step-helpers/step04-step-description.js';

// 🔥 ADD THIS BLOCK
test.beforeEach(async ({ page }) => {
  await login(page);
});

// ✅ Your test (no login here)
test('Full add sale flow', async ({ page }) => {
  // Navigate to the overview page after login
  await page.goto('https://staging.nepalniwas.com/users/sale/overview');
  await fillStep01Overview(page);
  await fillStep02aboutyourplace(page);
  await fillStep03propertytype(page);
  await fillStep04stepdescription(page);
});