import { expect, test } from "@playwright/test"

test("first task", async ( {page} ) => {
   await page.goto("https://example.com/");
   const title = await page.title();
   await expect(title).toBe("Example Domain");
   const mainUrl = page.url();
   await expect(mainUrl).toContain('example.com');
   const pElem = await page.textContent('p');
   await expect(pElem).toMatch(/This domain is for use in illustrative examples/);
   await expect(page.locator('h1')).toHaveText('Example Domain');
})
