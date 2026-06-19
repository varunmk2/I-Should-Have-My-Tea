# I Should Have My Tea — A Static Blog

> A calm, warm-colored lo-fi blog with theme system. Built with Vite + React + Tailwind CSS.  
> Designed for GitHub Pages hosting with zero backend required.

![I Should Have My Tea](https://img.shields.io/badge/theme-system-blue) ![Status](https://img.shields.io/badge/status-ready-brightgreen)

---

## ✨ Features

- **4 Themed Scenes**: Ocean (blue), Library (cream), City (purple), Train (pink) — now with image support
- **Full-Page Theming**: Entire UI updates with theme colors
- **Dark Mode**: Dark variant for each theme
- **Customize Modal**: Easy theme + mode toggle in footer
- **Markdown Blog**: Add posts by editing `src/data/posts.js`
- **Client-Side Search & Filter**: Instant filtering by title, description, or tags
- **Responsive Design**: Mobile-first, works everywhere
- **Image Scenes**: Replace SVGs with your own images anytime

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# 1. Extract the zip file
cd blog

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → Visit http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output in /dist ready for GitHub Pages
```

---

## 📁 Project Structure

```
I Should Have My Tea/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PostCard.jsx
│   │   ├── CustomizeModal.jsx          ← Theme toggle (now in footer)
│   │   └── scenes/
│   │       ├── OceanScene.jsx          ← Blue theme (displays image)
│   │       ├── LibraryScene.jsx        ← Cream theme (displays image)
│   │       ├── CityScene.jsx           ← Purple theme (displays image)
│   │       └── TrainScene.jsx          ← Pink theme (displays image)
│   ├── context/
│   │   └── ThemeContext.jsx            ← Global theme state + color palettes
│   ├── data/
│   │   └── posts.js                    ← ⭐ ADD POSTS HERE
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── Article.jsx
│   │   └── About.jsx
│   ├── styles/
│   │   └── index.css                   ← Global styles
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── images/                         ← 📸 Add your theme images here
│   │   ├── ocean-theme.jpg
│   │   ├── library-theme.jpg
│   │   ├── city-theme.jpg
│   │   └── train-theme.jpg
│   └── favicon.svg
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 📝 Adding Posts

Open **`src/data/posts.js`** and add to the `posts` array:

```js
{
  slug: "my-post-url",              // URL: /blog/my-post-url
  title: "Post Title",
  description: "Short preview text shown on cards",
  pubDate: "2024-12-01",            // ISO date
  tags: ["Tag1", "Tag2"],           // Used by blog filter
  readTime: "5 min read",
  featuredImage: null,              // For future use
  content: `
# Markdown Title

Your post content here. [Links](https://example.com) work.

> Blockquotes get styled nicely.

\`\`\`js
// Code blocks too
console.log("hello");
\`\`\`
  `,
}
```

Save and dev server reloads instantly. No build step needed.

---

## 🎨 Customizing Colors & Scenes

### Change Theme Colors

Edit **`src/context/ThemeContext.jsx`** → `themePalettes`:

```js
ocean: {
  light: {
    bg: '#c8e0f5',        // Background
    accent: '#1e7ecc',    // Primary buttons & accents
    text: '#0f2a4a',      // Body text
    // ... more colors
  },
  dark: { /* ... */ }
}
```

### Replace Scene Images with Your Own

Each scene component (e.g., `OceanScene.jsx`) now expects an image file. The image paths are defined in `src/pages/Home.jsx`:

```js
const imagePaths = {
  ocean: '/images/ocean-theme.jpg',
  library: '/images/library-theme.jpg',
  city: '/images/city-theme.jpg',
  train: '/images/train-theme.jpg',
};
```

1. Add your images to `/public/images/`
2. Update the paths in `src/pages/Home.jsx` to match your filenames
3. Recommended image size: 1200×300px or similar aspect ratio

The scene components now render:

```jsx
export default function OceanScene({ imagePath }) {
  return (
    <img
      src={imagePath}
      alt="theme"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '0 0 8px 8px',
      }}
    />
  );
}
```

---

## 🌐 Deploy to GitHub Pages

### One-Time Setup

1. **Create a GitHub repo** and push your code:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/quiet-blog.git
   git branch -M main
   git push -u origin main
   ```

2. **Update `vite.config.js`** if using a sub-path:
   ```js
   base: '/quiet-blog/',  // If repo is NOT your-username.github.io
   // OR
   base: '/',             // If repo IS your-username.github.io
   ```

3. **Enable GitHub Pages**:
   - Settings → Pages → Source: **GitHub Actions**
   - The `.github/workflows/deploy.yml` will auto-build & deploy

4. **Site goes live at**:
   - `https://YOUR_USERNAME.github.io/quiet-blog/` (or just `https://YOUR_USERNAME.github.io/` if using the main repo)

---

## 💭 Design Tokens

| Theme | Light BG | Accent | Vibe |
|-------|----------|--------|------|
| **Ocean** | `#c8e0f5` | `#1e7ecc` | Calm, blue, peaceful |
| **Library** | `#f5e8d8` | `#b8794a` | Warm, cozy, literary |
| **City** | `#e8d4f5` | `#8a5acc` | Purple, modern, edgy |
| **Train** | `#f5d8e8` | `#d45a8a` | Pink, romantic, journey |

All themes adapt to dark mode with inverted tones.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **Vite** | Lightning-fast build & dev server |
| **React 18** | UI rendering |
| **React Router v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **marked.js** | Markdown → HTML |
| **DOMPurify** | XSS sanitization |

**No database. No backend. Pure static.**

---

## 📋 Customization Checklist

- [ ] Update author bio in `src/pages/About.jsx`
- [ ] Change favicon in `public/favicon.svg` (default: tea cup)
- [ ] Update site title/meta in `index.html`
- [ ] Add your own posts to `src/data/posts.js`
- [ ] (Optional) Replace scene SVGs with your images
- [ ] (Optional) Tweak colors in `src/context/ThemeContext.jsx`
- [ ] Set `base` in `vite.config.js` for GitHub Pages
- [ ] Deploy & enjoy! 🚀

---

## 📄 License

Free to use, modify, and deploy. Built with ❤️ for you.

---

**Questions? Issues?** Check the code — it's well-organized and ready to hack on.

Happy blogging!
