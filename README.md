# NomadicML Website

A modern, responsive website for NomadicML featuring interactive dropdown navigation menus and video AI demonstrations.

## 🚀 Features

- **Interactive Dropdown Navigation**: Organized navigation menus similar to delve.co with structured sections and interactive links
- **3-Tab Video Interface**: Interactive tabs showcasing video AI capabilities with embedded video demonstrations
- **Responsive Design**: Mobile-first design that works across all devices
- **Framer Animations**: Smooth, professional animations throughout the site
- **Modern UI Components**: Built with shadcn/ui components and Tailwind CSS

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn**
- **Git**

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vnkn/nomadic_website.git
   cd nomadic_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
nomadic_website/
├── public/
│   ├── i1DNpPLzeuJPVTJrRWJMsAYmwDg.mp4    # Demo video file
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── ui/                             # shadcn/ui components
│   │       ├── navigation-menu.tsx
│   │       ├── dropdown-menu.tsx
│   │       └── tabs.tsx
│   ├── App.tsx                             # Main application component
│   ├── App.css                             # Global styles and animations
│   ├── main.tsx                            # Application entry point
│   └── framerAnimations.js                 # Framer animation utilities
├── dist/                                   # Production build output
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Key Components

### Navigation Menu
- **How We Work**: Process and capabilities sections with interactive links
- **Platform**: Features and use cases with call-to-action areas
- **Resources**: Documentation links and support information
- **Company**: About section with contact information

### Video Interface
- **Search Videos**: Upload and analyze video content
- **Understand Motion**: AI-powered motion analysis
- **Scale with API**: Integration capabilities

## 🔧 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## 🎯 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

The website can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy the `dist/` folder
- **AWS S3**: Upload the `dist/` folder contents to an S3 bucket

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by NomadicML.

## 📞 Support

For support and questions:
- Email: support@nomadicml.com
- Website: https://nomadicml.com
- Documentation: https://docs.nomadicml.com

## 🔗 Links

- [Live Demo](https://html-cleanup-app-2kegzs3z.devinapps.com)
- [NomadicML Platform](https://app.nomadicml.com)
- [API Documentation](https://docs.nomadicml.com)
- [Book a Call](https://calendly.com/nomadic-ml/nomadicml-intro)

---

Built with ❤️ by the NomadicML team
