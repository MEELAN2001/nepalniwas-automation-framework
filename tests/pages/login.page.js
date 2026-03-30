// pages/login.page.js
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.continueWithEmailButton = page.getByRole('button', { name: 'Continue with Email' });
    this.emailInput = page.getByRole('textbox', { name: 'Enter your email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
    this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
  }

  async goto() {
    await this.page.goto('https://staging.nepalniwas.com/');
    await expect(this.loginButton).toBeVisible();
  }

  async login(email, password) {
    await this.loginButton.click();
    await this.continueWithEmailButton.click();

    await this.emailInput.fill(email);
    await this.continueButton.click();

    await this.passwordInput.fill(password);
    await this.continueButton.click();

    // Wait for home page after login
    await expect(this.page).toHaveURL('https://staging.nepalniwas.com/users/home');
  }
}