# NomadicML Website

A modern, responsive website for NomadicML featuring AI-powered video analysis solutions for automotive and robotics applications, with interactive dropdown navigation and comprehensive platform showcases.

## 🚀 Features

- **Interactive Dropdown Navigation**: Organized navigation menus with structured sections for Platform, Solutions, Get Started, and Company
- **Hero Section with Tabs**: Interactive tabs showcasing video AI capabilities (Search Videos, Understand Motion, Scale with API)
- **Solutions Portfolio**: Dedicated sections for Automotive Analysis, AV Simulation, Infrastructure Defect Detection, and Robotics
- **Platform Components**: Detailed showcases of VLA Annotations, Event Search, Semantic Reasoning, and Customized Chat
- **Value Proposition Section**: Cost and time savings comparisons (81% cost savings, 99.8% time savings)
- **Responsive Design**: Mobile-first design optimized for all devices
- **Smooth Animations**: Intersection Observer animations and hover effects
- **Client-Side Routing**: React Router for seamless page navigation

## 📋 Prerequisites

Before running this project from scratch, ensure you have:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn**
- **Git**

## 🛠️ Setup from Scratch

### 1. Clone the Repository
```bash
git clone <repository-url>
cd nomadicml_website
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required dependencies including:
- React 18 + TypeScript
- Vite (build tool)
- React Router DOM
- Tailwind CSS
- Lucide React (icons)
- All custom UI components

### 3. Verify Project Structure
Ensure you have the following structure:
```
nomadicml_website/
├── public/
│   ├── images/                           # Static images
│   │   ├── upload_videos_animation.png
│   │   ├── ai_insights_animation.png
│   │   ├── curve_image_1.png
│   │   ├── curve_image_2.png
│   │   ├── curve_img_3.png
│   │   ├── curve_img_4.png
│   │   ├── curve_img_5.png
│   │   ├── curve_img_6.png
│   │   └── NomadicMLLogo.png
│   └── landing_page/                     # Video assets
│       └── Search_Videos.mp4
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── delve-dropdown.tsx        # Custom dropdown component
│   │   └── hooks/
│   │       └── useDropdown.ts            # Dropdown hook
│   ├── App.tsx                           # Main application with all components
│   ├── App.css                           # Global styles and animations
│   ├── main.tsx                          # Entry point with React Router
│   └── index.css                         # Base Tailwind imports
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

### 4. Start Development Server
```bash
npm run dev
```

The application will start at `http://localhost:5173`

### 5. Verify All Features Work
- ✅ Navigation dropdowns (Get Started, Platform, Solutions, Company)
- ✅ Hero section tabs with video playback
- ✅ Internal navigation links work properly
- ✅ All images load correctly
- ✅ Responsive design on different screen sizes

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload enabled) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory, ready for deployment.

## 📱 Key Pages & Components

### Landing Page (/)
- **Hero Section**: Interactive tabs with video demonstrations
- **How We Work**: 3-step process (Upload → AI Analysis → Get Insights)
- **Value Add Section**: ROI comparisons and efficiency metrics
- **Solutions**: 4 main verticals (Automotive, AV Simulation, Infrastructure, Robotics)
- **Platform**: Feature showcases and component details

### Individual Pages
- `/platform` - NomadicML Platform overview
- `/sdk` - Code Level SDK documentation
- `/driving` - Automotive solutions
- `/simulation` - Autonomous Vehicle Simulation
- `/infrastructure` - Infrastructure defect detection
- `/robotics` - Robotics analysis solutions

### Navigation Features
- **Get Started**: Links to internal sections (#upload-section, #ai-analysis-section, #insights-section)
- **Platform**: External links to app.nomadicml.com and docs
- **Solutions**: Internal page routing to solution verticals
- **Company**: External links to documentation and demos

## 🎨 Design System

### Color Scheme
- **Primary**: Light blue gradient themes (`from-blue-50 to-cyan-50`)
- **Accents**: Cyan (`cyan-400`, `cyan-500`) for CTAs
- **Cards**: Semi-transparent white (`bg-white/80`) with backdrop blur
- **Text**: Gray scale for hierarchy (`text-gray-900`, `text-gray-600`)

### Animations
- **Intersection Observer**: Fade-in animations for image galleries
- **Hover Effects**: Scale and shadow transitions
- **Dropdown Animations**: Slide-in/out with opacity
- **Staggered Loading**: Sequential image animations

## 🌐 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Vite and deploy

### Option 2: Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Build the project
npm run build

# Deploy
vercel --prod
```

### Vercel Configuration
The project includes proper Vite configuration for Vercel deployment. No additional setup required.

## 🔧 Technologies Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 4.x
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 6.x
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Intersection Observer API
- **Deployment**: Vercel (optimized for Vite)

## 🚨 Troubleshooting

### Common Issues:

1. **Images not loading**: Ensure all image files are in `public/images/`
2. **Videos not playing**: Check `public/landing_page/Search_Videos.mp4` exists
3. **Routing issues**: Verify React Router setup in `main.tsx`
4. **Dropdown not working**: Check `useDropdown` hook implementation

### Development Tips:
- Use browser dev tools to check console for errors
- Verify network tab for failed asset loads
- Test navigation links individually
- Check responsive design on different screen sizes

## 📞 Support

For technical support:
- **Email**: support@nomadicml.com
- **Documentation**: https://docs.nomadicml.com
- **Platform Demo**: https://app.nomadicml.com
- **Schedule Demo**: https://calendly.com/nomadic-ml/nomadicml-intro

---

**Built with ❤️ by the NomadicML team** | Transforming hours of coordination into results within seconds
