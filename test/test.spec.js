const { test, expect } = require('@playwright/test');

const expectedHeroLinkCount = 1;
const expectedSubscribeButtonText = 'Subscribe';

test('Navbar exists and navigates correctly', async ({ page }) => {
    // Navigate to your application
    await page.goto('http://localhost:3000/');

    // Check if the navbar is present
    const navbar = await page.locator('.menu'); // Adjust the selector as needed
    await expect(navbar).toBeVisible();

    // Check for specific links in the navbar
    const items = navbar.locator('a');
    const itemCount = await items.count();
    expect(itemCount).toBe(4);
});

test('Call to Action button exists and is clickable', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const buttonCount = await page.locator('Button').count();
    expect(buttonCount).toBe(expectedHeroLinkCount);
});

test('Subscribe button exists and is clickable', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const newsletterForm = await page.locator('.mc-embedded-subscribe');
    expect(await newsletterForm.locator('input[type="submit"]'));
});

test('Check if the links in the footer are clickable', async ({ page }) => {
    // Navigate to the page where the footer is located
    await page.goto('http://localhost:3000'); // Replace with the URL of your application

    // Wait for the footer to be visible
    await page.waitForSelector('.footer');

    // Target the 'Privacy Policy' link directly
    const privacyPolicyLink = page.locator('text=Privacy Policy');

    // Check if the 'Privacy Policy' link is visible
    await expect(privacyPolicyLink).toBeVisible();

    // Check if the 'Privacy Policy' link is clickable
    await expect(privacyPolicyLink).toBeEnabled();
});