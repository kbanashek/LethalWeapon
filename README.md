# Lethal Weapon Fishing Charters Website

A modern, responsive website for a fishing charter business built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Home page with featured catches and boat images
- Rates page with pricing information
- Contact form for booking inquiries with email functionality
- Interactive map showing the marina location using Leaflet
- Photo gallery to showcase the boat and catches
- AWS deployment ready

## Prerequisites

- Node.js 14.x or higher
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd fishing-charter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
fishing-charter/
├── public/               # Static files
│   └── images/           # Image assets
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Next.js pages
│   └── styles/           # CSS styles
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Adding Your Own Images

Replace the placeholder images in the `public/images/` directory with your own images:

- `hero-boat.jpg` - Hero image for the home page
- `boat.jpg` - Image of your charter boat
- `catch1.jpg`, `catch2.jpg`, etc. - Images of trophy catches
- `rates-hero.jpg` - Hero image for the rates page
- `contact-hero.jpg` - Hero image for the contact page
- `gallery-hero.jpg` - Hero image for the gallery page

## Deployment to AWS

This website can be deployed to AWS using various services:

### Option 1: AWS Amplify

1. Create a new Amplify app in the AWS console
2. Connect your repository
3. Configure build settings
4. Deploy

### Option 2: AWS S3 + CloudFront

1. Build the static site:

```bash
npm run build
npm run export
```

2. Upload the `out` directory to an S3 bucket
3. Set up CloudFront for CDN distribution
4. Configure the domain with Route 53

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to update the color scheme:

```js
theme: {
  extend: {
    colors: {
      'ocean-blue': '#1a5276',
      'sunset-orange': '#f39c12',
      'deep-sea': '#154360',
    },
  },
},
```

### Updating Content

Edit the content in the respective page files:

- Home page: `src/pages/index.tsx`
- Rates page: `src/pages/rates.tsx`
- Contact page: `src/pages/contact.tsx`
- Gallery page: `src/pages/gallery.tsx`

## License

This project is licensed under the MIT License.
