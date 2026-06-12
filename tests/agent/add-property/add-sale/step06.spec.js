import { test } from "@playwright/test";
import { fillStep06location } from "./step-helpers/step06-location";

test('Step 06 Location', async ({ page }) => {
  await fillStep06location(page);
});