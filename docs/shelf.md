# Retained Shelf page

The collection page remains available at `/shelf` for direct access. It is no longer linked from the desktop or mobile navigation.

The implementation is in `src/pages/Shelf.jsx` and `src/components/shelf`. It contains books, films, and TV shows grouped by year consumed, with search, Life-Changing / Liked filters, ratings, personal notes, and detail overlays.

## Optional API setup

For film and TV posters and metadata, copy `.env.example` to `.env` and set:

```dotenv
VITE_TMDB_API_KEY=your_tmdb_api_key
```

The same variable can be configured in Cloudflare's build environment. Without it, TMDB metadata fetching is skipped. The homepage and Projects page do not use this key.

Book covers and metadata use Open Library without an API key. Fetched metadata is cached in local storage for 24 hours.

## Collection data

Edit `src/data/books.json`, `src/data/films.json`, and `src/data/tv.json`. The `year` field is the year consumed; release/publication details come from the metadata providers.

### Films and TV shows

TV records use `creator` instead of `director`. Rating, review, and personal flags can be omitted when they are not populated.

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
