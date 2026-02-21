import { expect, test } from '@playwright/test';

test('Navigation bar displays correct links and theme toggle', async ({ page, isMobile }) => {
	await page.goto('/');

	if (isMobile) {
		const menuBtn = page.getByRole('button', { name: 'main menu' });
		await expect(menuBtn).toBeVisible();
		await menuBtn.click();

		await expect(page.getByLabel('Open Mobile Menu')).toBeVisible();
	} else {
		await expect(page.getByRole('button', { name: 'theme toggle' })).toBeVisible();
	}

	await expect(page.getByRole('link', { name: 'Portfolio' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
});
