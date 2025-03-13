# DealFairly - Next.js Serverless Web Application

A modern web application built with Next.js that showcases server-side rendering (SSR) and is optimized for serverless deployment.

## Features

- **Server-Side Rendering (SSR)**: Pre-renders pages on the server for better SEO and performance
- **Serverless Ready**: Optimized for deployment to serverless environments like Vercel, AWS Lambda, or Netlify
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **Responsive Design**: Fully responsive design that works well on all devices
- **API Routes**: Serverless API endpoints for data fetching
- **Dynamic Routes**: SEO-friendly dynamic routes for products and categories
- **TypeScript**: Type-safe code for better developer experience
- **Dark Mode Support**: Automatically adapts to system dark mode preferences

## Technologies Used

- **Next.js 15**: App Router, Server Components, API Routes
- **React 19**: Latest React with server components
- **TypeScript**: For type safety
- **Tailwind CSS 4**: For styling
- **ESLint**: For code quality

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/next-web-deal-fairly.git
   cd next-web-deal-fairly
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/
├── src/                    # Source directory
│   ├── app/                # App Router pages
│   │   ├── api/            # API routes (serverless functions)
│   │   ├── category/       # Category pages
│   │   ├── deals/          # Deal detail pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   └── lib/                # Utilities and data fetching functions
└── public/                 # Static assets
```

## Deployment

This project is optimized for serverless deployment. You can deploy it to various platforms:

### Deploy to Vercel

The easiest way to deploy is using Vercel, which is optimized for Next.js:

```
npm install -g vercel
vercel
```

### Deploy to AWS Lambda

You can deploy to AWS Lambda using the Serverless framework:

1. Install Serverless Framework:
   ```
   npm install -g serverless
   ```

2. Build the application:
   ```
   npm run build
   ```

3. Deploy using your AWS credentials.

### Deploy to Netlify

You can also deploy to Netlify:

1. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Deploy to Netlify:
   ```
   netlify deploy
   ```

## Server-Side Rendering (SSR)

This application uses Next.js's App Router and Server Components for server-side rendering. The benefits include:

- **Better SEO**: Search engines can crawl the fully rendered HTML content
- **Improved Performance**: Users see content faster, reducing time to first contentful paint
- **Reduced Client-Side JavaScript**: Less JavaScript needed in the browser

## Serverless Functions

The API routes in `src/app/api/` are serverless functions that run on-demand. They demonstrate how to:

- Handle HTTP requests (GET, POST, etc.)
- Process query parameters
- Return JSON responses
- Implement error handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
