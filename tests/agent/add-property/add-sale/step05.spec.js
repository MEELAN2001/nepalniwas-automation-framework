import { fillStep05PropertyStatus } from "./step-helpers/step05-property-status";

test('Step 05 Property status', async ({ page }) => {
  await fillStep05PropertyStatus(page);
});