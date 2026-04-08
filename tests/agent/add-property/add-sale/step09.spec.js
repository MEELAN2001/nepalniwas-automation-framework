import { fillStep09fillStep09MakeYourPlace } from "./step-helpers/step09-makeyourplace.js";

test('Step 09 Make Your Place', async ({ page }) => {
  await fillStep09MakeYourPlace(page);
});