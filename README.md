# 🎨 OpenBoard - Interactive React Application

A modern, interactive React application built with Vite, featuring smooth animations, responsive design, and engaging UI components.

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Beautiful Design** - Modern gradients and smooth transitions
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🚀 **Easy to Deploy** - Production-ready out of the box
- 🔄 **Interactive Components** - Flip cards, animated counters, ripple buttons
- 🎯 **SEO Friendly** - Clean, semantic HTML

## 🛠️ Tech Stack

- **React 18** - Latest React library
- **Vite** - Next-generation frontend tooling
- **CSS3** - Advanced styling with animations
- **JavaScript ES2020+** - Modern JavaScript features

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
openboard/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── InteractiveCard.jsx   # Flip card component
│   │   ├── AnimatedCounter.jsx   # Animated counter
│   │   └── InteractiveButton.jsx # Custom button
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎯 Components

### Header
- Fixed navigation with scroll detection
- Mobile hamburger menu
- Smooth hover animations

### InteractiveCard
- 3D flip animation on click
- Hover effects
- Feature showcase on back side

### AnimatedCounter
- Smooth counting animation
- Auto-increment on mount
- Responsive design

### InteractiveButton
- Ripple effect on click
- Multiple variants (primary/secondary)
- Smooth transitions

## 🎨 Customization

### Colors
Edit the gradient colors in component CSS files:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Typography
Modify font sizes and families in:
- `src/index.css` - Global fonts
- Component `.css` files - Specific styles

### Animations
Adjust animation timings in component CSS files:
```css
transition: all 0.3s ease;
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy 'dist' folder
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 💡 Tips

- Use DevTools to inspect animations
- Customize colors in CSS files
- Add more sections by duplicating existing ones
- Modify component props for variations

## 📞 Support

For issues and questions, please open an issue in the repository.

---

Made with ❤️ using React & Vite
