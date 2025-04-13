import { expect, test } from "@playwright/test"

test("first task", async ( {request} ) => {
   const response = await request.get('https://dummyjson.com/products', {
    params: {
        skip: 10,
        limit: 5
    }
   });

   expect(response.status()).toBe(200);

   const responseBody = await response.json();
   expect(responseBody.products.length).toBe(5);

   expect(responseBody.products[0].price).toBe(1899.99);
   expect(responseBody.products[1].rating).toBeLessThan(4);
   expect(responseBody.products[4].stock).toBeGreaterThan(10);
   expect(responseBody.products[0]).toHaveProperty("returnPolicy");
 });
