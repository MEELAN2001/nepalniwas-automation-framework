import { fillStep07newlocation } from "./step-helpers/step07-new-location";

test('Step 07 New Location', async ({ page }) => {
  await fillStep07newlocation(page);
});