import * as React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

// Import page components
import { 
  EventSearchPage
  // SemanticReasoningPage, 
  // CustomizedChatPage, 
  // DrivingPage 
} from './pages'

import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'
import { DelveDropdown, DropdownIcons } from './components/ui/delve-dropdown'
import { useDropdown } from './hooks/useDropdown'
import './App.css'

// Hello World Page Component
const HelloPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-5xl font-bold">hello world</h1>
    </div>
  )
}

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      <Hero />
      <VideoViewerDemo />
      <HowWeWork />
      <ValueAddSection />
      <SolutionsSections />
      <PlatformSections />
      <TransformSection />
      <CallToAction />
      <Footer />
    </div>
  )
}

const Header = () => {
  const howWeWorkDropdown = useDropdown()
  const platformDropdown = useDropdown()
  const resourcesDropdown = useDropdown()
  const companyDropdown = useDropdown()

  // Close other dropdowns when one opens
  const handleDropdownToggle = (dropdownName: string) => {
    const dropdowns = {
      howWeWork: howWeWorkDropdown,
      platform: platformDropdown,
      resources: resourcesDropdown,
      company: companyDropdown
    }
    
    Object.entries(dropdowns).forEach(([name, dropdown]) => {
      if (name !== dropdownName) {
        dropdown.close()
      }
    })
  }

  // Common dropdown content for all navigation items
  const howWeWorkDropdownSections = [
    {
      title: "GET STARTED",
      items: [
        {
          title: "Upload Videos",
          description: "Securely upload your video files for analysis with our edge-case detection capabilities.",
          href: "#upload-section",
          icon: DropdownIcons.upload
        },
        {
          title: "AI Analysis",
          description: "Our AI processes your videos in seconds, providing comprehensive insights and annotations.",
          href: "#ai-analysis-section", 
          icon: DropdownIcons.analytics
        },
        {
          title: "Get Insights",
          description: "Access detailed analytics, chat with your data, and discover patterns instantly.",
          href: "#insights-section",
          icon: DropdownIcons.search
        }
      ]
    },
    {
      title: "CAPABILITIES",
      items: [
        {
          title: "Object Detection",
          description: "Advanced recognition",
          href: "#detection",
          icon: DropdownIcons.detection
        },
        {
          title: "Real-time Monitoring",
          description: "Live analysis & alerts",
          href: "#monitoring",
          icon: DropdownIcons.analytics
        }
      ]
    }
  ]

  const platformDropdownSections = [
    {
      title: "FEATURES",
      items: [
        {
          title: "VLA Annotations",
          description: "Advanced visual language annotations that provide context-aware labeling for complex data structures.",
          href: "/vla-annotations",
          icon: DropdownIcons.code
        },
        {
          title: "Razor-Fast Event Search",
          description: "Lightning-speed event discovery and filtering across massive datasets with real-time results.",
          href: "/event-search",
          icon: DropdownIcons.search
        },
        {
          title: "Deep Semantic Reasoning",
          description: "Intelligent understanding and analysis that goes beyond surface-level pattern matching.",
          href: "/semantic-reasoning",
          icon: DropdownIcons.analytics
        },
        {
          title: "Customized Chat and Comparisons",
          description: "Tailored conversational interfaces with powerful comparison tools for informed decision making.",
          href: "/customized-chat",
          icon: DropdownIcons.chat
        }
      ]
    },
    {
      title: "PLATFORM COMPONENTS",
      items: [
        {
          title: "NomadicML Platform",
          description: "Web-based interface for video analysis and insights generation.",
          href: "/platform",
          icon: DropdownIcons.analytics
        },
        {
          title: "NomadicML Code Level SDK",
          description: "Direct API access and SDK for custom integrations and workflows.",
          href: "/sdk",
          icon: DropdownIcons.code
        }
      ]
    }
  ]

  const resourcesDropdownSections = [
    {
      title: "VERTICALS",
      items: [
        {
          title: "Automotive",
          description: "Motion footage analysis, vehicle behavior tracking, and automotive safety monitoring.",
          href: "/driving",
          icon: DropdownIcons.driving
        },
        {
          title: "Autonomous Vehicle Simulation",
          description: "Advanced simulation analysis for AV testing and validation in automotive scenarios.",
          href: "/simulation",
          icon: DropdownIcons.analytics
        },
        {
          title: "Infrastructure",
          description: "Automated detection of key infrastructural defects in roads, bridges, and automotive infrastructure.",
          href: "/infrastructure",
          icon: DropdownIcons.infrastructure
        },
        {
          title: "Robotics",
          description: "Robot behavior analysis and performance optimization in various environments.",
          href: "/robotics",
          icon: DropdownIcons.detection
        }
      ]
    },
    {
      title: "USE CASES",
      items: [
        {
          title: "Vehicle Behavior Analysis",
          description: "81% Cost Savings - Advanced analysis of automotive motion footage and traffic patterns.",
          href: "#automotive",
          icon: DropdownIcons.driving
        },
        {
          title: "Infrastructure Defect Detection",
          description: "81% Cost Reduction - Identify key defects in roads, bridges, and automotive infrastructure.",
          href: "#infrastructure-defects",
          icon: DropdownIcons.infrastructure
        },
        {
          title: "Robotics Performance Optimization",
          description: "100% Management Overhead Eliminated - Robot behavior analysis and testing workflows.",
          href: "#robotics-optimization",
          icon: DropdownIcons.detection
        },
        {
          title: "Edge Case Detection",
          description: "30 Second Processing - Real-time edge case discovery for autonomous systems.",
          href: "#edge-cases",
          icon: DropdownIcons.analytics
        }
      ]
    }
  ]

  const companyDropdownSections = [
    {
      title: "ABOUT",
      items: [
        {
          title: "Our Mission",
          description: "Transforming video analysis with AI that never misses a detail.",
          href: "#mission",
          icon: DropdownIcons.analytics
        },
        {
          title: "Team",
          description: "Meet the experts behind NomadicML's innovative video AI technology.",
          href: "#team",
          icon: DropdownIcons.search
        },
        {
          title: "Careers",
          description: "Join us in building the future of video intelligence.",
          href: "#careers",
          icon: DropdownIcons.code
        }
      ]
    },
    {
      title: "RESOURCES",
      items: [
        {
          title: "Documentation",
          description: "Comprehensive guides and API references for developers.",
          href: "https://docs.nomadicml.com",
          icon: DropdownIcons.code
        },
        {
          title: "Video Demos",
          description: "Watch our platform in action with real video analysis examples.",
          href: "#video-demos",
          icon: DropdownIcons.search
        }
      ]
    }
  ]

  const howWeWorkCtaSection = {
    title: "Try Our Demo",
    description: "Explore our platform with real examples and see how it works in practice.",
    buttonText: "Explore Examples",
    buttonHref: "https://app.nomadicml.com/live-demo/examples",
    progress: {
      text: "Demo ready in 30 seconds",
      progress: 85
    },
    showFloatingLogos: true
  }

  const platformCtaSection = {
    title: "Platform Access",
    description: "Get started with our platform and see how it can transform your video analysis workflow.",
    buttonText: "Login to Platform",
    buttonHref: "https://app.nomadicml.com/",
    progress: {
      text: "Platform ready",
      progress: 100
    },
    showFloatingLogos: true
  }

  const resourcesCtaSection = {
    title: "Explore Solutions",
    description: "Discover how NomadicML can solve your specific video analysis challenges.",
    buttonText: "View Solutions",
    buttonHref: "https://app.nomadicml.com/solutions",
    progress: {
      text: "Solutions ready",
      progress: 100
    },
    showFloatingLogos: true
  }

  const companyCtaSection = {
    title: "Get in Touch",
    description: "Learn more about NomadicML and how we can help your organization.",
    buttonText: "Contact Us",
    buttonHref: "https://calendly.com/nomadic-ml/nomadicml-intro",
    progress: {
      text: "Response in 24h",
      progress: 90
    },
    showFloatingLogos: true
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <a href="./" className="flex items-center">
          <img 
            src="/images/NomadicMLLogo.png" 
            alt="NomadicML" 
            className="h-8"
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-8 relative">
          <DelveDropdown
            ref={howWeWorkDropdown.dropdownRef}
            trigger="Get Started"
            isOpen={howWeWorkDropdown.isOpen}
            onToggle={() => {
              howWeWorkDropdown.toggle()
              handleDropdownToggle('howWeWork')
            }}
            sections={howWeWorkDropdownSections}
            ctaSection={howWeWorkCtaSection}
          />

          <DelveDropdown
            ref={platformDropdown.dropdownRef}
            trigger="Platform"
            isOpen={platformDropdown.isOpen}
            onToggle={() => {
              platformDropdown.toggle()
              handleDropdownToggle('platform')
            }}
            sections={platformDropdownSections}
            ctaSection={platformCtaSection}
          />

          <DelveDropdown
            ref={resourcesDropdown.dropdownRef}
            trigger="Solutions"
            isOpen={resourcesDropdown.isOpen}
            onToggle={() => {
              resourcesDropdown.toggle()
              handleDropdownToggle('resources')
            }}
            sections={resourcesDropdownSections}
            ctaSection={resourcesCtaSection}
          />

          <DelveDropdown
            ref={companyDropdown.dropdownRef}
            trigger="Company"
            isOpen={companyDropdown.isOpen}
            onToggle={() => {
              companyDropdown.toggle()
              handleDropdownToggle('company')
            }}
            sections={companyDropdownSections}
            ctaSection={companyCtaSection}
          />
                  </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://app.nomadicml.com/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Log In
          </a>
          <a 
            href="https://calendly.com/nomadic-ml/nomadicml-intro"
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
          >
            Book a Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6" 
            style={{ color: 'var(--token-text-primary)' }}
            data-framer-appear-id="hero-title"
          >
            Your <span style={{ color: 'var(--token-cyan-primary)' }}>Video AI Agent</span><br />
            that Never Blinks
          </h1>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto" 
            style={{ color: 'var(--token-text-secondary)' }}
            data-framer-appear-id="hero-subtitle"
          >
            Human level understanding on thousands of hours of motion footage within seconds.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            data-framer-appear-id="hero-buttons"
          >
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Try Demo →
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: 'var(--token-cyan-primary)' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-hover)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-primary)'}
            >
              Book a Call
            </a>
          </div>
        </div>
        
        <Tabs defaultValue="search" className="w-full max-w-4xl mx-auto" data-framer-appear-id="hero-tabs">
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-white/60 backdrop-blur-sm p-1 rounded-lg">
            <TabsTrigger 
              value="search" 
              className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Search Videos
            </TabsTrigger>
            <TabsTrigger 
              value="motion" 
              className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Understand Motion
            </TabsTrigger>
            <TabsTrigger 
              value="api" 
              className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Scale with our API
            </TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="mt-0">
                <video 
                  autoPlay 
                  loop 
                  muted 
              className="w-full object-cover rounded-lg"
              style={{ height: '500px' }}
              src="/landing_page/Search_Videos.mp4"
                />
          </TabsContent>

          <TabsContent value="motion" className="mt-0">
            <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
              <video 
                autoPlay 
                loop 
                muted 
                className="w-full h-64 object-cover rounded mb-4"
                src="/i1DNpPLzeuJPVTJrRWJMsAYmwDg.mp4"
              />
              <div className="text-white">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  <span className="text-sm font-medium" style={{ color: 'var(--token-cyan-primary)' }}>Identify</span>
                </div>
                <p className="text-gray-300 text-sm">
                  AI-powered motion detection and analysis in real-time video streams.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="api" className="mt-0">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <video 
                autoPlay 
                muted 
                className="w-full object-cover"
                style={{ height: '500px' }}
                src="/images/Vehicle_Construction_Tracking_clip.mp4"
              />
              
              {/* Animated Terminal Window */}
              <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-lg border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 font-mono">NomadicML API</span>
                </div>
                
                {/* Terminal Content with Animation */}
                <div className="p-3 bg-gray-900 rounded-b-lg text-xs font-mono overflow-hidden h-24">
                  <div className="terminal-content">
                    {/* First Query */}
                    <div className="mb-2 overflow-hidden whitespace-nowrap">
                      <span className="first-query inline-block">
                        <span className="text-yellow-300">labeled_video</span>
                        <span className="text-white"> = </span>
                        <span className="text-purple-400">client.video.label</span>
                        <span className="text-white">(</span>
                        <span className="text-blue-400">"highway_video"</span>
                        <span className="text-white">, </span>
                        <span className="text-blue-400">"Find Relevant Traffic Vehicles"</span>
                        <span className="text-white">)</span>
                      </span>
                    </div>

                    {/* First Output */}
                    <div className="mb-3 border-t border-gray-700 pt-2 first-output">
                      <div className="text-green-400">
                        Vehicle is in close proximity to SUV ahead.
                      </div>
                    </div>

                    {/* Second Query (appears below first output) */}
                    <div className="mb-2 overflow-hidden whitespace-nowrap">
                      <span className="second-query inline-block">
                        <span className="text-yellow-300">analysis</span>
                        <span className="text-white"> = </span>
                        <span className="text-purple-400">client.video.label</span>
                        <span className="text-white">(</span>
                        <span className="text-yellow-300">labeled_video</span>
                        <span className="text-white">, </span>
                        <span className="text-blue-400">"Find important construction vehicles in the traffic environment"</span>
                        <span className="text-white">)</span>
                      </span>
                    </div>

                    {/* Second Output */}
                    <div className="border-t border-gray-700 pt-2 second-output">
                      <div className="text-green-400">
                        Traffic cones and tractor found in environment. The vehicle must drive carefully.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

