import { test, expect } from '@playwright/test';

test('simple login check', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#user-name')).toBeVisible();
});
