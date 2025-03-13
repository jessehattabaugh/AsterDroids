/**
 * @file Main entry point for the AsterDroids game
 * @module index
 */

// Domain emoji for this file
const DOMAIN_EMOJI = '🚀';

/**
 * @typedef {Object} Star
 * @property {number} x - X position of the star
 * @property {number} y - Y position of the star
 * @property {number} size - Size of the star
 * @property {number} speed - Speed of the star movement
 * @property {string} color - Color of the star
 */

/**
 * Initialize the AsterDroids game
 */
function initializeGame() {
	console.info(`${DOMAIN_EMOJI} 🌟 AsterDroids game initializing...`);

	// Create starry background
	createStarryBackground();

	// Add event listener to the start button
	const startButton = document.querySelector('.start-button');
	if (startButton) {
		startButton.addEventListener('click', startGame);
		console.info(`${DOMAIN_EMOJI} 🔘 Start button event listener attached`);
	}

	console.info(`${DOMAIN_EMOJI} ✅ Game initialization complete`);
}

/**
 * Create a starry background animation
 */
function createStarryBackground() {
	const starsCanvas = document.getElementById('stars-canvas');
	if (!starsCanvas) {
		console.error(`${DOMAIN_EMOJI} ❌ Stars canvas element not found`);
		return;
	}

	// Create canvas element for stars
	const canvas = document.createElement('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	starsCanvas.appendChild(canvas);

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		console.error(`${DOMAIN_EMOJI} ❌ Could not get canvas context`);
		return;
	}

	// Array to store star objects
	/** @type {Star[]} */
	const stars = [];

	// Create stars
	for (let i = 0; i < 150; i++) {
		stars.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			size: Math.random() * 2,
			speed: 0.05 + Math.random() * 0.1,
			color: getStarColor(),
		});
	}

	// Animation loop
	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw each star
		stars.forEach((star) => {
			ctx.fillStyle = star.color;
			ctx.beginPath();
			ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
			ctx.fill();

			// Move star vertically for parallax effect
			star.y += star.speed;

			// Reset star position if it moves off-screen
			if (star.y > canvas.height) {
				star.y = 0;
				star.x = Math.random() * canvas.width;
			}
		});

		requestAnimationFrame(animate);
	}

	// Handle window resize
	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	// Start animation
	animate();
	console.info(`${DOMAIN_EMOJI} 🌠 Starry background created`);
}

/**
 * Get a random color for a star
 * @returns {string} Color string for the star
 */
function getStarColor() {
	const colors = [
		'rgba(255, 255, 255, 0.8)', // White
		'rgba(173, 216, 230, 0.8)', // Light blue
		'rgba(255, 223, 186, 0.8)', // Light orange
		'rgba(200, 200, 255, 0.8)', // Light purple
	];

	return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Start the game when the start button is clicked
 */
function startGame() {
	console.info(`${DOMAIN_EMOJI} 🎮 Starting AsterDroids game`);

	// TODO: Implement game start logic or navigate to game screen
	alert('Prepare for launch! Game implementation coming soon.');

	// In the future, we would:
	// 1. Load the asteroid selection screen
	// 2. Initialize the game engine
	// 3. Set up the player's initial resources and equipment
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeGame);
