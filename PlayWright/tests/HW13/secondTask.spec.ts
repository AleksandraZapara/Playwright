import { expect, test } from "@playwright/test"

test("first task", async ( {request} ) => {
   const response = await request.post('https://dummyjson.com/posts/add', {
    data: {
        title: "Awesome title",
        userId: 10
    }
   });

   expect(response.status()).toBe(201);

   const responseBody = await response.json();

   expect(responseBody.title).toBe("Awesome title");
   expect(responseBody.userId).toBe(10);
 });
