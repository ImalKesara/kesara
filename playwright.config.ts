import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	webServer: { command: 'npm run build && npm run preview', port: 4173 },
	testDir: 'e2e',
	projects: [
		{
			name: 'Mobile (Default)',
			use: {
				...devices['iPhone 12'],
				isMobile: true
			}
		},
		{
			name: 'Tablet/Small Laptop',
			use: {
				viewport: { width: 1024, height: 768 },
				userAgent: devices['Desktop Chrome'].userAgent
			}
		},
		{
			name: 'Desktop (lg/xl)',
			use: {
				viewport: { width: 1024, height: 768 },
				userAgent: devices['Desktop Chrome'].userAgent
			}
		}
	]
});
