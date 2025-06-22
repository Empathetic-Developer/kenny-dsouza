
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  ArrowLeft,
  Code,
  Palette,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Users,
  AlertTriangle,
  Brain,
  Lightbulb,
  Target,
  GitBranch,
  Database,
  Key,
  Settings,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

const HowToUseLovable = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: errorsRef, isVisible: errorsVisible } = useScrollAnimation();
  const { ref: aiRef, isVisible: aiVisible } = useScrollAnimation();
  const { ref: lovableRef, isVisible: lovableVisible } = useScrollAnimation();
  const { ref: integrationRef, isVisible: integrationVisible } = useScrollAnimation();

  const techStack = [
    { name: "React 18 with TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "Vite Build Tool", icon: <Zap className="w-6 h-6" /> },
    {
      name: "Tailwind CSS + Neumorphism",
      icon: <Palette className="w-6 h-6" />,
    },
    { name: "Shadcn/ui Components", icon: <Shield className="w-6 h-6" /> },
    { name: "Responsive Design", icon: <Smartphone className="w-6 h-6" /> },
    { name: "GitHub Pages", icon: <Globe className="w-6 h-6" /> },
  ];

  const developmentSteps = [
    {
      title: "Project Setup & Configuration",
      description:
        "Initialized React + TypeScript with Vite, configured Tailwind CSS, and set up Shadcn/ui components",
    },
    {
      title: "Neumorphism Design System",
      description:
        "Created comprehensive design system with custom CSS properties for light/dark themes and neumorphic components",
    },
    {
      title: "Core Components Development",
      description:
        "Built theme system, navigation, hero section, about, skills, experience, languages, and contact components",
    },
    {
      title: "Animation & Interaction System",
      description:
        "Implemented scroll animations, parallax effects, custom cursor, and smooth transitions throughout",
    },
    {
      title: "Performance Optimization",
      description:
        "Added code splitting, image optimization, GPU-accelerated animations, and accessibility features",
    },
    {
      title: "Deployment & Production",
      description:
        "Configured GitHub Pages deployment with automated workflow and production optimizations",
    },
  ];

  const commonErrors = [
    {
      error: "Build Error: 'colors.primary' does not resolve to a string",
      solution:
        "Updated CSS custom properties to use hsl(var(--primary)) instead of theme('colors.primary')",
      category: "CSS/Tailwind",
    },
    {
      error: "Router basename warning in development",
      solution:
        "Configured proper basename for GitHub Pages deployment while maintaining local development functionality",
      category: "Routing",
    },
    {
      error: "Image paths breaking in production",
      solution:
        "Moved images to public/assets/ and updated all references to use relative paths",
      category: "Assets",
    },
    {
      error: "Scroll animations not triggering",
      solution:
        "Implemented proper Intersection Observer setup with threshold and rootMargin configuration",
      category: "JavaScript",
    },
    {
      error: "Theme toggle state persistence",
      solution:
        "Added localStorage integration with proper fallback to system theme preference",
      category: "State Management",
    },
  ];

  const aiAdvantages = [
    "Increased Efficiency & Speed: AI tools can generate boilerplate code, suggest completions, refactor code, and even create entire components or layouts from prompts",
    "Automated Testing & Bug Detection: AI can assist in writing tests, performing static code analysis, and identifying potential bugs or vulnerabilities early",
    "Enhanced Personalization & UX: AI can analyze user behavior to dynamically serve content and provide recommendations",
    "Content Generation: AI can help with generating blog post ideas, drafting initial content, writing meta descriptions, and creating alt text for images",
    "Accessibility Improvements: AI can assist in generating accurate alt text for images, optimizing screen reader functionality, and identifying accessibility issues",
    "Improved Decision-Making: AI can process vast amounts of data to identify patterns and trends for better design decisions",
    "Reduced Manual Effort: Automates repetitive tasks, freeing up developers for more complex and creative work",
  ];

  const aiDisadvantages = [
    "Abrupt Site-Wide Errors: Over-reliance on AI-generated code without thorough human review can lead to subtle, hard-to-debug bugs",
    "Inconsistent Code Quality/Style: Different AI generations might lead to varying code styles and quality, making maintenance harder",
    "Security Vulnerabilities: AI might inadvertently introduce security flaws if not carefully prompted and reviewed",
    "Black Box Issues: Understanding why AI generated particular code can be challenging, hindering debugging or modifications",
    "Lack of Creativity & Uniqueness: AI models tend to produce generic designs based on training data",
    "Ethical Concerns & Bias: AI models can inherit biases present in their training data",
    "Over-reliance & Skill Atrophy: Developers might become overly dependent on AI, potentially hindering problem-solving skills",
    "Integration Complexity: Integrating AI tools with existing legacy systems can be challenging",
    "Cost: Advanced AI tools come with subscription costs that might be prohibitive for individual developers",
    "Contextual Understanding Limitations: AI still struggles with nuanced human emotions and complex strategic thinking",
  ];

  const lovableFeatures = [
    {
      title: "Text to Web App Generation",
      description:
        "Translates plain language into functional web pages, designs, components, and logic",
    },
    {
      title: "Supabase Integration",
      description:
        "Capability to include backend databases and authorization seamlessly",
    },
    {
      title: "Publishing and Sharing",
      description: "Easy deployment and sharing of work-in-progress versions",
    },
    {
      title: "AI-Powered App Generation",
      description:
        "Natural language processing capabilities for understanding intent and context",
    },
    {
      title: "GitHub and Version Control",
      description:
        "Two way sync with GitHub for code ownership and collaboration",
    },
    {
      title: "Live Side by Side Preview",
      description:
        "Ability to preview changes in real time with a sharable url",
    },
  ];

  const bestPractices = [
    "Start Outside Lovable: Plan your idea thoroughly (product vision, user journeys, features) before jumping in",
    "Be Specific with Prompts: Mention exact pages, expected behavior, and use natural language",
    "Use Chat Mode as a Thought Partner: Debug, break down ideas, brainstorm, plan, iterate",
    "Break Work into Small, Testable Chunks: Build one feature or component at a time, test, refine, then move on",
    "Add Guardrails: Tell the AI what not to touch (e.g., specific components or shared logic)",
    "Repeat Important Instructions: AI's memory can be limited, so reinforce critical constraints",
    "Avoid the Infinite Error Loop: Use Chat Mode with error screenshots, investigate without immediately writing code",
    "Connect Supabase After Front-End is Stable: Focus on UI/UX first to avoid complex database errors",
    "Leverage Version Control (GitHub): For tracking changes, rolling back, and collaboration",
    "Patience and Precision: Take your time with prompts; the more precise the input, the better the output",
  ];

  const githubIntegrationSteps = [
    {
      title: "Initial Setup",
      description: "Click GitHub → Connect to GitHub in the Lovable editor",
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      title: "Authorization",
      description: "Authorize the Lovable GitHub App on GitHub",
      icon: <Key className="w-6 h-6" />,
    },
    {
      title: "Repository Creation",
      description: "Select GitHub account/organization and create repository in Lovable",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Bidirectional Sync",
      description: "Changes in Lovable auto-push to GitHub, GitHub changes auto-sync to Lovable",
      icon: <ExternalLink className="w-6 h-6" />,
    },
  ];

  const supabaseIntegrationSteps = [
    {
      title: "Connect Database",
      description: "Connect your Supabase project through the Lovable interface for instant backend capabilities",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Database Schema",
      description: "Create tables, set up RLS policies, and define relationships using SQL migrations",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Authentication Setup",
      description: "Enable user authentication with email/password or social providers",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Edge Functions",
      description: "Create serverless functions for API endpoints and backend logic",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const integrationBenefits = [
    {
      category: "GitHub Integration",
      benefits: [
        "Professional version control with Git history",
        "Code ownership and collaboration capabilities",
        "Deploy anywhere using standard web technologies",
        "Parallel development with local IDEs and Lovable",
        "GitHub Actions for CI/CD workflows",
        "Pull request reviews and branch management",
      ],
    },
    {
      category: "Supabase Integration",
      benefits: [
        "Instant backend with PostgreSQL database",
        "Built-in authentication and user management",
        "Real-time subscriptions and live updates",
        "File storage and CDN capabilities",
        "Edge Functions for serverless backend logic",
        "Row Level Security for data protection",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollToTop />

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
          <div
            className={`text-center fade-in-up ${heroVisible ? "animate" : ""}`}
          >
            <h1 className="text-4xl lg:text-6xl font-light text-foreground mb-6">
              Building with <span className="text-primary">Lovable</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              A complete step-by-step guide on how this portfolio website was
              built using Lovable AI - from concept to deployment, including all
              challenges and solutions encountered.
            </p>
            <div className="neu-card p-6 max-w-2xl mx-auto">
              <p className="text-lg text-foreground">
                This portfolio showcases modern web development practices with a
                sleek neumorphism design, smooth animations, and responsive
                layout - all built collaboratively with AI assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub & Supabase Integration Section */}
      <section ref={integrationRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 fade-in-up ${
              integrationVisible ? "animate" : ""
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              <GitBranch className="w-8 h-8 text-primary inline mr-3" />
              GitHub & Supabase Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Learn how to seamlessly integrate GitHub for version control and Supabase for backend functionality while developing with Lovable
            </p>
          </div>

          {/* GitHub Integration */}
          <div
            className={`mb-16 fade-in-up ${integrationVisible ? "animate" : ""}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-primary mr-2" />
              GitHub Integration: Professional Version Control
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {githubIntegrationSteps.map((step, index) => (
                <div
                  key={index}
                  className="neu-card p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="neu-card p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Key GitHub Integration Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-medium text-foreground mb-3">Bidirectional Sync</h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time sync between Lovable and GitHub</li>
                    <li>• Changes in Lovable automatically push to GitHub</li>
                    <li>• GitHub commits automatically sync to Lovable</li>
                    <li>• No manual pulls or pushes required</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-medium text-foreground mb-3">Professional Workflow</h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Standard Git version control</li>
                    <li>• Branch management and pull requests</li>
                    <li>• Code ownership and collaboration</li>
                    <li>• Deploy anywhere with standard web code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Supabase Integration */}
          <div
            className={`mb-16 fade-in-up ${integrationVisible ? "animate" : ""}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center flex items-center justify-center">
              <Database className="w-6 h-6 text-primary mr-2" />
              Supabase Integration: Instant Backend Power
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {supabaseIntegrationSteps.map((step, index) => (
                <div
                  key={index}
                  className="neu-card p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="neu-card p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Setting Up Supabase in Lovable
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-medium text-foreground mb-3">Database Setup</h5>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>1. Connect Project:</strong> Use "Connect Supabase" in Lovable
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>2. Create Tables:</strong> Use SQL migrations for database schema
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>3. Setup RLS:</strong> Configure Row Level Security policies
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-medium text-foreground mb-3">Authentication & APIs</h5>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>4. Auth Setup:</strong> Enable email/password or social auth
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>5. Edge Functions:</strong> Create serverless API endpoints
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>6. Real-time:</strong> Enable live data subscriptions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Benefits */}
          <div
            className={`neu-card p-8 fade-in-up ${integrationVisible ? "animate" : ""}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Why Integrate Both GitHub and Supabase?
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {integrationBenefits.map((section, index) => (
                <div key={index}>
                  <h4 className="text-xl font-medium text-foreground mb-4 flex items-center">
                    {section.category === "GitHub Integration" ? (
                      <GitBranch className="w-6 h-6 text-primary mr-2" />
                    ) : (
                      <Database className="w-6 h-6 text-primary mr-2" />
                    )}
                    {section.category}
                  </h4>
                  <ul className="space-y-3">
                    {section.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="text-muted-foreground leading-relaxed flex items-start"
                      >
                        <span className="text-primary font-medium mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h5 className="text-lg font-medium text-foreground mb-3 flex items-center">
                <Lightbulb className="w-5 h-5 text-primary mr-2" />
                Pro Tip: Development Workflow
              </h5>
              <p className="text-muted-foreground">
                Start with frontend development in Lovable, connect GitHub for version control, then integrate Supabase for backend features. This approach ensures stable UI before adding complex database interactions, making debugging easier and development more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lovable Section */}
      <section ref={lovableRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 fade-in-up ${
              lovableVisible ? "animate" : ""
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              <Target className="w-8 h-8 text-primary inline mr-3" />
              Diving into Lovable: A Builder's Best Friend
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Lovable is an AI-powered web app builder that generates UI and
              backend code from natural language descriptions, making complex
              web development accessible through conversational interactions.
            </p>
          </div>

          <div
            className={`mb-12 fade-in-up ${lovableVisible ? "animate" : ""}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Key Features of Lovable
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lovableFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="neu-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <h4 className="text-lg font-medium text-foreground mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`neu-card p-8 fade-in-up ${
              lovableVisible ? "animate" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              How Best to Use Lovable: Best Practices
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                >
                  <div className="neu-button w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {practice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section ref={techRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 fade-in-up ${
              techVisible ? "animate" : ""
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern tools and frameworks used in this project
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${
              techVisible ? "animate" : ""
            }`}
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="neu-card p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section ref={processRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 fade-in-up ${
              processVisible ? "animate" : ""
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Development Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Step-by-step breakdown of the development workflow
            </p>
          </div>

          <div
            className={`space-y-8 stagger-children ${
              processVisible ? "animate" : ""
            }`}
          >
            {developmentSteps.map((step, index) => (
              <div key={index} className="neu-card p-8">
                <div className="flex items-start gap-6">
                  <div className="neu-button w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Key Features Implemented
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Design System
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Comprehensive neumorphism design with custom CSS properties
                </li>
                <li>• Light/Dark mode support with smooth transitions</li>
                <li>
                  • Consistent component styling (.neu-flat, .neu-pressed,
                  .neu-elevated)
                </li>
                <li>• Responsive grid systems and flexible layouts</li>
              </ul>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                User Experience
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Smooth scroll animations with Intersection Observer</li>
                <li>• Custom animated cursor with hover effects</li>
                <li>• Parallax background effects for depth</li>
                <li>• Progressive loading with staggered animations</li>
              </ul>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Performance
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • GPU-accelerated animations with will-change properties
                </li>
                <li>• Optimized bundle size with code splitting</li>
                <li>• Efficient CSS with utility-first approach</li>
                <li>• Image optimization and lazy loading</li>
              </ul>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Accessibility
              </h3>
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
          <div
            className={`text-center mb-12 fade-in-up ${
              errorsVisible ? "animate" : ""
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              <AlertTriangle className="w-8 h-8 text-warning inline mr-3" />
              Common Errors & Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Real challenges encountered during development and how they were
              resolved
            </p>
          </div>

          <div
            className={`space-y-6 stagger-children ${
              errorsVisible ? "animate" : ""
            }`}
          >
            {commonErrors.map((item, index) => (
              <div
                key={index}
                className="neu-card p-6 border-l-4 border-warning"
              >
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

      {/* AI in Web Development Section */}
      <section ref={aiRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 fade-in-up ${
              aiVisible ? "animate" : ""
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              <Brain className="w-8 h-8 text-primary inline mr-3" />
              The Role of AI in Web Development: A Double-Edged Sword
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the advantages and challenges of AI-assisted
              development
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children ${
              aiVisible ? "animate" : ""
            }`}
          >
            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Lightbulb className="w-6 h-6 text-success mr-2" />
                Advantages of Using AI Extensively
              </h3>
              <ul className="space-y-4">
                {aiAdvantages.map((advantage, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground leading-relaxed"
                  >
                    <span className="text-success font-medium">•</span>{" "}
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-warning mr-2" />
                Disadvantages & Challenges
              </h3>
              <ul className="space-y-4">
                {aiDisadvantages.map((disadvantage, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground leading-relaxed"
                  >
                    <span className="text-warning font-medium">•</span>{" "}
                    {disadvantage}
                  </li>
                ))}
              </ul>
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
              <h2 className="text-3xl font-light text-foreground mb-6">
                Final Result
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A professional, performant, and accessible portfolio website
                that effectively showcases Kenny's expertise while providing an
                excellent user experience across all devices and accessibility
                needs. The website successfully demonstrates modern web
                development practices while maintaining simplicity and elegance
                in both code and design.
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
