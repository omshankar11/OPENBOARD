import React from 'react'
import './App.css'
import Header from './components/Header'
import InteractiveCard from './components/InteractiveCard'
import AnimatedCounter from './components/AnimatedCounter'
import InteractiveButton from './components/InteractiveButton'

export default function App() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with modern technologies for blazing-fast performance',
      features: ['React 18', 'Vite Build Tool', 'Optimized Bundle']
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, interactive UI with smooth animations',
      features: ['Gradient Backgrounds', 'Smooth Transitions', 'Responsive Layout']
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Works perfectly on all devices and screen sizes',
      features: ['Mobile First', 'Touch Friendly', 'Adaptive Design']
    },
    {
      icon: '🚀',
      title: 'Easy to Deploy',
      description: 'Ready for production with minimal configuration',
      features: ['One-click Deploy', 'CDN Ready', 'SEO Friendly']
    }
  ]

  const handleButtonClick = () => {
    alert('🎉 Button clicked! Ready to get started?')
  }

  return (
    <div className="app">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to OpenBoard</h1>
          <p className="hero-subtitle">
            A modern, interactive React application with stunning animations
          </p>
          <div className="hero-buttons">
            <InteractiveButton variant="primary" onClick={handleButtonClick}>
              Get Started
            </InteractiveButton>
            <InteractiveButton variant="secondary">
              Learn More
            </InteractiveButton>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-box"></div>
          <div className="floating-box"></div>
          <div className="floating-box"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <InteractiveCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h2>Why Choose Us?</h2>
        <div className="stats-grid">
          <AnimatedCounter label="Happy Users" finalValue={5000} />
          <AnimatedCounter label="Projects Built" finalValue={1200} />
          <AnimatedCounter label="Lines of Code" finalValue={50000} />
          <AnimatedCounter label="Performance Score" finalValue={98} />
        </div>
      </section>

      {/* Interactive Section */}
      <section id="interactive" className="interactive-demo">
        <h2>Interactive Elements</h2>
        <div className="demo-container">
          <div className="demo-box">
            <div className="gradient-box gradient-1"></div>
            <h3>Gradient Effects</h3>
            <p>Beautiful gradient backgrounds with smooth transitions</p>
          </div>
          <div className="demo-box">
            <div className="gradient-box gradient-2"></div>
            <h3>Color Harmony</h3>
            <p>Carefully chosen color palettes for visual appeal</p>
          </div>
          <div className="demo-box">
            <div className="gradient-box gradient-3"></div>
            <h3>Modern Style</h3>
            <p>Contemporary design with practical functionality</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Transform Your Ideas?</h2>
        <p>Start building amazing interactive applications today</p>
        <InteractiveButton variant="primary">
          Start Now
        </InteractiveButton>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 OpenBoard. Made with ❤️ using React & Vite</p>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}
