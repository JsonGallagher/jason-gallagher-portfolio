# Jason Gallagher Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth scroll animations, dark mode toggle, and a clean design.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download the project
cd jason-gallagher-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 🎨 Features

- **Dark Mode** - Toggle between light and dark themes (persists in localStorage)
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Fast Performance** - Vite for lightning-fast development and builds
- **SEO Ready** - Meta tags and Open Graph support

## 📁 Project Structure

```text
jason-gallagher-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── headshot.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Expertise.jsx
│   │   ├── Values.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys

Or use the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → "Import from Git"
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:

```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

Update `vite.config.js`:

```js
export default defineConfig({
  base: "/your-repo-name/",
  plugins: [react()],
});
```

Then run:

```bash
npm run build
npm run deploy
```

## 🛠 Customization

### Colors

Edit `tailwind.config.js` to change the color palette:

```js
colors: {
  primary: {
    DEFAULT: '#f1f0ed',  // Light background
    dark: '#1a1a1a',     // Dark background
  },
  // ...
}
```

### Fonts

The site uses Google Fonts (Instrument Serif + DM Sans). To change fonts:

1. Update the `<link>` in `index.html`
2. Update `fontFamily` in `tailwind.config.js`

### Content

All content is organized in component files:

- `Hero.jsx` - Stats, browser cards
- `About.jsx` - Bio text
- `Expertise.jsx` - Feature cards
- `Experience.jsx` - Timeline data
- `Skills.jsx` - Skill categories

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion
