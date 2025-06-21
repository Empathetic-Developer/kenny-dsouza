
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowLeft, Code, Palette, Zap, Shield, Smartphone, Globe, Users, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToUseLovable = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: errorsRef, isVisible: errorsVisible } = useScrollAnimation();

  const techStack = [
    { name: "React 18 with TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "Vite Build Tool", icon: <Zap className="w-6 h-6" /> },
    { name: "Tailwind CSS + Neumorphism", icon: <Palette className="w-6 h-6" /> },
    { name: "Shadcn/ui Components", icon: <Shield className="w-6 h-6" /> },
    { name: "Responsive Design", icon: <Smartphone className="w-6 h-6" /> },
    { name: "GitHub Pages", icon: <Globe className="w-6 h-6" /> }
  ];

  const developmentSteps = [
    {
      title: "Project Setup & Configuration",
      description: "Initialized React + TypeScript with Vite, configured Tailwind CSS, and set up Shadcn/ui components"
    },
    {
      title: "Neumorphism Design System",
      description: "Created comprehensive design system with custom CSS properties for light/dark themes and neumorphic components"
    },
    {
      title: "Core Components Development", 
      description: "Built theme system, navigation, hero section, about, skills, experience, languages, and contact components"
    },
    {
      title: "Animation & Interaction System",
      description: "Implemented scroll animations, parallax effects, custom cursor, and smooth transitions throughout"
    },
    {
      title: "Performance Optimization",
      description: "Added code splitting, image optimization, GPU-accelerated animations, and accessibility features"
    },
    {
      title: "Deployment & Production",
      description: "Configured GitHub Pages deployment with automated workflow and production optimizations"
    }
  ];

  const commonErrors = [
    {
      error: "Build Error: 'colors.primary' does not resolve to a string",
      solution: "Updated CSS custom properties to use hsl(var(--primary)) instead of theme('colors.primary')",
      category: "CSS/Tailwind"
    },
    {
      error: "Router basename warning in development",
      solution: "Configured proper basename for GitHub Pages deployment while maintaining local development functionality",
      category: "Routing"
    },
    {
      error: "Image paths breaking in production",
      solution: "Moved images to public/assets/ and updated all references to use relative paths",
      category: "Assets"
    },
    {
      error: "Scroll animations not triggering",
      solution: "Implemented proper Intersection Observer setup with threshold and rootMargin configuration",
      category: "JavaScript"
    },
    {
      error: "Theme toggle state persistence",
      solution: "Added localStorage integration with proper fallback to system theme preference",
      category: "State Management"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="neu-button inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center fade-in-up ${heroVisible ? 'animate' : ''}`}>
            <h1 className="text-4xl lg:text-6xl font-light text-foreground mb-6">
              Building with <span className="text-primary">Lovable</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              A complete step-by-step guide to building Kenny Dsouza's portfolio website using Lovable AI - 
              from concept to deployment, including all challenges and solutions encountered.
            </p>
            <div className="neu-card p-6 max-w-2xl mx-auto">
              <p className="text-lg text-foreground">
                This portfolio showcases modern web development practices with a sleek neumorphism design, 
                smooth animations, and responsive layout - all built collaboratively with AI assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section ref={techRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in-up ${techVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">Technology Stack</h2>
            <p className="text-lg text-muted-foreground">Modern tools and frameworks used in this project</p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${techVisible ? 'animate' : ''}`}>
            {techStack.map((tech, index) => (
              <div key={index} className="neu-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-primary mb-4 flex justify-center">{tech.icon}</div>
                <h3 className="text-lg font-medium text-foreground">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section ref={processRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in-up ${processVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">Development Process</h2>
            <p className="text-lg text-muted-foreground">Step-by-step breakdown of the development workflow</p>
          </div>

          <div className={`space-y-8 stagger-children ${processVisible ? 'animate' : ''}`}>
            {developmentSteps.map((step, index) => (
              <div key={index} className="neu-card p-8">
                <div className="flex items-start gap-6">
                  <div className="neu-button w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Breakdown */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">Key Features Implemented</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Design System</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Comprehensive neumorphism design with custom CSS properties</li>
                <li>• Light/Dark mode support with smooth transitions</li>
                <li>• Consistent component styling (.neu-flat, .neu-pressed, .neu-elevated)</li>
                <li>• Responsive grid systems and flexible layouts</li>
              </ul>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">User Experience</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Smooth scroll animations with Intersection Observer</li>
                <li>• Custom animated cursor with hover effects</li>
                <li>• Parallax background effects for depth</li>
                <li>• Progressive loading with staggered animations</li>
              </ul>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Performance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• GPU-accelerated animations with will-change properties</li>
                <li>• Optimized bundle size with code splitting</li>
                <li>• Efficient CSS with utility-first approach</li>
                <li>• Image optimization and lazy loading</li>
              </ul>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Accessibility</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• WCAG compliant color contrast ratios</li>
                <li>• Full keyboard navigation support</li>
                <li>• Screen reader optimization with ARIA labels</li>
                <li>• Reduced motion support for user preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Errors & Solutions */}
      <section ref={errorsRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in-up ${errorsVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              <AlertTriangle className="w-8 h-8 text-warning inline mr-3" />
              Common Errors & Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Real challenges encountered during development and how they were resolved
            </p>
          </div>

          <div className={`space-y-6 stagger-children ${errorsVisible ? 'animate' : ''}`}>
            {commonErrors.map((item, index) => (
              <div key={index} className="neu-card p-6 border-l-4 border-warning">
                <div className="flex items-start gap-4">
                  <div className="neu-button px-3 py-1 text-xs text-warning bg-warning/10 rounded-full">
                    {item.category}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">
                  Error: {item.error}
                </h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neu-card p-8">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">Development Workflow with Lovable</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">AI-Assisted Development</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Component-First:</strong> Built reusable components before pages</li>
                  <li>• <strong>Design System First:</strong> Established design tokens early</li>
                  <li>• <strong>Iterative Refinement:</strong> Continuous improvement through conversation</li>
                  <li>• <strong>Real-time Preview:</strong> Instant feedback on changes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Best Practices</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Mobile-First:</strong> Started with mobile layouts</li>
                  <li>• <strong>Performance Monitoring:</strong> Optimized throughout development</li>
                  <li>• <strong>Accessibility Testing:</strong> Regular testing with screen readers</li>
                  <li>• <strong>Version Control:</strong> GitHub integration for deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Results */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="neu-card p-12">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-light text-foreground mb-6">Final Result</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A professional, performant, and accessible portfolio website that effectively showcases 
                Kenny's expertise while providing an excellent user experience across all devices and accessibility needs. 
                The website successfully demonstrates modern web development practices while maintaining 
                simplicity and elegance in both code and design.
              </p>
              <div className="mt-8">
                <Link 
                  to="/" 
                  className="neu-button inline-flex items-center gap-2 px-8 py-3 text-foreground hover:text-primary transition-colors"
                >
                  View Live Portfolio
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToUseLovable;
