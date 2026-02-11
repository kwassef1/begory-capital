This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## UI Framework & Styling

This project uses a modern UI stack with the following technologies:

### Shadcn UI
- Component library built on Radix UI primitives
- Configured with the "new-york" style variant
- Components are customizable and accessible
- Configuration file: `components.json`

### Tailwind CSS v4
- Utility-first CSS framework
- Custom theme configuration with CSS variables in `src/app/globals.css`
- Uses `oklch` color space for better color consistency
- Integrated with PostCSS for processing

### Theme System
- Dark mode support via `next-themes`
- Custom theme provider component at `src/components/theme-provider.tsx`
- CSS custom properties for dynamic theming
- Configurable color schemes and radius values

### UI Components
- **Button**: Accessible button component with multiple variants (default, destructive, outline, secondary, ghost, link)
- **Theme Provider**: Wrapper component for theme management
- **Utilities**: Helper functions for className management using `clsx` and `tailwind-merge`

### Animation
- `tailwindcss-animate` for smooth transitions and animations
- `tw-animate-css` for additional animation utilities

### Icons
- Lucide React for a comprehensive icon library

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
begory-capital/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles with Tailwind & theme variables
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components (button, etc.)
│   │   └── theme-provider.tsx
│   └── lib/
│       └── utils.ts      # Utility functions
├── components.json       # Shadcn UI configuration
└── package.json          # Project dependencies
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Adding UI Components

This project uses Shadcn UI. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Components will be automatically configured based on `components.json` settings.
