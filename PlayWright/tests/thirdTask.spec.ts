import { expect, test } from "@playwright/test"

test("third task", async ( {page} ) => {
   await page.goto("https://www.google.com/");
   const searchField = page.getByTitle('Пошук');
   await searchField.fill("Playwright"); 
   await searchField.press("Enter");
   await expect(page.getByText('Playwright')).toBeVisible();
})
