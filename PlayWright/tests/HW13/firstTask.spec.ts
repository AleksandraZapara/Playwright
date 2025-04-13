import { expect, test } from "@playwright/test"

test("first task", async ( {request} ) => {
   const response = await request.get('https://reqres.in/api/users/2');

   expect(response.status()).toBe(200);

   const responseBody = await response.json();

   expect(responseBody.data.first_name).toBe("Janet");
   expect(responseBody.data.last_name).toBe("Weaver");
   expect(responseBody.data.email).toBe("janet.weaver@reqres.in");
 });
