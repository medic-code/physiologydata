/* write e2e specs here */
import { test, expect } from '@playwright/test';

test('app boots', async({ page, baseURL }) => {
    await page.goto(baseURL);
    // Adjust the selector to something you know will exist
});