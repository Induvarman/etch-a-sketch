# Etch-a-Sketch 🎨

A browser-based sketching canvas built using vanilla JavaScript, HTML5, and CSS3. You can set a custom grid size, draw on the canvas, or switch to a random color mode.

🚀 **[Live Demo](https://induvarman.github.io/etch-a-sketch/index.html)**

---

## ✨ Features

*   **Custom Grid Sizes:** Enter a number in the form to instantly create a new grid (like 16x16, 32x32, or 64x64).
*   **Two Drawing Modes:** 
    *   *Normal Mode:* Draws in standard monochrome shading.
    *   *Rainbow Mode:* Generates a completely random RGB color every time your mouse enters a square.
*   **Clear Canvas:** Wipe the drawing board clean with one click without resetting your grid size.

---

## 🛠️ How it Works under the Hood

*   **CSS Layout Math:** Instead of hardcoding static percentages, the project uses a single CSS variable (`--order`) on the parent container. The squares use `calc(100% / var(--order))` to automatically resize themselves perfectly.
*   **Smart Event Tracking:** Instead of putting hundreds of separate event listeners on every single square (which slows down the browser), a single `mouseover` listener listens to the parent grid container and checks if a cell is being touched using `e.target`.
*   **State Tracking:** A simple `mode` variable tracks whether the user is sketching in `"normal"` or `"rainbow"` mode, updating the colors on the fly.

---

## 📬 Author

**Induvarman**  
*Self-taught Web Developer & IT Student*