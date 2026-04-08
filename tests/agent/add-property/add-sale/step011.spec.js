import { fillStep11RoadDetails} from "./step-helpers/step011-road-details.js";

test('Step 11 Road Details', async ({ page }) => {
  await fillStep11RoadDetails (page);
});