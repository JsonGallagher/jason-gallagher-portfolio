# Jason Gallagher Portfolio

A modern, responsive portfolio website for a Fractional CMO specializing in AI strategy, demand generation, and marketing automation. Built with React, Vite, and Tailwind CSS.

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

### Environment Variables

Create a `.env` file for API integrations:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 🎨 Features

### Portfolio
- **Fractional CMO Positioning** - Focused on AI strategy, demand generation, and marketing automation
- **Dark Mode** - Toggle between light and dark themes (persists in localStorage)
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Calendly Integration** - Direct booking for consultations

### The Shelf (`/shelf`)
A curated media collection page featuring:
- **Books, Films, TV Shows, Essays** - Organized by year consumed
- **Star Ratings** - 10-point scale with half-star support
- **Badges** - "Life-Changing" (star) and "Liked" (heart) indicators
- **Search & Filter** - Filter by status or search by title/creator
- **API Integrations**:
  - TMDB API for film/TV posters and descriptions
  - Open Library API for book covers and metadata
- **Detail Modals** - Rich media details with ratings, notes, and affiliate links

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
│   │   ├── Footer.jsx
│   │   └── shelf/
│   │       ├── ShelfTabs.jsx
│   │       ├── SearchBar.jsx
│   │       ├── FilterTags.jsx
│   │       ├── MediaGrid.jsx
│   │       ├── MediaCard.jsx
│   │       ├── MediaModal.jsx
│   │       └── Essays.jsx
│   ├── data/
│   │   ├── books.json
│   │   ├── films.json
│   │   └── tv.json
│   ├── pages/
│   │   └── Shelf.jsx
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

## 📚 Media Data Schema

### Films & TV Shows
```json
{
  "id": "film-slug",
  "title": "Film Title",
  "director": "Director Name",
  "year": 2025,
  "tmdbId": "12345",
  "lifeChanging": false,
  "liked": true,
  "rating": 8.5,
  "review": "Personal notes...",
  "affiliateUrl": "https://..."
}
```

### Books
```json
{
  "id": "book-slug",
  "title": "Book Title",
  "author": "Author Name",
  "year": 2025,
  "isbn": "9781234567890",
  "lifeChanging": true,
  "liked": false,
  "rating": 9,
  "review": "Personal notes...",
  "affiliateUrl": "https://..."
}
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

Portfolio content is organized in component files:
- `Hero.jsx` - Headline, stats, service cards
- `About.jsx` - Bio text
- `Expertise.jsx` - Feature cards
- `Experience.jsx` - Timeline data
- `Skills.jsx` - Skill categories

Media content is stored in JSON files under `src/data/`.

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with React, Vite, Tailwind CSS, and Framer Motion
