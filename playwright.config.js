import { defineConfig, devices } from '@playwright/test';

/**
 * Get base URL from environment variable or use default
 * This allows testing different environments (local, staging, production)
 */
const getBaseUrl = () => {
	// If BASE_URL is explicitly provided, it takes precedence
	if (process.env.BASE_URL) {
		return process.env.BASE_URL;
	}

	// Otherwise use environment-specific defaults
	if (process.env.TEST_ENV === 'staging') {
		return process.env.STAGING_URL || 'https://staging.example.com';
	}
	if (process.env.TEST_ENV === 'production') {
		return process.env.PROD_URL || 'https://production.example.com';
	}

	// Default to localhost for local development
	return 'http://localhost:3000';
};

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [
		['html', { open: 'never' }],
		['list', { printSteps: true }]
	],

	// Group test files by page
	testMatch: '**/tests/pages/**/*.test.js',

	// Configure the flat snapshot directory
	snapshotDir: './snapshots',

	// Configure expectations
	expect: {
		// Configure screenshot comparison
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.05,
			// Use a naming convention that includes "baseline" for base snapshots
			snapshotPathTemplate: '{snapshotDir}/{arg}{ext}',
		},
	},

	// Dev server configuration
	webServer: {
		command: 'npm run dev',
		port: 3000,
		timeout: 120000,
		reuseExistingServer: !process.env.CI,
		cwd: process.cwd(),
	},

	use: {
		baseURL: getBaseUrl(),
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
		// Set up route mapping for test domains to localhost
		routing: {
			url: request => {
				// Map example.com domains to localhost
				const url = new URL(request);
				if (url.hostname === 'jessesworld.example.com') {
					// Keep the path but change the origin to localhost:3000
					url.hostname = 'localhost';
					url.port = '3000';
					url.protocol = 'http:';
					return url.toString();
				}
				return request;
			},
		},
	},

	// Configure projects for different browsers
	projects: [
		{
			name: 'chromium',
			use: {
				browserName: 'chromium',
				viewport: { width: 1280, height: 720 },
			},
		},
		{
			name: 'firefox',
			use: {
				browserName: 'firefox',
				viewport: { width: 1280, height: 720 },
			},
		},
		{
			name: 'webkit',
			use: {
				browserName: 'webkit',
				viewport: { width: 1280, height: 720 },
			},
		},
		{
			name: 'mobile-chrome',
			use: {
				browserName: 'chromium',
				...devices['Pixel 5'],
			},
		},
		{
			name: 'mobile-safari',
			use: {
				browserName: 'webkit',
				...devices['iPhone 12'],
			},
		},
	],
});
