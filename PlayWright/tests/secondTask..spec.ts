import { expect, test } from "@playwright/test"

test("second task", async ( {page} ) => {
   await page.goto("https://playwright.dev/");
   const mainUrl = page.url();
   await expect(mainUrl.startsWith('https://playwright.dev/')).toBe(true);
   const text = await page.getByText(/Get started/i)
   await expect(text).toHaveCount(1)
})
