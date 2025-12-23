# Taller de Verano de Programación Competitiva - USM

Website for the USM Competitive Programming Summer Workshop.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env` file in the root directory (if needed):
```bash
# Optional: Set your site URL for production
SITE_URL=https://your-domain.com
```

## Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

- `pnpm dev` - Start the development server with hot reload
- `pnpm build` - Build the site for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Check code quality with Biome
- `pnpm lint:fix` - Fix linting issues automatically
- `pnpm format` - Format code with Prettier


## Deployment

### Building for Production

Build the static site:

```bash
pnpm build
```

The output will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

