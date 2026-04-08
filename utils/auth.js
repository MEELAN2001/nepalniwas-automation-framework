import 'dotenv/config';

export async function login(page) {
  const baseUrl = process.env.BASE_URL || 'https://staging.nepalniwas.com';
  await page.goto(`${baseUrl}/login`);

  // Click Continue with Email
  await page.getByRole('button', { name: 'Continue with Email' }).click();

  // Fill email and continue
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(process.env.USER_EMAIL);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  // Fill password and continue
  await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  // Wait for home page after login
  await page.waitForURL('**/users/home');
}