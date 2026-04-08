import { fillStep10RoadDetails } from "./step-helpers/step10-roaddetails.js";

test('Step 10 Road Details', async ({ page }) => {
  await fillStep10RoadDetails(page);
});