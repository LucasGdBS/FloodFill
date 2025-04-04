

## Summary

1. [About the Project](#about-the-project)
2. [Project Structure](#project-structure)
3. [Flood Fill Algorithm](#flood-fill-algorithm)
   - [Example Usage](#example-usage)
   - [Game Objective](#game-objective)
4. [Project Setup (React, TypeScript, Vite)](#project-setup-react-typescript-vite)
   - [Official Plugins](#official-plugins)
   - [Enhancing ESLint Configuration](#enhancing-eslint-configuration)
   - [Adding React-Specific Lint Rules](#adding-react-specific-lint-rules)
   - [Notes](#notes)

---

## About the Project

The **FloodFill** project is an interactive application developed using **React**, **TypeScript**, and **Vite**. It simulates the famous flood fill algorithm, commonly used in image editors (like the "paint bucket" tool). The goal of the game is to fill a grid of squares with the same color using the fewest clicks possible.

The user interface allows:
- Selecting a color to fill the squares.
- Clicking on a square to apply the fill.
- Shuffling the grid to start a new game.
- Viewing the number of clicks made and receiving visual feedback upon winning.

---

## Project Structure
The project is organized into modular files, with the main functionalities divided as follows:
- **`src/App.tsx`**: The main component that manages the grid state, selected color, and click count.
- **`src/components/SquareMatrixComponent/index.tsx`**: Component that renders the grid of squares and applies the flood fill algorithm.
- **`src/utils/floodFill.ts`**: Implementation of the flood fill algorithm.
- **`src/utils/allSameColor.ts`**: Function that checks if all squares in the grid have the same color.
- **`src/types/colorClasses.ts`**: Defines the available colors in the game.

---

## Flood Fill Algorithm

- The `floodFill` algorithm is a method used to fill a connected area in a multi-dimensional array (such as a grid or image) starting from a given point. It is commonly used in applications like image editing (e.g., the "bucket fill" tool) and pathfinding.
- The algorithm starts at a given point in the grid and replaces all connected cells with the same target color with a new color. It uses a recursive Depth-First Search (DFS) approach to traverse the grid.
- This implementation is written in TypeScript and designed to work with a grid of objects, where each object has a `color` property.

The file [`src/utils/floodFill.ts`](src/utils/floodFill.ts) implements the flood fill algorithm. Here's a summary of how it works:
 
1. **Input**:
  - **`matrix`**: A 2D array of objects, where each object has a `color` property.
  - **`row`**: The starting row index.
  - **`col`**: The starting column index.
  - **`newColor`**: The color to replace the target color.

2. **Initialization**:
   - Determine the dimensions of the grid (`numRows` and `numCols`).
   - Identify the target color at the starting point.

3. **Base Case**:
   - If the target color is the same as the new color, return the original grid (no changes needed).

3. **Recursive DFS**:
   - Check if the current cell is within bounds and matches the target color.
   - Replace the target color with the new color.
   - Recursively call the function for the neighboring cells (up, down, left, right).

5. **Termination**:
   - The recursion stops when the cell is out of bounds or does not match the target color.
   
### Example Usage
In the [`SquareMatrix`](src/components/SquareMatrixComponent/index.tsx) component, the algorithm is triggered when a square is clicked. It updates the grid with the new colors and increments the click counter.

### Game Objective
The goal is to fill the entire grid with the same color using the fewest clicks possible. Victory is detected by the [`allSameColor`](src/utils/allSameColor.ts) function, which checks if all cells have the same color.

This project combines concepts of algorithms, interactivity, and responsive design, making it a great demonstration of how to merge logic and user interface in a modern application.

---

## Project Setup (React, TypeScript, Vite)

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

### Official Plugins

Two official plugins are available for React integration:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

### Enhancing ESLint Configuration

For production-grade applications, consider expanding the ESLint configuration to enable type-aware linting rules. Here's an example:

```js
export default tseslint.config({
  extends: [
    // Replace ...tseslint.configs.recommended with one of the following:
    ...tseslint.configs.recommendedTypeChecked, // Recommended type-aware rules
    ...tseslint.configs.strictTypeChecked, // Stricter type-aware rules
    ...tseslint.configs.stylisticTypeChecked, // Optional stylistic rules
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Adding React-Specific Lint Rules

To improve linting for React projects, install the following plugins:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x): Provides React-specific lint rules.
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom): Adds lint rules for React DOM.

Update your ESLint configuration as follows:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules, // Recommended TypeScript rules for React
    ...reactDom.configs.recommended.rules, // Recommended rules for React DOM
  },
});
```

### Notes

- Ensure your `tsconfig` files are properly set up for type-aware linting.
- Use stricter rules for better code quality in production environments.
- These configurations can be customized further based on your project's needs.

---

## The FloodFill Algorithm

The `floodFill` algorithm is a method used to fill a connected area in a multi-dimensional array (such as a grid or image) starting from a given point. It is commonly used in applications like image editing (e.g., the "bucket fill" tool) and pathfinding.

This implementation is written in TypeScript and designed to work with a grid of objects, where each object has a `color` property.

