import { test, expect } from '@playwright/test';

test('First Task', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').fill('UserTest');
  await page.getByLabel('Password').fill('PasswordTest');
  await page.getByRole('button', {name: /login/i }).click();
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', {name: /login/i }).click();
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await page.getByRole('link', {name: /logout/i }).click();
  await expect(page.getByText('You logged out of the secure area!')).toBeVisible();
});
