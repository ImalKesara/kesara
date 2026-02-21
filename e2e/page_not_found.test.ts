import { expect, test } from '@playwright/test';

test('Displays 404 page for non-existent routes', async ({ page }) => {
	const nonExistentRoute = await page.goto('/this-page-does-not-exist');
	expect(nonExistentRoute?.status()).toBe(404);

	await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
	await expect(
		page.getByRole('heading', { name: "Couldn't find the page you were looking for." })
	).toBeVisible();

	const homeLink = page.getByRole('link', { name: 'Go to Home btn' });
	await expect(homeLink).toBeVisible();
	await homeLink.click();

	await expect(page).toHaveURL('/');
});
