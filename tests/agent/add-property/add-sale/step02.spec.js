
import { fillStep02aboutyourplace } from './step-helpers/step02-about-your-place.js';

test('Step 02 About your place', async ({ page }) => {
  await fillStep02aboutyourplace(page);
});