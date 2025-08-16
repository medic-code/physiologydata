/* write e2e specs here */
import { test } from '@playwright/test';

test('app boots', async({ page, baseURL }) => {
    await page.goto(baseURL);
});