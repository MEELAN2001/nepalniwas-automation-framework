import { expect } from '@playwright/test';

export async function fillStep015Amenities(page) {
	await expect(page.getByRole('heading', { name: /Share some basics about your place/i })).toBeVisible({ timeout: 15000 });
	await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();

	await page.getByRole('checkbox', { name: 'Air Conditioning Air' }).click();
	await page.getByRole('checkbox', { name: 'Heating Heating' }).click();
	await page.getByRole('checkbox', { name: 'Ceiling Fan Ceiling Fan' }).click();
	await page.getByRole('checkbox', { name: 'Modular Kitchen Modular' }).click();
	await page.getByRole('checkbox', { name: 'Microwave Microwave' }).click();
	await page.getByRole('checkbox', { name: 'Oven Oven' }).click();
	await page.getByRole('checkbox', { name: 'Hot Running Water Hot Running' }).click();
	await page.getByRole('checkbox', { name: 'Stove Stove' }).click();

	await page.getByRole('button', { name: 'Next' }).click();
}
