
import { fillStep04stepdescription } from './step-helpers/step04-step-description';

test('Step 04 Step description', async ({ page }) => {
  await fillStep04stepdescription(page);
});