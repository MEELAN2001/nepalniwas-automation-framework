import 'dotenv/config'; // load .env variables
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

export async function login(page) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await expect(page).toHaveURL('https://staging.nepalniwas.com/users/home');
}

test('user can login successfully', async ({ page }) => {
  await login(page);
});