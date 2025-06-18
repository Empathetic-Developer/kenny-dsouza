
# Kenny Dsouza - Portfolio Website

A modern, minimalist glass morphism portfolio website built with React, TypeScript, and Tailwind CSS.

## Project info

**URL**: https://lovable.dev/projects/e4dde206-3808-4c3a-833e-465d94b2d868

## Features

- 🎨 Minimalist glass morphism design
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ♿ Accessible and SEO optimized
- ⚡ Built with modern web technologies

## Technologies Used

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom glass morphism effects
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Local Development

To run this project locally:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Configure Custom Domain** (Optional):
   - If you have a custom domain, update the `cname` field in `.github/workflows/deploy.yml`
   - Add a CNAME file to the `public` directory with your domain

3. **Automatic Deployment**:
   - The site automatically deploys when you push to the `main` branch
   - GitHub Actions will build and deploy the site
   - Check the "Actions" tab to monitor deployment status

### Manual Deployment

If you prefer manual deployment:

```sh
# Build the project
npm run build

# Deploy to GitHub Pages (if you have gh-pages installed)
npm install -g gh-pages
gh-pages -d dist
```

### Environment Configuration

The project includes:
- **Base URL**: Configured for GitHub Pages in `vite.config.ts`
- **Build Optimization**: Optimized bundle splitting and asset handling
- **SEO**: Comprehensive meta tags and structured data

## Project Structure

```
src/
├── components/          # React components
├── pages/              # Page components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── index.css           # Global styles and glass morphism utilities
```

## Customization

### Glass Morphism Theme
The glass morphism effects are defined in `src/index.css` with CSS custom properties that automatically adapt to light/dark modes.

### Content Updates
- **Personal Info**: Update `src/components/Hero.tsx`
- **Skills**: Modify `src/components/Skills.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Contact**: Update `src/components/Contact.tsx`

## SEO Features

- Comprehensive meta tags
- Structured data (JSON-LD)
- Open Graph and Twitter Card support
- Optimized for search engines
- Accessible design following WCAG guidelines

## Performance

- Lazy loading and code splitting
- Optimized images and assets
- Minimal JavaScript bundle
- Fast loading times

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Kenny Dsouza**
- Email: kenny5dsouza@gmail.com
- LinkedIn: [kenny-dsouza](https://www.linkedin.com/in/kenny-dsouza/)
- GitHub: [kennydsouza](https://github.com/kennydsouza)
