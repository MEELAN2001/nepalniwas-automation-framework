import 'dotenv/config'; // load .env variables
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

  // Example assertion after login
  await expect(page).toHaveURL('https://staging.nepalniwas.com/users/home');
});