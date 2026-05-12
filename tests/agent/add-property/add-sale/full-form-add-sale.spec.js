import { test } from '@playwright/test';
import { login } from '../../../../utils/auth';
import { fillStep01Overview } from './step-helpers/step01-overview.js';
import { fillStep02aboutyourplace } from './step-helpers/step02-about-your-place.js';
import { fillStep03propertytype } from './step-helpers/step03-property-type.js';
import { fillStep04stepdescription } from './step-helpers/step04-step-description.js';
import { fillStep06location } from './step-helpers/step06-location.js';
import { fillStep05PropertyStatus } from './step-helpers/step05-property-status.js';
import { fillStep07newlocation } from './step-helpers/step07-new-location.js';
import { fillStep08PropertyBasics } from './step-helpers/step08-property-basics.js';
import { fillStep09MakeYourPlace } from './step-helpers/step09-makeyourplace.js';
import { fillStep10area } from './step-helpers/step10-area.js';
import { fillStep11RoadDetails } from './step-helpers/step011-road-details.js';
import { fillStep012Utilities } from './step-helpers/step012-utilities.js';
import { fillStep013Photos } from './step-helpers/step013-photos.js';
import { fillStep014VideoTour } from './step-helpers/step014-video-tour.js';

// 🔥 ADD THIS BLOCK
test.beforeEach(async ({ page }) => {
  await login(page);
});

// ✅ Your test (no login here)
test('Full add sale flow', async ({ page }) => {
  test.setTimeout(180000);

  // Navigate to the home page after login
  await page.goto('https://staging.nepalniwas.com/users/home');

  // Navigate to the overview page 
  await page.goto('https://staging.nepalniwas.com/users/sale/overview');

  await fillStep01Overview(page);
  await fillStep02aboutyourplace(page);
  await fillStep03propertytype(page);
  await fillStep04stepdescription(page);
  await fillStep05PropertyStatus(page);
  await fillStep06location(page);
  await fillStep07newlocation(page);
  await fillStep08PropertyBasics(page);
  await fillStep09MakeYourPlace(page);
  await fillStep10area(page);
  await fillStep11RoadDetails(page);
  await fillStep012Utilities(page);
  await fillStep013Photos(page);
  await fillStep014VideoTour(page);

});