# 🚀 AsterDroids Style Guide: The Aesthetic of Space Mining

This guide outlines our aesthetic principles and coding practices to maintain a consistent atmosphere of futuristic space mining across the game.

## 📝 Code Structure & Formatting

### General Guidelines

-   **Indentation:** Use tabs for indentation, not spaces—maintaining clear code hierarchy
-   **File Organization:** Group related functionality like components of a space station
-   **Component Structure:** Each component should serve a singular purpose in the mining operation

### Naming Conventions

-   **Files:** Use kebab-case for filenames (`mining-drone.js`, not `miningDrone.js`)
-   **Components:** Use PascalCase for component names (`MiningDrone`, not `miningDrone`)
-   **Functions:** Use camelCase for function names (`extractResource`, not `extract_resource`)
-   **CSS Classes:** Use kebab-case for CSS classes (`.asteroid-surface`, not `.asteroidSurface`)
-   **Constants:** Use UPPER_SNAKE_CASE for constants (`MAXIMUM_CARGO_CAPACITY`, not `maximumCargoCapacity`)

### JavaScript Guidelines

-   **ES Modules:** Use ES modules exclusively for imports/exports—for modular components
-   **Modern JavaScript:** Embrace template literals and destructuring for clean code
-   **Function Creation:** Only create new functions for code reuse (at least two call sites)
-   **JSDoc Comments:** Include JSDoc type annotations to ensure code clarity

### CSS Guidelines

-   **Selectors:** Use simple, shallow selectors to target the right elements efficiently
-   **Variables:** Define CSS custom properties at the :root level for consistent theming
-   **Nesting:** Avoid deeply nested CSS rules for better performance

## 🌑 Project-Specific Conventions

### Console Logging

-   Use two emojis per console message—one representing the file's domain, one for the specific message
-   Suggested emoji domains:
    -   🚀 Spacecraft/vehicle systems
    -   🪨 Mining and resource extraction
    -   ⚙️ UI interactions
    -   🛰️ Navigation and movement
    -   📊 Resource management
    -   🔧 Crafting and construction

### Game Element Guidelines

-   **Buttons:** Should have clear hover states indicating interactivity
-   **Progress bars:** Should visually represent resource extraction and processing
-   **Input Fields:** Should respond to input with visual feedback
-   **Dropdown Menus:** Should provide clear categorization of options
-   **Toggle Controls:** Should have distinct on/off states for drone commands

## 🎨 Visual Design Guidelines

### Color Palette

```css
:root {
	--color-space: #0a0e17;
	--color-space-lighter: #1a2030;
	--color-text-primary: #e6e6ff;
	--color-text-secondary: #a6c8ff;
	--color-warning: #ffa500;
	--color-success: #42b883;
	--color-error: #ff4757;
	--color-metal: #8f9194;
	--color-rare-mineral: #7b68ee;
	--color-ice: #a5f2f3;
	--shadow-panel: 0 0 10px rgba(80, 140, 255, 0.2);
	--glow-blue: 0 0 15px rgba(30, 144, 255, 0.6);
	--glow-green: 0 0 15px rgba(66, 184, 131, 0.6);
}
```

### Typography

-   **Headings:** "Nova", our futuristic display font (fallback: sans-serif)
-   **Body Text:** "Stellar Sans", our readable sans-serif (system-ui, sans-serif)
-   **Technical Text:** "Quantum Mono", our monospaced font for data (monospace fallback)
-   **Font Sizes:** Use relative units (rem) with a base size of 16px
-   **Line Heights:** 1.5 for body text, 1.2 for headings

### Iconography

-   Use space and technology-themed SVG icons from our custom icon library
-   Icon colors should respect our color palette
-   Icons may subtly animate on hover to indicate interactivity

### Animation Guidelines

-   Keep animations smooth and tech-focused
-   Use subtle pulsing animations for active systems
-   Reserve more dramatic animations for significant events like successful mining operations

## 🌠 Environmental Visual Changes

-   **Asteroid Surface:** Textured, irregular terrain with visible resource deposits
-   **Base Camp:** Modular, expandable structures with clear connection points
-   **Space Background:** Dynamic starfield with occasional distant phenomena
-   **Lighting:** Stark contrast between lit areas and shadows due to no atmosphere

## 🛰️ Game Element States

-   **Inactive:** Muted colors, minimal or no animation
-   **Active:** Brighter colors, subtle animation indicating operation
-   **Warning:** Yellow/orange highlights, moderate pulsing animation
-   **Critical:** Red highlights, more pronounced animation
-   **Upgrade Available:** Blue or green highlights with "ready" indicator

Remember that these guidelines are meant to enhance the atmosphere of futuristic space mining. The user interface should balance technological complexity with usability, creating an immersive experience of commanding a mining operation in the vastness of space.
