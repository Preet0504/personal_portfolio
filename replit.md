# 3D Developer Portfolio

## Overview
A stunning 3D developer portfolio website built with React, Three.js, and Tailwind CSS. Features LinkedIn-style profile header with banner, immersive 3D models, smooth animations, and an interactive contact form.

## Tech Stack
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Other Libraries**: 
  - react-router-dom (routing)
  - react-vertical-timeline-component (timeline display)
  - react-parallax-tilt (interactive tilt effects)

## Project Structure
```
├── public/               # Static assets
│   ├── banner.png       # Profile banner image
│   ├── preet_pfp.png    # Profile picture
│   ├── desktop_pc/      # Desktop 3D model and textures
│   ├── planet/          # Planet 3D model and textures
│   ├── _headers         # Cache control headers
│   └── _redirects       # SPA routing redirects
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── canvas/      # 3D canvas components (Ball, Computers, Earth, Stars)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   ├── Publications.jsx
│   │   ├── Certifications.jsx
│   │   └── Volunteering.jsx
│   ├── constants/       # Static data and configuration
│   ├── hoc/            # Higher-order components
│   ├── utils/          # Utility functions (animations)
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── package.json
├── vite.config.js      # Vite configuration
└── tailwind.config.cjs # Tailwind CSS configuration
```

## Features
- 🖼️ LinkedIn-style profile header with banner and profile picture overlay
- 🎨 Interactive experience and work sections with animations
- 📚 Publications section showcasing peer-reviewed research
- 🏆 Certifications section with industry credentials and "Read More" functionality
- 🔮 3D skills section showcasing technologies
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 🌍 3D Earth model in contact section
- ⭐ Dynamic 3D star field background (full-page)
- 🎭 Smooth animations throughout using Framer Motion
- 🔗 Social media links (LinkedIn, Handshake, GitHub)
- 📖 Expandable "Read More" sections for text-heavy containers

## Recent Changes
- **December 22, 2025**: Added expandable "Read More" sections & updated certifications
  - Added expandable "Read More" to About, Publications, Experience, Works, and Certifications
  - Updated certifications with 5 real credentials from HackerRank, Udemy, and Cognitive Class
  - Added credential IDs with expandable view in certification cards
  - Improved UX with better text truncation and interactive toggles
  - Added emoji icons for certifications (🎯 HackerRank, 🎓 Udemy, 🧠 Cognitive Class)
- **December 22, 2025**: Enhanced Hero with LinkedIn-style banner
  - Added banner image with profile picture overlay
  - Removed services/skills slabs section from About
  - Updated projects with 4 new distributed systems projects
  - Updated publications with published IEEE paper
  - Improved responsive layout for all screen sizes
- **October 20, 2025**: Performance & SEO Optimizations
  - Implemented code splitting with React.lazy for all non-critical components
  - Deferred Three.js StarsCanvas with 2-second delay
  - Lazy loaded EarthCanvas within Contact component
  - Optimized Vite build with manual chunking
  - Added comprehensive meta tags and JSON-LD structured data
  - Semantic HTML with proper heading hierarchy
- **October 20, 2025**: Initial Replit setup
  - Configured Vite to run on port 5000 with host 0.0.0.0
  - Set up HMR for Replit's proxy environment
  - Created project documentation

## Certifications
- **Deep Learning with TensorFlow** - Cognitive Class (Jul 2024)
- **HackerRank Skill Assessment (Problem Solving)** - HackerRank (Feb 2024)
- **Machine Learning A-Z** - Udemy (Feb 2024)
- **HackerRank Skill Assessment (SQL)** - HackerRank (Jan 2024)
- **HackerRank Skill Assessment (Python)** - HackerRank (Oct 2022)

## Environment Variables
The contact form uses EmailJS. To enable it, set these environment variables:
- `VITE_APP_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_APP_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_APP_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

## Development
- **Dev Server**: Runs on port 5000
- **Hot Module Replacement**: Enabled via Vite
- **Host**: Configured for 0.0.0.0 to work in Replit environment
- **Deployment**: Configured for Cloudflare Pages

## User Preferences
- LinkedIn-style profile design with banner and PFP overlay
- Focus on distributed systems and research
- Responsive design across all devices
- Dark theme with purple/pink gradient accents
- Expandable "Read More" sections for better text management

## Customization Notes
To personalize this portfolio:
1. Update content in `src/constants/index.js` (experiences, projects, publications, certifications)
2. Replace banner and profile picture in `public/` directory
3. Update images in `src/assets/`
4. Modify colors in `tailwind.config.cjs`
5. Set up EmailJS credentials for contact form functionality
6. Update social links in `src/components/Navbar.jsx`
7. Update certification credential IDs and URLs in `src/constants/index.js`

## Deployment
Ready for deployment to Cloudflare Pages using:
```bash
npm run deploy
```
The project includes `_headers` and `_redirects` configuration for proper SPA routing and cache control.

## Interactive Features
All text-heavy sections now include expandable "Read More" functionality:
- **About**: Bio preview with full text expandable
- **Publications**: Description truncation with expand/collapse
- **Experience**: Shows first 2 points, expandable for full list
- **Works**: Project description truncation with read more toggle
- **Certifications**: Credential IDs hidden by default, expandable with +/- button
