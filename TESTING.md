# 🚀 AsterDroids Testing Guide: Ensuring Stable Mining Operations

This document outlines the procedures for testing the AsterDroids game using Playwright. Our tests focus on end-to-end interactions, ensuring that the space mining simulation behaves as expected for real users.

## 📝 Testing Guidelines

### General Principles

-   **End-to-End Focus:** Tests must interact with actual HTML pages through the user interface.
-   **User-Centric:** Focus on what real users would see and interact with.
-   **No Mocks:** Avoid mock objects, unit tests, or test fixtures.
-   **Browser Compatibility:** Ensure tests run on all modern browsers.

### Test Structure

-   **Test Files:** Correspond to actual pages in the `/www` directory.
-   **Test Naming:** Use descriptive names that reflect the user journey or interaction being tested.
-   **URL Format:** Use relative URLs without the `/www/` prefix in test navigation (e.g., `/index.html` not `/www/index.html`).

## 🛠️ Tools of the Trade

-   **Playwright:** Our chosen tool for end-to-end testing.
-   **JSDoc Annotations:** Include type annotations for clarity.

## 🚀 Example Test: Initial Page Load

This example demonstrates how to test the initial page load of AsterDroids.

```javascript
// filepath: /home/jesse/AsterDroids/tests/initial-page-load.js
/**
 * @file Initial page load test for AsterDroids
 * @module tests/initial-page-load
 */
import { test, expect } from '@playwright/test';

test.describe('Initial Page Load 🚀', () => {
	// Shared emoji for this file domain
	const fileEmoji = '🚀';

	test('should display the correct title and elements', async ({ page }) => {
		// Navigate to the initial page
		await page.goto('/index.html');

		// Check the page title
		await expect(page).toHaveTitle('AsterDroids');

		// Check for the presence of the start game button
		const startButton = page.locator('[aria-label="Start Game"]');
		await expect(startButton).toBeVisible();

		// Log the successful test
		console.info(`${fileEmoji} ✅ Initial page loaded successfully.`);
	});
});
```

## 🛰️ Additional Tests

### Asteroid Selection Test

```javascript
// filepath: /home/jesse/AsterDroids/tests/asteroid-selection.js
/**
 * @file Asteroid selection test for AsterDroids
 * @module tests/asteroid-selection
 */
import { test, expect } from '@playwright/test';

test.describe('Asteroid Selection Interface 🪨', () => {
	// Shared emoji for this file domain
	const fileEmoji = '🪨';

	test('should allow selecting an asteroid and view details', async ({ page }) => {
		// Navigate to the initial page and start game
		await page.goto('/index.html');
		await page.click('[aria-label="Start Game"]');

		// Wait for navigation to the asteroid selection screen
		await page.waitForURL('/game/asteroid-selection.html');

		// Check for the presence of asteroid selection elements
		const asteroidGrid = page.locator('[aria-label="Asteroid Selection Grid"]');
		await expect(asteroidGrid).toBeVisible();

		// Select the first available asteroid
		await page.click('.asteroid-card:first-child');

		// Verify asteroid details are displayed
		const detailsPanel = page.locator('[aria-label="Asteroid Details"]');
		await expect(detailsPanel).toBeVisible();

		// Log the successful test
		console.info(`${fileEmoji} ✅ Asteroid selection test passed.`);
	});
});
```

## 📄 Documentation Index

-   [README.md](README.md) - Game overview
-   [ROADMAP.md](ROADMAP.md) - Development roadmap
-   [STYLE_GUIDE.md](STYLE_GUIDE.md) - Code and visual style guidelines
-   [CHANGELOG.md](CHANGELOG.md) - Update history
-   [www/components/README.md](www/components/README.md) - Component documentation
