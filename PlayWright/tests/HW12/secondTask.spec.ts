import { test, expect } from '@playwright/test';

test('Second Task', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/radio.html');
  await page.locator("#vfb-6-0").check();
  await page.locator("#vfb-6-1").check();
  await page.locator("#vfb-6-2").check();
  await expect(page.locator("#vfb-6-0")).toBeChecked();
  await expect(page.locator("#vfb-6-1")).toBeChecked();
  await expect(page.locator("#vfb-6-2")).toBeChecked();
  await page.locator("#vfb-6-0").uncheck();
  await page.locator("#vfb-6-1").uncheck();
  await page.locator("#vfb-6-2").uncheck();
  await expect(page.locator("#vfb-6-0")).not.toBeChecked();
  await expect(page.locator("#vfb-6-1")).not.toBeChecked();
  await expect(page.locator("#vfb-6-2")).not.toBeChecked();
});
