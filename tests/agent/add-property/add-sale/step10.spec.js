import { fillStep10area } from "./step-helpers/step10-area.js";

test('Step 10 Area Details', async ({ page }) => {
  await fillStep10area (page);
});