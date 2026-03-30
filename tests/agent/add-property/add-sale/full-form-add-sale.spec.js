import { test } from '@playwright/test';
import { fillStep01Overview } from './step01.spec.js';
import { login } from '../../../Authentication/login.spec.js';

test('Full add sale flow: login and step 01 overview', async ({ page }) => {
  // Call the login function from login.spec.js
  await login(page);
  // Then run step 01 overview
  await fillStep01Overview(page);
});
