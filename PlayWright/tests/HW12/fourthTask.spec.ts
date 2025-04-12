import { test, expect } from '@playwright/test';

test('Fourth task', async ({ page }) => {
  await page.goto('http://formy-project.herokuapp.com/form');
  await page.getByLabel('First name').fill('Sam');
  await page.getByLabel('Last name').fill('Robertson');
  await page.getByLabel('Job title').fill('Test Automation Engineer');
  await page.locator('#radio-button-2').check();
  await page.locator('#checkbox-1').check();
  await page.getByLabel('Years of experience:').selectOption('3');
  await page.locator('#datepicker').fill('14/12/2024');
  await page.getByRole('button', { name: 'Submit' }).click();;
  await expect(page.getByText('The form was successfully submitted!')).toBeVisible();
});
