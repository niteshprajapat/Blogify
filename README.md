# Next.js Blog Application

A modern, dark-mode blog platform built with **Next.js 14** (App Router) and the Sling Academy public API. This project demonstrates clean server-side rendering, dynamic routing, filtering, pagination, and responsive UI design — all while strictly adhering to the constraint of **avoiding client components** (except minimal ones for instant UX like search and filters).

## Features

-   **Fully Server Components** (minimal client code only for debounced inputs)
-   **Dark Mode** with glassmorphism cards and subtle blur effects
-   **Blog Listing** (`/`)
    -   Responsive grid (1–3 columns)
    -   Instant **title search** with debounce (no submit button needed)
    -   **Category filter** (dynamic from data + "All Categories")
    -   **Posts per page** selector (instant update)
    -   **Clear Filters** button (resets everything to defaults)
    -   Pagination with preserved filters
    -   **Skeleton loading** during fetches
-   **Single Blog Post** (`/blog/[slug]-[id]`)
    -   Hybrid ID routing (SEO-friendly)
    -   Clean, immersive dark layout with hero image
    -   Prose styling for rich HTML content
-   **Top Visited Blogs** page (`/top-blogs`)
    -   Simulated popularity (fake views + sort)
    -   Highlighted top posts
-   Responsive design, Tailwind CSS, modern hover effects
-   Error handling & 404 page

## Tech Stack

-   **Next.js 14** (App Router)
-   **Tailwind CSS** (dark theme + custom utilities)
-   **React Suspense** + skeletons for loading states
-   Public API: [Sling Academy Blog Posts](https://api.slingacademy.com/v1/sample-data/blog-posts)

## Getting Started

### Prerequisites

-   Node.js 18+ (recommended: 20+)
-   npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/niteshprajapat/Blogify
cd your-repo

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```
