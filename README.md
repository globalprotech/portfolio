# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, Framer Motion, and Tailwind CSS. Inspired by modern design trends and featuring smooth animations and interactive elements.

## ✨ Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessible**: Follows accessibility best practices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

#### Hero Section (`src/components/Hero/Hero.jsx`)
- Change "Your Name" to your actual name
- Update the title and description
- Modify social media links

#### About Section (`src/components/About/About.jsx`)
- Update the about text
- Modify statistics (projects, clients, experience, hours)
- Change skills list
- Update profile image (replace the Code icon with your photo)

#### Projects Section (`src/components/Projects/Projects.jsx`)
- Replace the sample projects with your actual projects
- Update project descriptions, technologies, and links
- Add your own project icons or images

#### Skills Section (`src/components/Skills/Skills.jsx`)
- Adjust skill levels based on your expertise
- Add or remove skills as needed
- Update the "Other Technologies" list

#### Contact Section (`src/components/Contact/Contact.jsx`)
- Update contact information (email, phone, location)
- Modify social media links
- Customize the contact form

### Styling

#### Colors
The color scheme is defined in `tailwind.config.js`. You can customize:
- Primary colors (blue theme)
- Dark theme colors
- Custom gradients

#### Typography
- Fonts are loaded from Google Fonts (Inter and JetBrains Mono)
- You can change fonts in `tailwind.config.js`

#### Animations
- Animation timings and effects are defined in `tailwind.config.js`
- Component-specific animations are in each component file

### Adding New Sections

1. Create a new component in the appropriate folder
2. Import and add it to `src/App.jsx`
3. Update the navigation in `src/components/Layout/Navbar.jsx`

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   └── Navbar.jsx
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── About/
│   │   └── About.jsx
│   ├── Skills/
│   │   └── Skills.jsx
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   └── ProjectCard.jsx
│   ├── Contact/
│   │   └── Contact.jsx
│   └── Footer/
│       └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠️ Built With

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Performance

- Optimized bundle size with Vite
- Lazy loading for better performance
- Optimized images and assets
- Efficient animations with Framer Motion

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out.

---

**Happy coding! 🚀**