const HowWeWork = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target.querySelectorAll('.animate-fade-in-up');
            console.log('Animating images:', images.length); // Debug log
            
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add('animate');
                console.log('Added animate class to image', index + 1); // Debug log
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const insightsSection = document.querySelector('[data-framer-appear-id="insights-gallery"]');
    if (insightsSection && insightsSection.parentElement) {
      observer.observe(insightsSection.parentElement);
      console.log('Observer set up for insights section'); // Debug log
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="howitworks" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            data-framer-appear-id="how-we-work-title"
          >
            How We Work
          </h2>
          <p 
            className="text-xl text-gray-600"
            data-framer-appear-id="how-we-work-subtitle"
          >
            Unlock powerful video insights with AI that never misses a detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Upload Your Videos Card */}
          <div id="upload-section" className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" data-framer-appear-id="upload-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
                Upload
            </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload Your Videos</h3>
            <p className="text-gray-600 mb-6">
              We support all major video formats and integrate with all cloud-based object storage services.
            </p>
            
            {/* Upload Videos Animation */}
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <img 
                src="/images/upload_videos_animation.png"
                alt="Upload Videos Animation"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* AI Analysis Card */}
          <div id="ai-analysis-section" className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" data-framer-appear-id="analysis-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
                AI Analysis
            </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Analysis</h3>
            <p className="text-gray-600 mb-6">
              Analyze every frame, detect unique objects, and locate critical edge cases.
            </p>
            
            {/* AI Insights Animation */}
            <div className="bg-white rounded-lg border border-cyan-200 p-4">
              <img 
                src="/images/ai_insights_animation.png"
                alt="AI Insights Animation"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Obtain Insights Section */}
        <div className="w-full">
          <div className="text-center mb-16">
          <h3 
              id="insights-section"
              className="text-4xl font-bold text-gray-900 mb-6"
            data-framer-appear-id="insights-title"
          >
            Obtain Insights
          </h3>
          <p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            data-framer-appear-id="insights-subtitle"
          >
            Receive detailed reports, real-time alerts, and structured data that you can immediately act upon or integrate into your workflows.
          </p>
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              data-framer-appear-id="insights-cta"
            >
              Try Demo →
            </a>
          </div>
          
          <div 
            className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto"
            data-framer-appear-id="insights-gallery"
          >
            <img 
              src="/images/curve_image_1.png" 
              alt="Analysis Result 1"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ 
                animationDelay: '0ms',
                animation: 'fadeInUp 0.6s ease-out forwards, float1 6s ease-in-out infinite'
              }}
            />
            <img 
              src="/images/curve_image_2.png" 
              alt="Analysis Result 2"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ 
                animationDelay: '100ms',
                animation: 'fadeInUp 0.6s ease-out forwards, float2 8s ease-in-out infinite'
              }}
            />
            <img 
              src="/images/curve_img_3.png" 
              alt="Analysis Result 3"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ 
                animationDelay: '200ms',
                animation: 'fadeInUp 0.6s ease-out forwards, float3 7s ease-in-out infinite'
              }}
            />
            <img 
              src="/images/curve_img_4.png" 
              alt="Analysis Result 4"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ 
                animationDelay: '300ms',
                animation: 'fadeInUp 0.6s ease-out forwards, float4 9s ease-in-out infinite'
              }}
            />
            <img 
              src="/images/curve_img_5.png" 
              alt="Analysis Result 5"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ 
                animationDelay: '400ms',
                animation: 'fadeInUp 0.6s ease-out forwards, float5 5s ease-in-out infinite'
              }}
            />
            <img 
              src="/images/curve_img_6.png" 
              alt="Analysis Result 6"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ 
                animationDelay: '500ms',
                animation: 'fadeInUp 0.6s ease-out forwards, float6 10s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const TransformSection = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 
          className="text-4xl font-bold text-gray-900 mb-8"
          data-framer-appear-id="transform-title"
        >
          NomadicML transforms
        </h2>
        <div 
          className="flex items-center justify-center mb-8"
          data-framer-appear-id="transform-content"
        >
          <span className="text-2xl text-gray-700 mr-4">video analysis</span>
          <div className="w-16 h-16 rounded-full overflow-hidden mx-4" data-framer-appear-id="transform-image">
            <img 
              src="/images/curve_image_1.png" 
              alt="Video Analysis"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl text-gray-700 ml-4">across industries</span>
        </div>
        <p 
          className="text-xl text-gray-600"
          data-framer-appear-id="transform-subtitle"
        >
          with precision and intelligence.
        </p>
      </div>
    </section>
  )
}

