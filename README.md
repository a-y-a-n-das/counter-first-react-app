# Counter (My first React App)

A minimal React + Vite project: a simple counter with clean, modern styling.

## Preview

Increment and decrement the count with responsive UI and subtle animations.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build (optional):

```bash
npm run preview
```

## Scripts

- `dev`: Start Vite dev server
- `build`: Create production build
- `preview`: Preview production build locally

## Tech Stack

- React (Vite)
- CSS (no framework)

## Project Structure

```
src/
  App.jsx       # Counter component
  App.css       # Component styles
  index.css     # Base styles and design tokens
  main.jsx      # App entry
```

## Customize Styles

Update CSS variables in `src/index.css` under `:root` to change theme colors (e.g., `--primary`, `--bg`, `--text`). Component-specific styles live in `src/App.css`.

## License

MIT
