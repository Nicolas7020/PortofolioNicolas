# Nicolas Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS v4.

## Features

- 🎨 **Modern Design**: Clean, professional design with a sophisticated color scheme
- 📱 **Fully Responsive**: Optimized for all device sizes using Tailwind CSS breakpoints
- 🌙 **Dark Mode**: Automatic dark/light mode based on system preference
- ⚡ **Fast Performance**: Built with Next.js 15 for optimal loading speeds
- 🎯 **Single Page**: Smooth scrolling navigation between sections
- ✨ **Typing Animation**: Eye-catching typewriter effect for the hero section
- 📄 **CV Download**: Downloadable resume in PDF format
- 💌 **Contact Form**: Interactive contact form for potential clients/employers

## Sections

1. **Introduction**: Hero section with photo, name, and brief introduction
2. **Experience**: Work history, skills, and technical expertise
3. **Projects**: Showcase of featured projects with descriptions and links
4. **Contact**: Contact information and message form
5. **CV**: Resume download and preview functionality

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Emoji-based icons for better compatibility
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Color Scheme

The portfolio uses a professional color palette:
- **Primary**: Blue (#3b82f6) for buttons and accents
- **Background**: Slate variants for sections
- **Text**: Proper contrast ratios for accessibility
- **Dark Mode**: Automatic switching with appropriate contrast

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Name and title in the hero section
- Contact information (email, phone, location)
- Work experience details
- Skills and technologies
- Project descriptions and links
- Social media links

### Styling
- Modify colors in the Tailwind classes
- Update the CSS variables in `src/app/globals.css`
- Add custom animations or effects

### CV/Resume
- Replace `public/nicolas-cv.pdf` with your actual resume
- Update the CV section content

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The site is a static export compatible with:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## Performance Features

- ✅ Optimized images with Next.js Image component
- ✅ Responsive design with proper breakpoints
- ✅ Semantic HTML for accessibility
- ✅ Fast loading with static generation
- ✅ SEO-friendly structure

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## License

This project is open source and available under the MIT License.

---

Built with using Next.js and Tailwind CSS
