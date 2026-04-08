import { fillStep08PropertyBasics } from "./step-helpers/step08-property-basics";

test('Step 08 Property Basics', async ({ page }) => {
  await fillStep08PropertyBasics(page);
});