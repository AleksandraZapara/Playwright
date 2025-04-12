import { test, expect } from '@playwright/test';

test('Third task', async ({ page }) => {
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');
  const iframe = page.frameLocator('#iframeResult');
  await iframe.locator('select').selectOption('saab');
  await expect(iframe.locator('select')).toHaveValue('saab');
  await iframe.getByRole('button', { name: 'Submit' }).click();
  await expect(iframe.locator('body')).toContainText('Your input was received as:');
});