const CallToAction = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 
          className="text-4xl font-bold mb-4" 
          style={{ color: 'var(--token-text-primary)' }}
          data-framer-appear-id="cta-title"
        >
          Unlock <span style={{ color: 'var(--token-cyan-primary)' }}>actionable insights</span><br />
          from your video data
        </h2>
        <p 
          className="text-lg mb-8" 
          style={{ color: 'var(--token-text-secondary)' }}
          data-framer-appear-id="cta-subtitle"
        >
          Get started for free with our demo, and book a call and discover how NomadicML turns raw footage into actionable insights, fast.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-framer-appear-id="cta-buttons"
        >
          <a 
            href="https://app.nomadicml.com/live-demo/examples"
            className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            style={{ color: 'var(--token-text-secondary)' }}
          >
            Try Demo →
          </a>
          <a 
            href="https://calendly.com/nomadic-ml/nomadicml-intro"
            className="text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            style={{ backgroundColor: 'var(--token-cyan-primary)' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-hover)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-primary)'}
          >
            Book a Call
          </a>
        </div>
        
        <div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          data-framer-appear-id="cta-features"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-white/80 hover:scale-105" data-framer-appear-id="cta-feature-1">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
              <svg className="w-6 h-6" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--token-text-primary)' }}>Expert Support</h3>
            <p className="text-sm" style={{ color: 'var(--token-text-secondary)' }}>Get guidance from our AI specialists</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-white/80 hover:scale-105" data-framer-appear-id="cta-feature-2">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}>
              <svg className="w-6 h-6" style={{ color: 'var(--token-purple-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--token-text-primary)' }}>Easy Integration</h3>
            <p className="text-sm" style={{ color: 'var(--token-text-secondary)' }}>Seamless API integration in minutes</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-white/80 hover:scale-105" data-framer-appear-id="cta-feature-3">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <svg className="w-6 h-6" style={{ color: 'var(--token-blue-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--token-text-primary)' }}>Proven Results</h3>
            <p className="text-sm" style={{ color: 'var(--token-text-secondary)' }}>Trusted by leading organizations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="flex flex-col md:flex-row justify-between items-start mb-8"
          data-framer-appear-id="footer-content"
        >
          <div className="mb-6 md:mb-0" data-framer-appear-id="footer-brand">
            <img 
              src="/images/NomadicMLLogo.png" 
              alt="NomadicML" 
              className="h-8 mb-4 transition-transform duration-200 hover:scale-105"
            />
            <p className="text-gray-400">Your Video AI Agent that never blinks.</p>
          </div>
          
          <div className="flex space-x-4" data-framer-appear-id="footer-social">
            <a href="https://linkedin.com/company/nomadicml" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/NomadicML" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@NomadicML" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          data-framer-appear-id="footer-bottom"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025. All rights reserved. NomadicML Inc.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const PlatformSections = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">NomadicML Platform</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Powerful AI-driven video analysis tools designed to transform how you understand and interact with visual data.
          </p>
        </div>
        
        {/* Platform Features - Staggered Layout */}
        <div className="space-y-12 mb-20">
          {/* VLA Annotations */}
          <div className="flex items-center lg:justify-start">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">VLA Annotations</h3>
                  <p className="text-blue-600 font-medium">Context-Aware Labeling</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Advanced visual language annotations that provide context-aware labeling for complex data structures. 
                Goes beyond simple object detection to understand relationships, spatial context, and temporal dynamics.
              </p>
              <div className="flex gap-4 mb-6">
                <img src="/images/curve_image_1.png" alt="VLA Demo" className="w-24 h-24 object-cover rounded-xl shadow-md" />
                <img src="/images/curve_image_2.png" alt="VLA Demo 2" className="w-24 h-24 object-cover rounded-xl shadow-md" />
              </div>
              <Link 
                to="/vla-annotations"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Event Search */}
          <div className="flex items-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Event Search</h3>
                  <p className="text-purple-600 font-medium">Lightning-Fast Results</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Search through thousands of hours of footage in seconds with proprietary indexing technology. 
                Uses semantic understanding for natural language queries with sub-second response times.
              </p>
              <div className="flex gap-4 mb-6">
                <img src="/images/curve_img_3.png" alt="Search Demo" className="w-24 h-24 object-cover rounded-xl shadow-md" />
                <img src="/images/curve_img_4.png" alt="Search Demo 2" className="w-24 h-24 object-cover rounded-xl shadow-md" />
              </div>
              <Link 
                to="/event-search"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Semantic Reasoning */}
          <div className="flex items-center lg:justify-start">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Semantic Reasoning</h3>
                  <p className="text-indigo-600 font-medium">Deep Understanding</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Goes beyond pattern recognition to understand meaning, context, and intent in video data. 
                Enables predictive analysis and intent recognition for superior insights and safety applications.
              </p>
              <div className="flex gap-4 mb-6">
                <img src="/images/curve_img_5.png" alt="Reasoning Demo" className="w-24 h-24 object-cover rounded-xl shadow-md" />
                <img src="/images/curve_img_6.png" alt="Reasoning Demo 2" className="w-24 h-24 object-cover rounded-xl shadow-md" />
              </div>
              <Link 
                to="/semantic-reasoning"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Customized Chat */}
          <div className="flex items-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Chat & Comparisons</h3>
                  <p className="text-pink-600 font-medium">Natural Language Interface</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Interact with video data using natural language queries and powerful comparison tools. 
                Generate automated reports, set up intelligent alerts, and perform trend analysis across timeframes.
              </p>
              <div className="flex gap-4 mb-6">
                <img src="/images/curve_image_1.png" alt="Chat Demo" className="w-24 h-24 object-cover rounded-xl shadow-md" />
                <img src="/images/curve_image_2.png" alt="Chat Demo 2" className="w-24 h-24 object-cover rounded-xl shadow-md" />
              </div>
              <Link 
                to="/customized-chat"
                className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Platform Components Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Platform Components</h3>
            <p className="text-xl text-gray-600">Choose the deployment option that best fits your workflow</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* NomadicML Platform */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">NomadicML Platform</h4>
                <p className="text-gray-700 text-lg mb-6">Web-based interface for video analysis and insights generation with intuitive dashboards and real-time results.</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h5 className="text-xl font-bold text-gray-900 mb-3">🎯 Key Features</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Drag & drop video uploads with all format support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Real-time analysis with instant results dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Interactive reports with annotated thumbnails</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Custom event detection and edge case analysis</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-600 rounded-xl p-6 text-white">
                  <h5 className="text-lg font-bold mb-3">Perfect for:</h5>
                  <div className="space-y-2 text-blue-100">
                    <p>• Business users who need quick insights</p>
                    <p>• Teams requiring collaborative analysis</p>
                    <p>• Projects with manual review workflows</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://app.nomadicml.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Try Platform Free
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Code Level SDK */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Code Level SDK</h4>
                <p className="text-gray-700 text-lg mb-6">Python SDK for programmatic access, automation, and seamless workflow integration.</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h5 className="text-xl font-bold text-gray-900 mb-3">⚡ Quick Start</h5>
                  <div className="bg-gray-900 rounded-lg p-4 text-left mb-4">
                    <pre className="text-green-400 text-sm font-mono">
{`pip install nomadicml

from nomadicml import NomadicML
client = NomadicML(api_key="your_key")

# Upload & analyze
response = client.upload('video.mp4')
result = client.analyze(
    response['video_id'],
    analysis_type=AnalysisType.RAPID_REVIEW,
    custom_event="traffic violations"
)`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h5 className="text-xl font-bold text-gray-900 mb-3">🔧 Capabilities</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Batch processing of video collections</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Cloud storage integration (S3, GCS, Azure)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Project-based folder organization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Database integration for results storage</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-600 rounded-xl p-6 text-white">
                  <h5 className="text-lg font-bold mb-3">Perfect for:</h5>
                  <div className="space-y-2 text-purple-100">
                    <p>• Developers building custom workflows</p>
                    <p>• Large-scale video processing pipelines</p>
                    <p>• Integration with existing ML systems</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://docs.nomadicml.com/api-reference/sdk-examples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105"
                  >
                    View SDK Docs
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Analysis Types Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Analysis Types Available</h4>
              <p className="text-lg text-gray-600">Choose the right analysis for your specific use case</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">Rapid Review</h5>
                <p className="text-gray-600 mb-4">Fast custom event detection based on your specific requirements and categories.</p>
                <div className="bg-green-100 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">Perfect for: Custom event detection, compliance monitoring</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">Edge Case Detection</h5>
                <p className="text-gray-600 mb-4">Identifies unusual or edge-case scenarios that require special attention.</p>
                <div className="bg-orange-100 rounded-lg p-3">
                  <p className="text-orange-800 text-sm font-medium">Perfect for: Safety analysis, quality assurance, anomaly detection</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">Needle-in-Haystack</h5>
                <p className="text-gray-600 mb-4">Searches for specific events within long videos using semantic understanding.</p>
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-blue-800 text-sm font-medium">Perfect for: Long video analysis, specific object/event search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SolutionsSections = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  const solutions = [
    {
      id: 'automotive',
      title: 'Automotive Analysis',
      subtitle: 'Motion Footage & Vehicle Behavior',
      description: 'Advanced analysis of automotive motion footage including traffic patterns, vehicle behavior analysis, and safety monitoring. Transform hours of coordination into results within seconds with edge-case detection and comprehensive classification across vehicle categories.',
      metrics: [
        { value: '81%', label: 'Cost Savings', color: 'green' },
        { value: '99.8%', label: 'Time Savings', color: 'blue' }
      ],
      capabilities: [
        'Rapid Review & Chat with motion footage',
        'Edge-case detection for vehicle behavior',
        'Concurrent processing up to 25 videos',
        'Object/Lane tracking and classification'
      ],
      images: ['/images/curve_image_1.png', '/images/curve_image_2.png'],
      link: '/driving',
      gradient: 'from-blue-50 to-cyan-50',
      iconGradient: 'from-blue-500 to-cyan-600',
      textColor: 'blue-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    },
    {
      id: 'simulation',
      title: 'AV Simulation Testing',
      subtitle: 'Autonomous Vehicle Validation',
      description: 'Advanced simulation analysis for autonomous vehicle testing and validation. Analyze thousands of edge cases in automotive scenarios, vehicle-to-vehicle interactions, and complex driving conditions with 30-second processing time instead of hours of manual review.',
      metrics: [
        { value: '1000+', label: 'Edge Cases', color: 'purple' },
        { value: '30sec', label: 'Processing', color: 'orange' }
      ],
      capabilities: [
        'Autonomous vehicle edge case discovery',
        'Multi-vehicle interaction analysis',
        'Rapid simulation testing cycles',
        'Vehicle behavior validation'
      ],
      images: ['/images/curve_img_3.png', '/images/curve_img_4.png'],
      link: '/simulation',
      gradient: 'from-purple-50 to-indigo-50',
      iconGradient: 'from-purple-500 to-indigo-600',
      textColor: 'purple-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Defect Detection',
      subtitle: 'Automated Defect Identification',
      description: 'Identify key infrastructural defects in roads, bridges, and automotive infrastructure through automated video analysis. Eliminate manual inspection bottlenecks and achieve 81% cost savings while ensuring consistent defect detection across large-scale infrastructure projects.',
      metrics: [
        { value: '81%', label: 'Cost Reduction', color: 'teal' },
        { value: '100%', label: 'Mgmt Overhead', color: 'indigo' }
      ],
      capabilities: [
        'Road surface defect identification',
        'Bridge structure analysis',
        'Automotive infrastructure monitoring',
        'Large-scale infrastructure assessment'
      ],
      images: ['/images/curve_img_5.png', '/images/curve_img_6.png'],
      link: '/infrastructure',
      gradient: 'from-teal-50 to-green-50',
      iconGradient: 'from-teal-500 to-green-600',
      textColor: 'teal-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H3.862a2 2 0 01-1.995-1.858L1 7m18 0l-2-4H5L3 7m16 0H3m2.5 0h9l-.5-2M9 11v6M11 11v6" />
        </svg>
      )
    },
    {
      id: 'robotics',
      title: 'Robotics Analysis',
      subtitle: 'Behavior & Performance Optimization',
      description: 'Comprehensive robot behavior analysis and performance optimization. Eliminate manual review bottlenecks for robotics testing and deployment. Scale instantly with lightweight processing for immediate insights and consistent output every time.',
      metrics: [
        { value: '100%', label: 'Mgmt Overhead', color: 'pink' },
        { value: '30sec', label: 'Processing', color: 'yellow' }
      ],
      capabilities: [
        'Rapid prototyping & iteration testing',
        'Large-scale video processing workflows',
        'Real-time edge case discovery',
        'Zero management overhead scaling'
      ],
      images: ['/images/curve_image_1.png', '/images/curve_image_2.png'],
      link: '/robotics',
      gradient: 'from-pink-50 to-rose-50',
      iconGradient: 'from-pink-500 to-rose-600',
      textColor: 'pink-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      )
    }
  ]

  const currentSolution = solutions[activeTab]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Solutions</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            AI-powered video analysis solutions for automotive and robotics applications.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? `bg-gradient-to-r ${solution.iconGradient} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {solution.title}
            </button>
          ))}
        </div>

        {/* Active Solution Display */}
        <div className={`bg-gradient-to-br ${currentSolution.gradient} rounded-3xl p-8 md:p-12 shadow-xl mb-16 transition-all duration-500`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Solution Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${currentSolution.iconGradient} rounded-2xl flex items-center justify-center mr-6`}>
                  {currentSolution.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{currentSolution.title}</h3>
                  <p className={`text-${currentSolution.textColor} font-medium text-lg md:text-xl`}>{currentSolution.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                {currentSolution.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentSolution.metrics.map((metric, index) => (
                  <div key={index} className={`bg-${metric.color}-100 rounded-xl p-4 text-center`}>
                    <div className={`text-2xl md:text-3xl font-bold text-${metric.color}-800`}>{metric.value}</div>
                    <div className={`text-sm md:text-base text-${metric.color}-700`}>{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div className={`bg-${currentSolution.textColor.split('-')[0]}-50 rounded-xl p-6 mb-8`}>
                <h4 className={`font-semibold text-${currentSolution.textColor.split('-')[0]}-900 mb-4 text-lg`}>Key Capabilities:</h4>
                <ul className={`text-${currentSolution.textColor.split('-')[0]}-800 space-y-2`}>
                  {currentSolution.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-xl mr-2">•</span>
                      <span className="text-sm md:text-base">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to={currentSolution.link}
                className={`inline-flex items-center gap-2 text-${currentSolution.textColor} hover:text-${currentSolution.textColor.replace('-600', '-700')} font-semibold text-lg md:text-xl transition-colors group`}
              >
                Explore {currentSolution.title} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Solution Images */}
            <div className="grid grid-cols-2 gap-6">
              {currentSolution.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${currentSolution.title} Demo ${index + 1}`} 
                  className="w-full h-32 md:h-40 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === index 
                  ? `bg-gradient-to-r ${solutions[index].iconGradient}` 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mb-16">
          <button
            onClick={() => setActiveTab((prev) => (prev - 1 + solutions.length) % solutions.length)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
          >
            <svg className="w-5 h-5 rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </button>
          <button
            onClick={() => setActiveTab((prev) => (prev + 1) % solutions.length)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
          >
            Next
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Workflow?</h3>
          <p className="text-xl text-gray-600 mb-8">Eliminate manual review bottlenecks. Scale instantly. Ship faster.</p>
          <a 
            href="https://calendly.com/nomadic-ml/nomadicml-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Schedule a Demo
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Platform Page Components
const VLAAnnotationsPage = () => {
  const [selectedScenario, setSelectedScenario] = React.useState<'wet-road' | 'semi-truck'>('wet-road')
  const [workflowStep, setWorkflowStep] = React.useState(0)

  const scenarios = {
    'wet-road': {
      title: 'Wet Road Conditions',
      video: '/images/object_tracking_10_15.mp4',
      description: 'Oncoming vehicle on wet road',
      timestamp: '10-15s',
      analysis: {
        event: 'Straddling two lanes: The ego vehicle drove down the center of a narrow, unmarked road',
        code: 'CVC Section: 21658 - Description: Unsafe lane straddling or failing to drive within a single marked lane.',
        context: 'The ego vehicle (bus) drives slowly uphill on a narrow, snow-lined road',
        reasoning: 'Its central position appears necessary due to parked cars and snow encroaching on the roadway',
        conclusion: 'Justified Behavior!'
      }
    },
    'semi-truck': {
      title: 'Semi-Truck with Spray',
      video: '/images/object_tracking_40_45.mp4',
      description: 'Oncoming semi-truck with spray',
      timestamp: '40-45s',
      analysis: {
        event: 'Large vehicle approach with visibility obstruction',
        code: 'CVC Section: 21709 - Following too closely in adverse conditions',
        context: 'Semi-truck creates spray reducing visibility',
        reasoning: 'Maintaining safe following distance in poor visibility conditions',
        conclusion: 'Appropriate Safety Behavior'
      }
    }
  } as const

  const workflowSteps = [
    {
      step: 1,
      title: 'Detect Event',
      description: scenarios[selectedScenario].analysis.event,
      icon: '🔍',
      color: 'blue'
    },
    {
      step: 2,
      title: 'Detect Driving Code',
      description: scenarios[selectedScenario].analysis.code,
      icon: '📋',
      color: 'purple'
    },
    {
      step: 3,
      title: 'Understand Context',
      description: scenarios[selectedScenario].analysis.context,
      icon: '🧠',
      color: 'green'
    },
    {
      step: 4,
      title: 'Analyze Context',
      description: scenarios[selectedScenario].analysis.reasoning,
      icon: '⚖️',
      color: 'orange'
    },
    {
      step: 5,
      title: 'Conclusion',
      description: scenarios[selectedScenario].analysis.conclusion,
      icon: '✅',
      color: 'emerald'
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWorkflowStep((prev) => (prev + 1) % workflowSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [selectedScenario, workflowSteps.length])

  const getStepColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      emerald: 'from-emerald-500 to-emerald-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              VLA <span className="text-sky-600">Annotations</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Intelligent video analysis with contextual understanding. Our AI doesn't just detect events—it understands the reasoning behind driving decisions.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Event Detection</h3>
              <p className="text-slate-600">Automatically identify and classify driving events with precise temporal and spatial accuracy.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Context Analysis</h3>
              <p className="text-slate-600">Understand the environmental factors and reasoning behind driving decisions.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Legal Assessment</h3>
              <p className="text-slate-600">Evaluate actions against traffic codes with contextual justification analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">See It In Action</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Watch our AI analyze real driving scenarios with complete contextual understanding
            </p>
          </div>

          {/* Demo Interface */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            {/* Demo Header */}
            <div className={`bg-gradient-to-r ${getStepColor(workflowSteps[workflowStep]?.color || 'blue').replace('500', '400').replace('600', '500')} px-6 py-4 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-white/50">
                    <span className="filter drop-shadow-sm">{workflowSteps[workflowStep]?.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {workflowSteps[workflowStep]?.title}
                    </h3>
                    <p className="text-white/95 text-sm font-medium drop-shadow-md">
                      {workflowSteps[workflowStep]?.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-black/40 backdrop-blur-sm border border-white/30 px-3 py-2 rounded-full text-white font-bold">
                    Step {workflowStep + 1} of {workflowSteps.length}
                  </span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4 relative z-10">
                <div className="w-full bg-black/30 backdrop-blur-sm rounded-full h-2 border border-white/20">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300 shadow-lg"
                    style={{ width: `${((workflowStep + 1) / workflowSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Video and Results */}
            <div className="flex flex-col lg:flex-row">
              {/* Video Player */}
              <div className="flex-1 bg-slate-800 relative">
                <video 
                  key={selectedScenario}
                  autoPlay 
                  loop 
                  muted 
                  className="w-full h-80 lg:h-96 object-cover"
                  src={scenarios[selectedScenario].video}
                />
                
                {/* Scenario Selector */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                  <select 
                    value={selectedScenario}
                    onChange={(e) => setSelectedScenario(e.target.value as 'wet-road' | 'semi-truck')}
                    className="bg-white/20 text-white text-sm rounded px-3 py-1 border border-white/30"
                  >
                    <option value="wet-road" className="text-black">Wet Road Conditions</option>
                    <option value="semi-truck" className="text-black">Semi-Truck with Spray</option>
                  </select>
                </div>

                {/* Processing Status */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2 text-white">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Analyzing Context</span>
                  </div>
                </div>
              </div>

              {/* Analysis Results */}
              <div className="w-full lg:w-80 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200">
                <div className="p-4 border-b border-slate-200 bg-white">
                  <h4 className="font-bold text-slate-800 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Analysis Results
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    {scenarios[selectedScenario].title}
                  </p>
                </div>

                <div className="p-4 space-y-4 h-80 lg:h-96 overflow-y-auto">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-3 border transition-all duration-300 ${
                        index === workflowStep 
                          ? 'bg-white border-sky-300 ring-2 ring-sky-100 shadow-md' 
                          : index < workflowStep
                          ? 'bg-emerald-50 border-emerald-200'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                          index === workflowStep 
                            ? `bg-gradient-to-r ${getStepColor(step.color)} text-white` 
                            : index < workflowStep
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-300 text-slate-600'
                        }`}>
                          {index < workflowStep ? '✓' : step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-medium text-sm ${
                              index === workflowStep ? 'text-sky-700' : 'text-slate-700'
                            }`}>
                              {step.title}
                            </span>
                            {index === workflowStep && (
                              <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">
                                Active
                              </span>
                            )}
                          </div>
                          <div className={`text-xs mt-1 ${
                            index === workflowStep ? 'text-slate-700' : 'text-slate-600'
                          }`}>
                            {step.description}
                          </div>
                        </div>
                      </div>
                      
                      {/* Special conclusion styling */}
                      {step.title === 'Conclusion' && index === workflowStep && (
                        <div className="mt-3 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">✅</span>
                            <span className="font-bold text-emerald-700 text-base">{step.description}</span>
                          </div>
                          <div className="text-xs text-emerald-600 mt-1">
                            AI analysis confirms appropriate driving behavior given road conditions.
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Ready to Transform Your Video Analysis?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the power of contextual AI analysis for your driving datasets
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Live Demo
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const SemanticReasoningPage = () => {
  const [currentStep, setCurrentStep] = React.useState(0)

  const steps = [
    {
      step: 1,
      title: 'Context Understanding',
      description: 'Analyze video content with deep understanding of context, relationships, and meaning',
      icon: '🧠',
      color: 'blue',
      details: 'Go beyond pattern recognition to understand the meaning and context behind actions, identifying not just what is happening, but why it\'s happening and what might happen next.'
    },
    {
      step: 2,
      title: 'Intent Recognition',
      description: 'Identify intentions, motivations, and likely outcomes based on behavioral analysis',
      icon: '🎯',
      color: 'purple',
      details: 'Advanced AI models recognize behavioral patterns and predict intentions, enabling proactive decision-making and risk assessment in complex scenarios.'
    },
    {
      step: 3,
      title: 'Predictive Analysis',
      description: 'Anticipate outcomes and identify potential issues before they occur',
      icon: '🔮',
      color: 'emerald',
      details: 'Leverage deep semantic understanding to predict likely outcomes, identify potential safety issues, and recommend preventive actions based on comprehensive behavioral analysis.'
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Deep Semantic <span className="text-sky-600">Reasoning</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Go beyond pattern recognition to truly understand the meaning and context behind what's happening in your videos.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Context Understanding</h3>
              <p className="text-slate-600">Analyze video content with deep understanding of context, relationships, and meaning.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Intent Recognition</h3>
              <p className="text-slate-600">Identify intentions, motivations, and likely outcomes based on behavioral analysis.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Predictive Analysis</h3>
              <p className="text-slate-600">Anticipate outcomes and identify potential issues before they occur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our advanced semantic reasoning system transforms video analysis from reactive to predictive
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  currentStep === index
                    ? 'border-sky-300 ring-4 ring-sky-100 shadow-xl transform scale-105'
                    : 'border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300'
                }`}
              >
                {/* Header */}
                <div className={`p-6 text-white relative ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600' 
                    : 'bg-gradient-to-r from-slate-500 to-slate-600'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90">Step {step.step}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  {currentStep === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-slate-700 mb-4">{step.description}</p>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </div>
                  
                  {currentStep === index && (
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg border border-sky-200">
                      <div className="flex items-center text-sky-700">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Currently Active</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep ? 'bg-sky-500' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Example Analysis Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Semantic Analysis Example</h2>
            <p className="text-lg text-slate-600">See how our AI understands complex scenarios with contextual reasoning</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200 mb-12">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">🚗 Scenario Analysis</h4>
              <p className="text-blue-700 font-medium text-base leading-relaxed">
                "Vehicle approaching intersection appears to be preparing to turn left based on speed reduction, positioning relative to lane markings, and turn signal activation. High probability of left turn maneuver with 94% confidence based on behavioral pattern analysis."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Real-World Applications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Safety Analysis</h3>
              <p className="text-slate-600">Predict and prevent incidents before they occur by understanding behavioral patterns and risk factors.</p>
              <div className="mt-4 text-sm font-semibold text-red-600">Incident prevention</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality Control</h3>
              <p className="text-slate-600">Understand complex manufacturing processes and identify quality issues with contextual awareness.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">Process optimization</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Behavioral Studies</h3>
              <p className="text-slate-600">Analyze human and robotic interactions with deep understanding of intentions and outcomes.</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">Interaction analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Deep Semantic Reasoning?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Deeper Insights</h3>
              <p className="text-slate-600">Understand the 'why' behind actions, not just the 'what', for more meaningful analysis.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">Contextual understanding</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Predictive Power</h3>
              <p className="text-slate-600">Anticipate outcomes and prevent issues through advanced behavioral prediction capabilities.</p>
              <div className="mt-4 text-sm font-semibold text-orange-600">Proactive analysis</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Advanced AI</h3>
              <p className="text-slate-600">Leverage cutting-edge AI models that understand complex relationships and context.</p>
              <div className="mt-4 text-sm font-semibold text-emerald-600">State-of-the-art technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Unlock Deeper Understanding
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Discover how semantic reasoning can revolutionize your video analysis capabilities
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Reasoning Demo
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const CustomizedChatPage = () => {
  const [currentStep, setCurrentStep] = React.useState(0)

  const steps = [
    {
      step: 1,
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English and get instant, accurate answers about your video data',
      icon: '💬',
      color: 'blue',
      details: 'Interact with your video data using conversational language. Ask complex questions like "Show me all instances where vehicles crossed the center line in the last week" and get precise results instantly.'
    },
    {
      step: 2,
      title: 'Smart Comparisons',
      description: 'Compare performance across time periods, locations, and scenarios with intelligent analytics',
      icon: '📊',
      color: 'purple',
      details: 'Generate comprehensive comparisons between different datasets, time periods, or locations with automated insights and trend analysis to identify patterns and improvements.'
    },
    {
      step: 3,
      title: 'Interactive Exploration',
      description: 'Drill down into specific events, filter results dynamically, and export findings to reports',
      icon: '🔍',
      color: 'emerald',
      details: 'Explore your data interactively with dynamic filtering, detailed drill-downs, and automated report generation for seamless integration into your workflow.'
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
              <span style={{ color: 'var(--token-cyan-primary)' }}>Customized Chat</span> & Comparisons
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Interact with your video data using natural language queries and powerful comparison tools for informed decision making.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_image_1.png" alt="Chat Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_image_2.png" alt="Chat Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>💬 Natural Language Interface</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>Ask questions in plain English and get instant, accurate answers about your video data.</p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-blue-700 font-medium text-lg">"Show me all instances where vehicles crossed the center line in the last week"</p>
                </div>
              </div>
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>📊 Smart Comparisons</h3>
                <p className="text-xl" style={{ color: 'var(--token-text-secondary)' }}>Compare performance across time periods, locations, and scenarios with intelligent analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <h3 className="text-4xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>Interactive Exploration</h3>
              <ul className="space-y-6 text-xl" style={{ color: 'var(--token-text-secondary)' }}>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-6" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Drill down into specific events and timeframes
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-6" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Filter and sort results dynamically
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-6" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Export findings to reports and dashboards
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <h3 className="text-4xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>Automated Insights</h3>
              <ul className="space-y-6 text-xl" style={{ color: 'var(--token-text-secondary)' }}>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-6" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Generate comprehensive reports automatically
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-6" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Set up alerts for important patterns
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-6" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Schedule regular analysis summaries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Start <span style={{ color: 'var(--token-cyan-primary)' }}>Conversing</span> with Your Data
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Experience the power of natural language video analysis and intelligent comparisons.
          </p>
          <a 
            href="https://calendly.com/nomadic-ml/nomadicml-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-200 transform hover:scale-105"
            style={{ backgroundColor: 'var(--token-cyan-primary)' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-hover)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-primary)'}
          >
            Get Started
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

// Platform and Code Pages
const PlatformPage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      {/* Hero Section */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h1 
              className="text-7xl font-bold mb-8" 
              style={{ color: 'var(--token-text-primary)' }}
            >
              NomadicML <span style={{ color: 'var(--token-cyan-primary)' }}>Platform</span>
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Web-based interface for video analysis and insights generation with intuitive dashboards and real-time results.
            </p>
            <a 
              href="https://app.nomadicml.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: 'var(--token-cyan-primary)' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-hover)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-primary)'}
            >
              Try Platform Free
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Platform Features</h2>
            <p className="text-2xl" style={{ color: 'var(--token-text-secondary)' }}>Everything you need for comprehensive video analysis</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Drag & Drop Upload</h3>
              <p className="text-xl mb-8" style={{ color: 'var(--token-text-secondary)' }}>
                Upload videos instantly with support for all major formats. No complex setup required.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-lg" style={{ color: 'var(--token-text-secondary)' }}>
                  <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  MP4, MOV, AVI, MKV support
                </li>
                <li className="flex items-center text-lg" style={{ color: 'var(--token-text-secondary)' }}>
                  <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Cloud storage integration
                </li>
                <li className="flex items-center text-lg" style={{ color: 'var(--token-text-secondary)' }}>
                  <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Batch processing capabilities
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Real-time Analysis</h3>
              <p className="text-xl mb-8" style={{ color: 'var(--token-text-secondary)' }}>
                Get instant results with our advanced AI analysis engine.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-lg" style={{ color: 'var(--token-text-secondary)' }}>
                  <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Custom event detection
                </li>
                <li className="flex items-center text-lg" style={{ color: 'var(--token-text-secondary)' }}>
                  <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Edge case identification
                </li>
                <li className="flex items-center text-lg" style={{ color: 'var(--token-text-secondary)' }}>
                  <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: 'var(--token-cyan-primary)' }}></div>
                  Annotated thumbnails
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Ready to Transform Your <span style={{ color: 'var(--token-cyan-primary)' }}>Video Analysis?</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Join thousands of organizations already using NomadicML Platform.
          </p>
          <a 
            href="https://app.nomadicml.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-200 transform hover:scale-105"
            style={{ backgroundColor: 'var(--token-cyan-primary)' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-hover)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-primary)'}
          >
            Get Started Free
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

const CodeSDKPage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      {/* Hero Section */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h1 
              className="text-7xl font-bold mb-8" 
              style={{ color: 'var(--token-text-primary)' }}
            >
              <span style={{ color: 'var(--token-cyan-primary)' }}>Code Level</span> SDK
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Python SDK for programmatic access, automation, and seamless workflow integration.
            </p>
            <a 
              href="https://docs.nomadicml.com/api-reference/sdk-examples"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: 'var(--token-cyan-primary)' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-hover)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-primary)'}
            >
              View Documentation
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Quick Start</h2>
            <p className="text-2xl" style={{ color: 'var(--token-text-secondary)' }}>Get up and running in minutes</p>
          </div>
          
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
            <h3 className="text-3xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>Installation & Setup</h3>
            <div className="bg-gray-900 rounded-2xl p-8 text-left mb-8">
              <pre className="text-green-400 text-lg font-mono leading-relaxed">
{`# Install the SDK
pip install nomadicml

# Import and initialize
from nomadicml import NomadicML
from nomadicml.video import AnalysisType, CustomCategory

client = NomadicML(
    api_key=os.environ.get("NOMADICML_API_KEY")
)

# Upload and analyze videos
response = client.upload('your_video.mp4')
video_id = response["video_id"]

analysis = client.analyze(
    video_id,
    analysis_type=AnalysisType.RAPID_REVIEW,
    custom_event="Find outlier events",
    custom_category=CustomCategory.DRIVING
)
print(analysis)`}
              </pre>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Batch Processing</h4>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Process multiple videos simultaneously for large-scale analysis.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Cloud Integration</h4>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Direct integration with AWS S3, Google Cloud Storage, and Azure.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Advanced Search</h4>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Semantic search capabilities for needle-in-haystack analysis.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Start Building with <span style={{ color: 'var(--token-cyan-primary)' }}>NomadicML SDK</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Join developers building the future of video analysis.
          </p>
          <a 
            href="https://docs.nomadicml.com/getting-started/quickstart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-200 transform hover:scale-105"
            style={{ backgroundColor: 'var(--token-cyan-primary)' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-hover)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--token-cyan-primary)'}
          >
            Get Started
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

// Solutions Pages
const DrivingPage = () => {
  const [currentStep, setCurrentStep] = React.useState(0)

  const steps = [
    {
      step: 1,
      title: 'Traffic Analysis',
      description: 'Automatically detect traffic violations, unsafe driving behaviors, and compliance issues',
      icon: '🚦',
      color: 'blue',
      details: 'AI-powered traffic analysis identifies speeding, lane violations, red light running, and aggressive driving patterns with 90%+ accuracy in real-time processing.'
    },
    {
      step: 2,
      title: 'Behavior Monitoring',
      description: 'Monitor fleet operations, driver behavior, and vehicle performance continuously',
      icon: '👁️',
      color: 'green',
      details: 'Comprehensive fleet safety monitoring with 24/7 surveillance, instant alerts, and detailed behavioral analytics to improve safety standards across your organization.'
    },
    {
      step: 3,
      title: 'Safety Reporting',
      description: 'Generate automated compliance reports and safety insights for actionable improvements',
      icon: '📊',
      color: 'orange',
      details: 'Detailed safety reports with compliance tracking, trend analysis, and actionable insights to help transportation agencies and fleet managers improve safety outcomes.'
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Automotive <span className="text-sky-600">Analysis</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Advanced traffic analysis, safety monitoring, and compliance tracking for automotive applications with 90%+ accuracy.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚦</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Traffic Violation Detection</h3>
              <p className="text-slate-600">Automatically identify traffic violations, unsafe behaviors, and compliance issues in real-time.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Fleet Safety Monitoring</h3>
              <p className="text-slate-600">Monitor fleet operations, driver behavior, and vehicle performance with 24/7 surveillance.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Safety Reporting</h3>
              <p className="text-slate-600">Generate automated compliance reports and actionable safety insights for continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive automotive analysis system transforms traffic monitoring from reactive to proactive
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  currentStep === index
                    ? 'border-sky-300 ring-4 ring-sky-100 shadow-xl transform scale-105'
                    : 'border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300'
                }`}
              >
                {/* Header */}
                <div className={`p-6 text-white relative ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600' 
                    : 'bg-gradient-to-r from-slate-500 to-slate-600'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90">Step {step.step}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  {currentStep === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-slate-700 mb-4">{step.description}</p>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </div>
                  
                  {currentStep === index && (
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg border border-sky-200">
                      <div className="flex items-center text-sky-700">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Currently Active</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep ? 'bg-sky-500' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Key Use Cases</h2>
            <p className="text-lg text-slate-600">Real-world applications delivering measurable results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Speed Monitoring</h3>
              <p className="text-slate-600">Detect speeding violations and aggressive driving patterns automatically with real-time alerts.</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">90%+ accuracy</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛣️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Lane Departure</h3>
              <p className="text-slate-600">Monitor lane discipline and detect unsafe lane changes or departures for improved safety.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">Real-time detection</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚥</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Intersection Safety</h3>
              <p className="text-slate-600">Analyze intersection behavior and red light violations for comprehensive safety improvements.</p>
              <div className="mt-4 text-sm font-semibold text-orange-600">Traffic compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Our Automotive Analysis?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cost Savings</h3>
              <p className="text-slate-600">Reduce traffic monitoring costs and improve safety outcomes through automated analysis.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">81% cost reduction</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Real-Time Processing</h3>
              <p className="text-slate-600">Instant analysis and alerts ensure immediate response to safety incidents and violations.</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">99.8% time savings</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">High Accuracy</h3>
              <p className="text-slate-600">Industry-leading accuracy in traffic analysis with consistent, reliable detection rates.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">90%+ accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Transform Your Traffic Analysis
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join transportation agencies improving safety with AI-powered insights
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Traffic Analysis Demo
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const AutonomousSimulationPage = () => {
  const [currentStep, setCurrentStep] = React.useState(0)

  const steps = [
    {
      step: 1,
      title: 'Scenario Generation',
      description: 'Create diverse driving scenarios with weather conditions, traffic patterns, and edge cases',
      icon: '🎯',
      color: 'blue',
      details: 'Our AI generates thousands of realistic driving scenarios including adverse weather, complex intersections, and rare edge cases that traditional testing might miss.'
    },
    {
      step: 2,
      title: 'AI System Testing',
      description: 'Deploy your autonomous vehicle algorithms in controlled simulation environments',
      icon: '🚗',
      color: 'purple',
      details: 'Test your perception, planning, and control systems against challenging scenarios with multi-sensor data simulation including LiDAR, cameras, and radar.'
    },
    {
      step: 3,
      title: 'Performance Validation',
      description: 'Analyze results with detailed metrics and safety assessments for real-world readiness',
      icon: '📊',
      color: 'emerald',
      details: 'Get comprehensive performance reports with safety scores, edge case coverage, and recommendations for system improvements before real-world deployment.'
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Autonomous Vehicle <span className="text-sky-600">Simulation</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Accelerate AV development with comprehensive simulation testing. Validate your systems against thousands of edge cases before real-world deployment.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Edge Case Coverage</h3>
              <p className="text-slate-600">Test against thousands of rare scenarios including adverse weather, complex intersections, and unpredictable behaviors.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Multi-Sensor Support</h3>
              <p className="text-slate-600">Comprehensive sensor simulation including LiDAR, cameras, radar, and ultrasonic sensors with realistic noise models.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Performance Analytics</h3>
              <p className="text-slate-600">Detailed metrics on safety performance, system behavior, and readiness for real-world deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive simulation pipeline takes your AV systems from concept to validated deployment
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  currentStep === index
                    ? 'border-sky-300 ring-4 ring-sky-100 shadow-xl transform scale-105'
                    : 'border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300'
                }`}
              >
                {/* Header */}
                <div className={`p-6 text-white relative ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600' 
                    : 'bg-gradient-to-r from-slate-500 to-slate-600'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90">Step {step.step}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  {currentStep === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-slate-700 mb-4">{step.description}</p>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </div>
                  
                  {currentStep === index && (
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg border border-sky-200">
                      <div className="flex items-center text-sky-700">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Currently Active</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep ? 'bg-sky-500' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Our Simulation Platform?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Faster Development</h3>
              <p className="text-slate-600">Reduce testing time from months to weeks with comprehensive simulation coverage.</p>
              <div className="mt-4 text-sm font-semibold text-orange-600">75% faster validation</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Enhanced Safety</h3>
              <p className="text-slate-600">Test dangerous scenarios safely without real-world risks to vehicles or people.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">Zero physical risk</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cost Reduction</h3>
              <p className="text-slate-600">Eliminate expensive physical testing setups and vehicle modifications.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">60% cost savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Accelerate Your AV Development
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join leading automotive companies reducing development time and improving safety outcomes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Simulation Demo
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const InfrastructurePage = () => {
  const [currentStep, setCurrentStep] = React.useState(0)

  const steps = [
    {
      step: 1,
      title: 'Defect Detection',
      description: 'Automatically identify cracks, corrosion, structural damage, and maintenance needs',
      icon: '🔍',
      color: 'blue',
      details: 'AI-powered visual inspection detects structural defects including concrete cracks, steel corrosion, paint deterioration, and alignment issues with millimeter precision.'
    },
    {
      step: 2,
      title: 'Risk Assessment',
      description: 'Classify severity levels and prioritize maintenance based on safety impact',
      icon: '⚖️',
      color: 'orange',
      details: 'Intelligent risk analysis evaluates detected issues against safety standards, predicts failure timelines, and generates prioritized maintenance schedules.'
    },
    {
      step: 3,
      title: 'Monitoring Dashboard',
      description: 'Real-time tracking of infrastructure health with automated alerts and reporting',
      icon: '📊',
      color: 'emerald',
      details: 'Comprehensive dashboard provides 24/7 monitoring, automated alert systems, trend analysis, and detailed reports for regulatory compliance and budget planning.'
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Infrastructure <span className="text-sky-600">Monitoring</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Protect critical infrastructure assets with AI-powered defect detection. Monitor bridges, roads, and facilities 24/7 with 81% cost reduction.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Automated Inspection</h3>
              <p className="text-slate-600">Continuous monitoring of structural integrity with precision defect detection and classification.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Predictive Maintenance</h3>
              <p className="text-slate-600">Identify maintenance needs before they become costly problems with intelligent risk assessment.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">24/7 Asset Protection</h3>
              <p className="text-slate-600">Real-time monitoring with automated alerts and comprehensive reporting for regulatory compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive monitoring system transforms infrastructure management from reactive to proactive
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  currentStep === index
                    ? 'border-sky-300 ring-4 ring-sky-100 shadow-xl transform scale-105'
                    : 'border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300'
                }`}
              >
                {/* Header */}
                <div className={`p-6 text-white relative ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600' 
                    : 'bg-gradient-to-r from-slate-500 to-slate-600'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90">Step {step.step}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  {currentStep === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-slate-700 mb-4">{step.description}</p>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </div>
                  
                  {currentStep === index && (
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg border border-sky-200">
                      <div className="flex items-center text-sky-700">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Currently Active</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep ? 'bg-sky-500' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Smart Infrastructure Monitoring?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cost Reduction</h3>
              <p className="text-slate-600">Reduce infrastructure management costs through automated monitoring and predictive maintenance.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">81% cost savings</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Continuous Monitoring</h3>
              <p className="text-slate-600">24/7 surveillance ensures critical issues are detected immediately, not during scheduled inspections.</p>
              <div className="mt-4 text-sm font-semibold text-orange-600">Real-time alerts</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Enhanced Safety</h3>
              <p className="text-slate-600">Prevent catastrophic failures through early detection and proactive maintenance scheduling.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">Preventive protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Protect Your Critical Assets
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join infrastructure managers reducing costs while improving safety outcomes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Monitoring Demo
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const RoboticsPage = () => {
  const [currentStep, setCurrentStep] = React.useState(0)

  const steps = [
    {
      step: 1,
      title: 'Behavior Analysis',
      description: 'Analyze robot behavior patterns and performance metrics across various environments',
      icon: '🤖',
      color: 'pink',
      details: 'Comprehensive robot behavior analysis tracking movement patterns, task completion efficiency, and interaction quality in diverse operational environments.'
    },
    {
      step: 2,
      title: 'Performance Optimization',
      description: 'Optimize robot operations for maximum efficiency and productivity in real-time',
      icon: '⚡',
      color: 'purple',
      details: 'Real-time performance optimization using AI-driven insights to improve speed, accuracy, and energy efficiency while maintaining safety standards.'
    },
    {
      step: 3,
      title: 'Predictive Maintenance',
      description: 'Detect anomalies and predict maintenance needs to ensure continuous operation',
      icon: '🔧',
      color: 'orange',
      details: 'Advanced predictive maintenance using anomaly detection to prevent breakdowns, schedule optimal maintenance windows, and extend robot lifespan.'
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Robotics <span className="text-sky-600">Analysis</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Robot behavior analysis and performance optimization in various environments for maximum productivity.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Behavior Analysis</h3>
              <p className="text-slate-600">Analyze robot movement patterns, task efficiency, and interaction quality across environments.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Performance Optimization</h3>
              <p className="text-slate-600">Real-time optimization for maximum efficiency, speed, and energy conservation.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Predictive Maintenance</h3>
              <p className="text-slate-600">Detect anomalies and predict maintenance needs to ensure continuous operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive robotics analysis system transforms robot operations from reactive to proactive
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  currentStep === index
                    ? 'border-sky-300 ring-4 ring-sky-100 shadow-xl transform scale-105'
                    : 'border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300'
                }`}
              >
                {/* Header */}
                <div className={`p-6 text-white relative ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600' 
                    : 'bg-gradient-to-r from-slate-500 to-slate-600'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90">Step {step.step}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  {currentStep === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-slate-700 mb-4">{step.description}</p>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </div>
                  
                  {currentStep === index && (
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg border border-sky-200">
                      <div className="flex items-center text-sky-700">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Currently Active</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep ? 'bg-sky-500' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Key Applications</h2>
            <p className="text-lg text-slate-600">Real-world robotics applications delivering measurable results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Manufacturing</h3>
              <p className="text-slate-600">Optimize robot efficiency and safety in manufacturing environments with real-time analysis.</p>
              <div className="mt-4 text-sm font-semibold text-pink-600">100% mgmt overhead eliminated</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Logistics</h3>
              <p className="text-slate-600">Improve warehouse automation and throughput with intelligent behavior analysis.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">30sec processing</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Service Robots</h3>
              <p className="text-slate-600">Enhance performance in dynamic environments with adaptive behavior optimization.</p>
              <div className="mt-4 text-sm font-semibold text-orange-600">Real-time optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Our Robotics Analysis?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cost Efficiency</h3>
              <p className="text-slate-600">Reduce operational costs through optimized robot performance and predictive maintenance.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">Zero management overhead</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Real-Time Insights</h3>
              <p className="text-slate-600">Instant analysis and optimization ensure immediate improvements to robot performance.</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">30 second processing</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Scalable Solution</h3>
              <p className="text-slate-600">Scale instantly with lightweight processing for large-scale robotics deployments.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">Instant scaling</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Optimize Your Robotics Operations
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join robotics companies maximizing efficiency with AI-powered behavior analysis
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Robotics Analysis Demo
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Add this new component after HowWeWork
const ValueAddSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">NomadicML's Value Add</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Transform hours of coordination into results within seconds. Eliminate manual review bottlenecks.
          </p>
        </div>

        {/* Main Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Traditional Workflow */}
          <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Human Review</h3>
              <p className="text-red-600 font-medium">Manual Process</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Review Time:</span>
                  <span className="text-red-600 font-bold">2.5 hours</span>
                </div>
                <p className="text-sm text-gray-600">for 30 min video</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Cost Structure:</span>
                  <span className="text-red-600 font-bold">High</span>
                </div>
                <p className="text-sm text-gray-600">+ Project Management overhead</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Scalability:</span>
                  <span className="text-red-600 font-bold">Linear increase</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Management:</span>
                  <span className="text-red-600 font-bold">High overhead</span>
                </div>
              </div>
            </div>
          </div>

          {/* NomadicML Workflow */}
          <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">NomadicML AI-Powered</h3>
              <p className="text-green-600 font-medium">Automated Analysis</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Processing:</span>
                  <span className="text-green-600 font-bold">30 seconds</span>
                </div>
                <p className="text-sm text-gray-600">total processing time</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Cost Structure:</span>
                  <span className="text-green-600 font-bold">Minimal</span>
                </div>
                <p className="text-sm text-gray-600">Zero management overhead</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Scalability:</span>
                  <span className="text-green-600 font-bold">100 videos = 1 video</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Output:</span>
                  <span className="text-green-600 font-bold">Consistent every time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Savings Metrics */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Bottom Line Impact</h3>
            <p className="text-xl text-gray-600">Measurable improvements to your development workflow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">81%</div>
              <div className="text-gray-600 font-medium">Cost Savings</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">99.8%</div>
              <div className="text-gray-600 font-medium">Time Savings</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Management Overhead Eliminated</div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Perfect for Development Teams</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">✓ Rapid Prototyping & Iteration</h5>
                <p className="text-gray-600 text-sm">Test new detection algorithms instantly without waiting for human reviewers</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">✓ Large-Scale Processing</h5>
                <p className="text-gray-600 text-sm">Process entire datasets overnight with no bottlenecks from reviewer availability</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">✓ Focus on Core Development</h5>
                <p className="text-gray-600 text-sm">Zero time recruiting/managing reviewers. Engineering time stays on engineering.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">✓ Real-time Edge Case Discovery</h5>
                <p className="text-gray-600 text-sm">Intelligent search across all results. Chat-based exploration of findings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const VideoViewerDemo = () => {
  const [selectedDemo, setSelectedDemo] = React.useState(0)
  const [workflowStep, setWorkflowStep] = React.useState(0)

  const demos = [
    {
      id: 0,
      title: 'Track Key Objects',
      description: 'Automatically identify and track vehicles, pedestrians, and traffic signals with precision AI analysis.',
      prompt: 'Track all vehicles, pedestrians, and traffic signals in this intersection footage',
      category: 'Object Detection',
      video: '/images/object_tracking_10_15.mp4'
    },
    {
      id: 1,
      title: 'Intelligent Event Analysis',
      description: 'Complete workflow from event detection to contextual analysis and legal assessment.',
      prompt: 'Analyze driving behavior and determine if lane straddling is justified given road conditions',
      category: 'Smart Analysis',
      video: '/images/Snow_Straddling_Lane_30_35.mp4',
      isWorkflow: true,
      workflowSteps: [
        {
          step: 1,
          title: 'Detect Event',
          description: 'Straddling two lanes: The ego vehicle drove down the center of a narrow, unmarked road',
          icon: '🔍',
          color: 'blue'
        },
        {
          step: 2,
          title: 'Detect Driving Code',
          description: 'CVC Section: 21658 - Description: Unsafe lane straddling or failing to drive within a single marked lane.',
          icon: '📋',
          color: 'purple'
        },
        {
          step: 3,
          title: 'Understand Context',
          description: 'The ego vehicle (bus) drives slowly uphill on a narrow, snow-lined road',
          icon: '🧠',
          color: 'green'
        },
        {
          step: 4,
          title: 'Analyze Context',
          description: 'Its central position appears necessary due to parked cars and snow encroaching on the roadway',
          icon: '⚖️',
          color: 'orange'
        },
        {
          step: 5,
          title: 'Conclusion',
          description: 'Justified Behavior!',
          icon: '✅',
          color: 'emerald'
        }
      ]
    },
    {
      id: 2,
      title: 'Filter Driving Footage',
      description: 'Extract specific scenarios from datasets using natural language queries and AI-powered search.',
      prompt: 'Filter this footage to show only instances where vehicles exceed speed limits or make unsafe lane changes',
      category: 'Content Filtering',
      video: '/images/object_tracking_10_15.mp4'
    },
    {
      id: 3,
      title: 'Search Videos in Batch',
      description: 'Process multiple videos simultaneously to find specific events, patterns, or violations across large datasets.',
      prompt: 'Search across multiple video files to identify lane straddling, traffic violations, and driving patterns',
      category: 'Batch Processing',
      video: '/images/object_tracking_10_15.mp4',
      isBatchSearch: true,
      batchVideos: [
        {
          id: 1,
          name: 'highway_both_lanes_stationary',
          duration: '2:30',
          thumbnail: '/images/object_tracking.mp4',
          events: 0,
          status: 'processed'
        },
        {
          id: 2,
          name: 'Snow_Straddling_Lane',
          duration: '0:46',
          thumbnail: '/images/Snow_Straddling_Lane.mp4',
          events: 1,
          status: 'processing'
        },
        {
          id: 3,
          name: 'CityDrivingRoads-1',
          duration: '0:48',
          thumbnail: '/images/object_tracking.mp4',
          events: 0,
          status: 'queued'
        }
      ]
    },
    {
      id: 4,
      title: 'Find Key Objects',
      description: 'Locate specific objects, patterns, and anomalies using computer vision algorithms.',
      prompt: 'Find all instances of emergency vehicles, construction equipment, and road hazards',
      category: 'Pattern Recognition',
      video: '/images/object_tracking_10_15.mp4'
    }
  ]

  const currentDemo = demos[selectedDemo]

  React.useEffect(() => {
    if (currentDemo.isWorkflow) {
      const interval = setInterval(() => {
        setWorkflowStep((prev) => (prev + 1) % currentDemo.workflowSteps.length)
      }, 3000) // Change step every 3 seconds
      return () => clearInterval(interval)
    }
  }, [selectedDemo, currentDemo])

  const getStepColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      emerald: 'from-emerald-500 to-emerald-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Try Our <span className="text-sky-600">AI Video Analysis</span>
          </h2>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-600">
            Select any functionality below to see how NomadicML analyzes video content with AI
          </p>
        </div>

        {/* Demo Selection Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-8">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              onClick={() => {
                setSelectedDemo(index)
                setWorkflowStep(0)
              }}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedDemo === index ? 'scale-105' : ''
              }`}
            >
              <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                selectedDemo === index 
                  ? 'border-sky-400 ring-2 ring-sky-200 shadow-sky-200/50' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}>
                {/* Title */}
                <div className="text-center">
                  <h3 className={`font-semibold text-sm md:text-base mb-2 ${
                    selectedDemo === index ? 'text-sky-700' : 'text-slate-700'
                  }`}>
                    {demo.title}
                  </h3>
                  
                  {/* Category Badge */}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedDemo === index 
                      ? 'bg-sky-100 text-sky-700' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {demo.category}
                  </span>

                  {/* Active Indicator */}
                  {selectedDemo === index && (
                    <div className="mt-2">
                      <div className="inline-flex items-center text-sky-600 text-xs font-medium">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Active
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Demo Interface - Mobile Responsive */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-8 md:mb-12">
          {/* Demo Header */}
          <div className={`${currentDemo.isWorkflow 
            ? `bg-gradient-to-r ${getStepColor(currentDemo.workflowSteps?.[workflowStep]?.color || 'blue').replace('500', '400').replace('600', '500')}` 
            : 'bg-gradient-to-r from-sky-400 to-blue-500'
          } px-4 md:px-8 py-4 md:py-6 relative overflow-hidden`}>
            {/* Background Pattern for Better Contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3 md:space-x-4 flex-1">
                {/* Workflow Icon for Smart Analysis */}
                {currentDemo.isWorkflow && (
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-xl border-2 border-white/50">
                    <span className="filter drop-shadow-sm">{currentDemo.workflowSteps?.[workflowStep]?.icon}</span>
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                    {currentDemo.isWorkflow 
                      ? currentDemo.workflowSteps?.[workflowStep]?.title
                      : currentDemo.title
                    }
                  </h3>
                  <p className="text-white/95 text-sm md:text-base mt-1 drop-shadow-md font-medium">
                    {currentDemo.isWorkflow 
                      ? currentDemo.workflowSteps?.[workflowStep]?.description
                      : currentDemo.category
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {currentDemo.isWorkflow && (
                  <span className="text-xs bg-black/40 backdrop-blur-sm border border-white/30 px-3 py-2 rounded-full text-white font-bold whitespace-nowrap shadow-lg">
                    Step {workflowStep + 1} of {currentDemo.workflowSteps?.length}
                  </span>
                )}
                <div className="bg-black/40 backdrop-blur-sm border border-white/30 px-3 md:px-4 py-2 rounded-full shadow-lg">
                  <span className="text-white font-bold text-xs md:text-sm drop-shadow-sm">
                    {currentDemo.isWorkflow ? 'Smart Workflow' : 'NomadicML Demo'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar for Workflow */}
            {currentDemo.isWorkflow && (
              <div className="mt-4 relative z-10">
                <div className="w-full bg-black/30 backdrop-blur-sm rounded-full h-3 border border-white/20 shadow-inner">
                  <div 
                    className="bg-white h-3 rounded-full transition-all duration-300 shadow-lg"
                    style={{ width: `${((workflowStep + 1) / (currentDemo.workflowSteps?.length || 1)) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Video Demo Area - Mobile Responsive */}
          <div className="flex flex-col lg:flex-row">
            {/* Video Player */}
            <div className="flex-1 bg-slate-800 relative order-1 lg:order-1">
              <video 
                key={selectedDemo}
                autoPlay 
                loop 
                muted 
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                src={currentDemo.video}
              />
              
              {/* Minimal Processing Indicator */}
              <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 bg-black/75 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2">
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs md:text-sm">
                    {currentDemo.isWorkflow ? 'Analyzing' : 'Processing'}
                  </span>
                </div>
              </div>
              
              {/* Step Navigation for Workflow - Bottom Overlay */}
              {currentDemo.isWorkflow && (
                <div className="hidden md:block absolute bottom-6 left-6 right-80">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      {currentDemo.workflowSteps?.map((step, index) => (
                        <button
                          key={index}
                          onClick={() => setWorkflowStep(index)}
                          className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                            index === workflowStep 
                              ? 'bg-white/20 text-white' 
                              : 'text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <span className="text-lg">{step.icon}</span>
                          <span className="text-xs font-medium">{step.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Regular AI Analysis Overlay for other demos - Minimal */}
              {!currentDemo.isWorkflow && (
                <div className="absolute top-3 md:top-6 left-3 md:left-6 max-w-sm md:max-w-md bg-black/75 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg">
                  <div className="text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs md:text-sm font-medium">AI Analysis Active</span>
                    </div>
                    <div className="text-xs text-slate-300 mb-2">CURRENT PROMPT:</div>
                    <div className="text-xs md:text-sm line-clamp-3">{currentDemo.prompt}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Results Panel - Mobile Responsive */}
            <div className="w-full lg:w-80 bg-gradient-to-br from-slate-50 to-blue-50 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col order-2 lg:order-2 h-auto lg:h-[500px]">
              {/* Panel Header */}
              <div className="p-3 md:p-4 border-b border-slate-200 bg-white/50 backdrop-blur-sm">
                <h4 className="text-slate-700 font-bold flex items-center text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {currentDemo.isWorkflow ? 'Workflow Analysis' : 'Analysis Results'}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1">
                  {currentDemo.isWorkflow 
                    ? `Smart contextual analysis for ${currentDemo.title}` 
                    : `Real-time AI insights for ${currentDemo.title}`
                  }
                </p>
              </div>

              {/* Mobile Step Navigation for Workflow */}
              {currentDemo.isWorkflow && (
                <div className="block md:hidden p-3 border-b border-slate-200 bg-white/30">
                  <div className="flex overflow-x-auto gap-2">
                    {currentDemo.workflowSteps?.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => setWorkflowStep(index)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
                          index === workflowStep 
                            ? 'bg-sky-100 text-sky-700 border border-sky-300' 
                            : 'bg-white/60 text-slate-600 hover:bg-white/80 border border-slate-200'
                        }`}
                      >
                        <span className="text-sm">{step.icon}</span>
                        <span className="text-xs font-medium">{step.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Content - Same as before but with updated colors */}
              {currentDemo.isWorkflow ? (
                <div className="flex-1 overflow-y-auto">
                  <div className="p-3 border-b border-slate-200 bg-gradient-to-r from-sky-50 to-blue-50">
                    <h5 className="text-sm font-semibold text-slate-700 mb-2">Analysis Workflow</h5>
                  </div>
                  
                  <div className="space-y-3 p-3">
                    {currentDemo.workflowSteps?.map((step, index) => (
                      <div
                        key={index}
                        className={`rounded-lg p-3 border transition-all duration-300 ${
                          index === workflowStep 
                            ? 'bg-white/80 border-sky-300 ring-2 ring-sky-100 shadow-md' 
                            : index < workflowStep
                            ? 'bg-emerald-50/80 border-emerald-200'
                            : 'bg-slate-50/80 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                            index === workflowStep 
                              ? `bg-gradient-to-r ${getStepColor(step.color).replace('500', '400').replace('600', '500')} text-white` 
                              : index < workflowStep
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-300 text-slate-600'
                          }`}>
                            {index < workflowStep ? '✓' : step.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className={`font-medium text-sm truncate ${
                                index === workflowStep ? 'text-sky-700' : 'text-slate-700'
                              }`}>
                                {step.title}
                              </span>
                              {index === workflowStep && (
                                <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full ml-2 shrink-0">
                                  Active
                                </span>
                              )}
                              {index < workflowStep && (
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full ml-2 shrink-0">
                                  Complete
                                </span>
                              )}
                            </div>
                            <div className={`text-xs mt-1 ${
                              index === workflowStep ? 'text-slate-700' : 'text-slate-600'
                            }`}>
                              {step.description}
                            </div>
                          </div>
                        </div>
                        
                        {/* Special conclusion styling */}
                        {step.title === 'Conclusion' && index === workflowStep && (
                          <div className="mt-3 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl">✅</span>
                              <span className="font-bold text-emerald-700 text-base md:text-lg">Justified Behavior!</span>
                            </div>
                            <div className="text-xs text-emerald-600 mt-1">
                              AI analysis confirms the driving behavior was appropriate given the road conditions.
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Auto-Progress Indicator */}
                  <div className="p-3 border-t border-slate-200 bg-white/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Auto-Advancing</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-sky-600">Every 3s</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${getStepColor(currentDemo.workflowSteps?.[workflowStep]?.color || 'blue').replace('500', '400').replace('600', '500')} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${((workflowStep + 1) / (currentDemo.workflowSteps?.length || 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : currentDemo.isBatchSearch ? (
                <div className="flex-1 overflow-y-auto">
                  {/* Search Header */}
                  <div className="p-3 border-b border-slate-200 bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-semibold text-slate-700">Videos in Batch (3)</h5>
                      <select className="text-xs bg-white border border-slate-300 rounded px-2 py-1">
                        <option>Select video or event...</option>
                      </select>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">No events detected in the selected videos</p>
                  </div>
                  
                  {/* Video List */}
                  <div className="space-y-2 p-3">
                    {currentDemo.batchVideos?.map((video) => (
                      <div key={video.id} className="bg-white/80 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-center space-x-3 p-3">
                          {/* Video Thumbnail */}
                          <div className="relative w-16 h-12 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                            <video 
                              className="w-full h-full object-cover"
                              src={video.thumbnail}
                              muted
                              poster=""
                            />
                            <div className="absolute bottom-0 right-0 bg-black/75 text-white text-xs px-1 py-0.5 rounded-tl">
                              {video.duration}
                            </div>
                          </div>
                          
                          {/* Video Info */}
                          <div className="flex-1 min-w-0">
                            <h6 className="font-medium text-sm text-slate-700 truncate">{video.name}</h6>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-slate-600">{video.duration}</span>
                              <span className="text-xs text-slate-600">
                                {video.events} event{video.events !== 1 ? 's' : ''}
                              </span>
                            </div>
                          </div>
                          
                          {/* Status Indicator */}
                          <div className="flex-shrink-0">
                            {video.status === 'processed' && (
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-xs text-emerald-600 font-medium">Processed</span>
                              </div>
                            )}
                            {video.status === 'processing' && (
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-blue-600 font-medium">Processing</span>
                              </div>
                            )}
                            {video.status === 'queued' && (
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span className="text-xs text-amber-600 font-medium">Queued</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Event Detection Results for Snow_Straddling_Lane */}
                        {video.name === 'Snow_Straddling_Lane' && video.status === 'processing' && (
                          <div className="border-t border-slate-200 bg-gradient-to-r from-amber-50 to-orange-50 p-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">!</span>
                              </div>
                              <span className="text-sm font-medium text-amber-700">Lane Straddling Detected</span>
                            </div>
                            <p className="text-xs text-amber-600">
                              Vehicle detected driving in center of narrow road - analyzing context...
                            </p>
                            <div className="mt-2 w-full bg-amber-200 rounded-full h-1.5">
                              <div className="bg-amber-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Batch Processing Status */}
                  <div className="p-3 border-t border-slate-200 bg-white/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Batch Processing</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-blue-600">1 of 3 processing</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000" style={{ width: '66%' }}></div>
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Processing multiple videos simultaneously</div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Regular Results - Updated colors */}
                  <div className="p-3 md:p-4 border-b border-slate-200 bg-white/50">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-sky-600">98.{selectedDemo + 2}%</div>
                        <div className="text-xs text-slate-600">Confidence</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-emerald-600">{12 + selectedDemo * 3}</div>
                        <div className="text-xs text-slate-600">Objects Found</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <div className="p-3 border-b border-slate-200 bg-sky-50">
                      <h5 className="text-sm font-semibold text-slate-700 mb-2">Detected Events & Results</h5>
                    </div>
                    
                    <div className="space-y-2 p-3">
                      <div className="bg-white/80 rounded-lg p-3 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Analysis Complete</span>
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Ready</span>
                        </div>
                        <div className="text-xs text-slate-600 mb-2">Processing {currentDemo.category.toLowerCase()} analysis</div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-t border-slate-200 bg-white/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Processing Status</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-emerald-600">Active</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-sky-500 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Real-time analysis • 30 FPS</div>
                  </div>
                </>
              )}

              {/* Action Button */}
              <div className="p-3 md:p-4 border-t border-slate-200 bg-white/50">
                <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 text-sm shadow-md hover:shadow-lg">
                  {currentDemo.isWorkflow ? 'Export Workflow Report' : 'Export Analysis Report'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Mobile Responsive */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Ready to Analyze Your Videos?</h3>
          <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8">Get started with our full platform and explore advanced video analysis capabilities.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="border border-slate-300 hover:border-slate-400 bg-white/80 hover:bg-white text-slate-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              Try Live Demo →
            </a>
            <a 
              href="https://calendly.com/nomadic-ml/nomadicml-intro"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const appearId = element.getAttribute('data-framer-appear-id');
            
            if (appearId) {
              if (appearId.includes('fade') || appearId.includes('gallery') || appearId.includes('text')) {
                element.classList.add('framer-appear-fade');
              } else {
                element.classList.add('framer-appear');
              }
              
              observer.unobserve(element);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elementsToObserve = document.querySelectorAll('[data-framer-appear-id]');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/vla-annotations" element={<VLAAnnotationsPage />} />
        <Route path="/event-search" element={<EventSearchPage />} />
        <Route path="/semantic-reasoning" element={<SemanticReasoningPage />} />
        <Route path="/customized-chat" element={<CustomizedChatPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/sdk" element={<CodeSDKPage />} />
        <Route path="/driving" element={<DrivingPage />} />
        <Route path="/simulation" element={<AutonomousSimulationPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
      </Routes>
    </div>
  )
}

export default App
