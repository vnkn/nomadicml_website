import { useState, useEffect } from 'react'
import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { DelveDropdown, DropdownIcons } from '@/components/ui/delve-dropdown'
import { useDropdown } from '@/hooks/useDropdown'
import { ArrowRight } from 'lucide-react'
import './App.css'
import { Upload, FileText, Building2 } from 'lucide-react'

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
    <>
      <Hero />
      <HowWeWork />
      <ValueAddSection />
      <SolutionsSections />
      <PlatformSections />
      <TransformSection />
      <CallToAction />
      <Footer />
    </>
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
            <div className="bg-gray-900 rounded-lg p-6 text-left shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">NomadicML API</span>
              </div>
              <pre className="text-green-400 text-sm font-mono mb-4">
{`import requests

# Scale with our API
api_url = "https://api.nomadicml.com/v1"
headers = {"Authorization": "Bearer your_token"}

# Process multiple videos
for video_id in video_batch:
    response = requests.post(
        f"{api_url}/analyze",
        json={"video_id": video_id},
        headers=headers
    )
    results = response.json()`}
              </pre>
              <div className="mt-4">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  className="w-full h-48 object-cover rounded"
                  src="/i1DNpPLzeuJPVTJrRWJMsAYmwDg.mp4"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

const UploadSection = () => {
  return (
    <section id="upload-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            data-framer-appear-id="upload-title"
          >
            Upload Your Videos
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-framer-appear-id="upload-subtitle"
          >
            We support all major video formats and integrate with all cloud-based object storage services. 
            Get started with your video analysis in just a few clicks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg" data-framer-appear-id="upload-feature-1">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Drag & Drop</h3>
            <p className="text-gray-600">
              Simply drag and drop your video files directly into our platform. 
              No complex setup required.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg" data-framer-appear-id="upload-feature-2">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">All Formats</h3>
            <p className="text-gray-600">
              Support for MP4, MOV, AVI, MKV, and all major video formats. 
              No conversion needed.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg" data-framer-appear-id="upload-feature-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Storage</h3>
            <p className="text-gray-600">
              Integrate with AWS S3, Google Cloud Storage, Azure Blob, 
              and other cloud storage providers.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://app.nomadicml.com/upload"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Start Uploading
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

const AIAnalysisSection = () => {
  return (
    <section id="ai-analysis-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Analysis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Frame-by-frame detection and analysis powered by advanced artificial intelligence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Video Processing</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our AI analysis engine processes every frame of your video content with state-of-the-art 
              computer vision algorithms. This comprehensive approach ensures that no detail is missed, 
              from object detection to behavioral pattern recognition.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              The system can identify complex interactions, track multiple objects simultaneously, and 
              analyze temporal patterns across extended video sequences. This depth of analysis is 
              essential for applications requiring high accuracy and reliability.
            </p>
            <div className="flex gap-4 mb-8">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                90%+ Accuracy
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                Real-time Monitoring
              </div>
            </div>
            <a 
              href="/solutions/driving"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/curve_image_1.png" 
              alt="Driving Demo 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="/images/curve_image_2.png" 
              alt="Driving Demo 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const InsightsSection = () => {
  return (
    <section id="insights-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Actionable reports and alerts that transform raw video data into meaningful business intelligence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/curve_img_5.png" 
                alt="Insights Demo 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/images/curve_img_6.png" 
                alt="Insights Demo 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data-Driven Decisions</h3>
            <p className="text-lg text-gray-600 mb-6">
              Transform your video analysis into actionable insights with comprehensive reporting and 
              alerting systems. Our platform generates detailed reports that highlight key findings, 
              trends, and anomalies in your video data.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Set up custom alerts for specific events or conditions, and receive real-time notifications 
              when important patterns are detected. This proactive approach helps you respond quickly to 
              safety incidents, operational issues, or performance opportunities.
            </p>
            <div className="flex gap-4">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-medium">
                Custom Reports
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium">
                Real-time Alerts
              </div>
            </div>
          </div>
        </div>
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
              style={{ animationDelay: '0ms' }}
            />
            <img 
              src="/images/curve_image_2.png" 
              alt="Analysis Result 2"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ animationDelay: '100ms' }}
            />
            <img 
              src="/images/curve_img_3.png" 
              alt="Analysis Result 3"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ animationDelay: '200ms' }}
            />
            <img 
              src="/images/curve_img_4.png" 
              alt="Analysis Result 4"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ animationDelay: '300ms' }}
            />
            <img 
              src="/images/curve_img_5.png" 
              alt="Analysis Result 5"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ animationDelay: '400ms' }}
            />
            <img 
              src="/images/curve_img_6.png" 
              alt="Analysis Result 6"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border-2 border-blue-100"
              style={{ animationDelay: '500ms' }}
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
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Solutions</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            AI-powered video analysis solutions for automotive and robotics applications.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Automotive Analysis */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Automotive Analysis</h3>
                <p className="text-blue-600 font-medium text-lg">Motion Footage & Vehicle Behavior</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Advanced analysis of automotive motion footage including traffic patterns, vehicle behavior analysis, 
              and safety monitoring. Transform hours of coordination into results within seconds with edge-case detection 
              and comprehensive classification across vehicle categories.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-800">81%</div>
                <div className="text-sm text-green-700">Cost Savings</div>
              </div>
              <div className="bg-blue-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-800">99.8%</div>
                <div className="text-sm text-blue-700">Time Savings</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Key Capabilities:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Rapid Review & Chat with motion footage</li>
                <li>• Edge-case detection for vehicle behavior</li>
                <li>• Concurrent processing up to 25 videos</li>
                <li>• Object/Lane tracking and classification</li>
              </ul>
            </div>
            <div className="flex gap-4 mb-6">
              <img src="/images/curve_image_1.png" alt="Automotive Demo" className="w-20 h-20 object-cover rounded-xl shadow-md" />
              <img src="/images/curve_image_2.png" alt="Automotive Demo 2" className="w-20 h-20 object-cover rounded-xl shadow-md" />
            </div>
            <Link 
              to="/driving"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
            >
              Explore Automotive Solutions <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Autonomous Vehicle Simulation */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">AV Simulation Testing</h3>
                <p className="text-purple-600 font-medium text-lg">Autonomous Vehicle Validation</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Advanced simulation analysis for autonomous vehicle testing and validation. Analyze thousands of 
              edge cases in automotive scenarios, vehicle-to-vehicle interactions, and complex driving conditions 
              with 30-second processing time instead of hours of manual review.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-800">1000+</div>
                <div className="text-sm text-purple-700">Edge Cases</div>
              </div>
              <div className="bg-orange-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-orange-800">30sec</div>
                <div className="text-sm text-orange-700">Processing</div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-purple-900 mb-2">Perfect For:</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Autonomous vehicle edge case discovery</li>
                <li>• Multi-vehicle interaction analysis</li>
                <li>• Rapid simulation testing cycles</li>
                <li>• Vehicle behavior validation</li>
              </ul>
            </div>
            <div className="flex gap-4 mb-6">
              <img src="/images/curve_img_3.png" alt="Simulation Demo" className="w-20 h-20 object-cover rounded-xl shadow-md" />
              <img src="/images/curve_img_4.png" alt="Simulation Demo 2" className="w-20 h-20 object-cover rounded-xl shadow-md" />
            </div>
            <Link 
              to="/simulation"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors"
            >
              Explore AV Simulation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Infrastructure Defect Detection */}
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H3.862a2 2 0 01-1.995-1.858L1 7m18 0l-2-4H5L3 7m16 0H3m2.5 0h9l-.5-2M9 11v6M11 11v6" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Infrastructure Defect Detection</h3>
                <p className="text-teal-600 font-medium text-lg">Automated Defect Identification</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Identify key infrastructural defects in roads, bridges, and automotive infrastructure through 
              automated video analysis. Eliminate manual inspection bottlenecks and achieve 81% cost savings 
              while ensuring consistent defect detection across large-scale infrastructure projects.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-teal-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-800">81%</div>
                <div className="text-sm text-teal-700">Cost Reduction</div>
              </div>
              <div className="bg-indigo-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-indigo-800">100%</div>
                <div className="text-sm text-indigo-700">Mgmt Overhead</div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-teal-900 mb-2">Key Applications:</h4>
              <ul className="text-sm text-teal-800 space-y-1">
                <li>• Road surface defect identification</li>
                <li>• Bridge structure analysis</li>
                <li>• Automotive infrastructure monitoring</li>
                <li>• Large-scale infrastructure assessment</li>
              </ul>
            </div>
            <div className="flex gap-4 mb-6">
              <img src="/images/curve_img_5.png" alt="Infrastructure Demo" className="w-20 h-20 object-cover rounded-xl shadow-md" />
              <img src="/images/curve_img_6.png" alt="Infrastructure Demo 2" className="w-20 h-20 object-cover rounded-xl shadow-md" />
            </div>
            <Link 
              to="/infrastructure"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors"
            >
              Explore Infrastructure Solutions <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Robotics Analysis */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Robotics Analysis</h3>
                <p className="text-pink-600 font-medium text-lg">Behavior & Performance Optimization</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Comprehensive robot behavior analysis and performance optimization. Eliminate manual review bottlenecks 
              for robotics testing and deployment. Scale instantly with lightweight processing for immediate insights 
              and consistent output every time.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-pink-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-pink-800">100%</div>
                <div className="text-sm text-pink-700">Mgmt Overhead</div>
              </div>
              <div className="bg-yellow-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-800">30sec</div>
                <div className="text-sm text-yellow-700">Processing</div>
              </div>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-pink-900 mb-2">Perfect For:</h4>
              <ul className="text-sm text-pink-800 space-y-1">
                <li>• Rapid prototyping & iteration testing</li>
                <li>• Large-scale video processing workflows</li>
                <li>• Real-time edge case discovery</li>
                <li>• Zero management overhead scaling</li>
              </ul>
            </div>
            <div className="flex gap-4 mb-6">
              <img src="/images/curve_image_1.png" alt="Robotics Demo" className="w-20 h-20 object-cover rounded-xl shadow-md" />
              <img src="/images/curve_image_2.png" alt="Robotics Demo 2" className="w-20 h-20 object-cover rounded-xl shadow-md" />
            </div>
            <Link 
              to="/robotics"
              className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-lg transition-colors"
            >
              Explore Robotics Solutions <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
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
  return (
    <div className="min-h-screen" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      {/* Hero Section */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h1 className="text-7xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
              <span style={{ color: 'var(--token-cyan-primary)' }}>VLA</span> Annotations
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Advanced visual language annotations that provide context-aware labeling for complex data structures, enabling more accurate and meaningful analysis of video data.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--token-text-primary)' }}>Real-time Processing</h3>
                </div>
                <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Process thousands of frames per second with contextual understanding</p>
              </div>
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--token-text-primary)' }}>Multi-modal Analysis</h3>
                </div>
                <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Combines visual, spatial, and temporal data for complete understanding</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_image_1.png" alt="VLA Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_image_2.png" alt="VLA Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>How VLA Annotations Work</h2>
            <p className="text-2xl" style={{ color: 'var(--token-text-secondary)' }}>
              Our system goes beyond simple object detection to understand context, relationships, and meaning in your video data.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <span className="text-3xl font-bold" style={{ color: 'var(--token-cyan-primary)' }}>1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Analyze Context</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Understand spatial relationships and temporal dynamics between objects in the scene</p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <span className="text-3xl font-bold" style={{ color: 'var(--token-cyan-primary)' }}>2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Generate Labels</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Create meaningful, context-aware annotations that capture complex interactions</p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <span className="text-3xl font-bold" style={{ color: 'var(--token-cyan-primary)' }}>3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Deliver Insights</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Provide actionable intelligence for autonomous systems and safety applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Ready to Get <span style={{ color: 'var(--token-cyan-primary)' }}>Started?</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Experience the power of VLA Annotations with a personalized demo tailored to your use case.
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
            Schedule a Demo
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

const EventSearchPage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      {/* Hero Section */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h1 className="text-7xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
              <span style={{ color: 'var(--token-cyan-primary)' }}>Razor-Fast</span> Event Search
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Search through thousands of hours of video footage in seconds, not hours. Find exactly what you need, when you need it.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_img_3.png" alt="Search Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_img_4.png" alt="Search Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>⚡ Sub-second Results</h3>
                <p className="text-xl" style={{ color: 'var(--token-text-secondary)' }}>Get instant results across massive video datasets with our proprietary indexing technology.</p>
              </div>
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>🎯 Semantic Understanding</h3>
                <p className="text-xl" style={{ color: 'var(--token-text-secondary)' }}>Search using natural language queries that understand context and meaning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-5xl font-bold mb-4" style={{ color: 'var(--token-cyan-primary)' }}>99.9%</div>
              <div className="text-xl font-medium" style={{ color: 'var(--token-text-primary)' }}>Search Accuracy</div>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-5xl font-bold mb-4" style={{ color: 'var(--token-cyan-primary)' }}>&lt;1s</div>
              <div className="text-xl font-medium" style={{ color: 'var(--token-text-primary)' }}>Average Response Time</div>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-5xl font-bold mb-4" style={{ color: 'var(--token-cyan-primary)' }}>1M+</div>
              <div className="text-xl font-medium" style={{ color: 'var(--token-text-primary)' }}>Hours Indexed</div>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-5xl font-bold mb-4" style={{ color: 'var(--token-cyan-primary)' }}>24/7</div>
              <div className="text-xl font-medium" style={{ color: 'var(--token-text-primary)' }}>Real-time Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Experience <span style={{ color: 'var(--token-cyan-primary)' }}>Lightning-Fast Search</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            See how our event search can transform your video analysis workflow.
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
            Try It Now
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

const SemanticReasoningPage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      {/* Hero Section */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h1 className="text-7xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
              <span style={{ color: 'var(--token-cyan-primary)' }}>Deep Semantic</span> Reasoning
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Go beyond pattern recognition to truly understand the meaning and context behind what's happening in your videos.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>🧠 Intent Recognition</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>Understand not just what is happening, but why it's happening and what might happen next.</p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-blue-700 font-medium text-lg">Example: "Vehicle approaching intersection appears to be preparing to turn left based on speed reduction and positioning"</p>
                </div>
              </div>
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>📊 Predictive Analysis</h3>
                <p className="text-xl" style={{ color: 'var(--token-text-secondary)' }}>Anticipate outcomes and identify potential issues before they occur.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_img_5.png" alt="Reasoning Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_img_6.png" alt="Reasoning Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Real-World Applications</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Safety Analysis</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Predict and prevent incidents before they occur by understanding behavioral patterns and risk factors.</p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Quality Control</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Understand complex manufacturing processes and identify quality issues with contextual awareness.</p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Behavioral Studies</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Analyze human and robotic interactions with deep understanding of intentions and outcomes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Unlock <span style={{ color: 'var(--token-cyan-primary)' }}>Deeper Understanding</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Discover how semantic reasoning can revolutionize your video analysis capabilities.
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
            Explore Capabilities
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

const CustomizedChatPage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      {/* Hero Section */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
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
      </div>

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
              <span style={{ color: 'var(--token-cyan-primary)' }}>Driving</span> Solutions
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Advanced traffic analysis, safety monitoring, and compliance tracking for automotive applications with 90%+ accuracy.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Traffic Violation Detection</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Automatically identify traffic violations, unsafe driving behaviors, and compliance issues in real-time.
                </p>
                <div className="bg-green-100 rounded-xl p-4">
                  <p className="text-green-800 font-semibold">90%+ Accuracy • Real-time Processing</p>
                </div>
              </div>
              
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Fleet Safety Monitoring</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Monitor fleet operations, driver behavior, and vehicle performance to improve safety standards.
                </p>
                <div className="bg-blue-100 rounded-xl p-4">
                  <p className="text-blue-800 font-semibold">24/7 Monitoring • Instant Alerts</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_image_1.png" alt="Driving Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_image_2.png" alt="Driving Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Key Use Cases</h2>
            <p className="text-2xl" style={{ color: 'var(--token-text-secondary)' }}>Real-world applications delivering measurable results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Speed Monitoring</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Detect speeding violations and aggressive driving patterns automatically.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Lane Departure</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Monitor lane discipline and detect unsafe lane changes or departures.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}>
                <svg className="w-10 h-10" style={{ color: 'var(--token-cyan-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--token-text-primary)' }}>Intersection Safety</h3>
              <p className="text-lg" style={{ color: 'var(--token-text-secondary)' }}>Analyze intersection behavior and red light violations for safety improvements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Transform Your <span style={{ color: 'var(--token-cyan-primary)' }}>Traffic Analysis</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Join transportation agencies improving safety with AI-powered insights.
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
            Schedule Demo
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

const AutonomousSimulationPage = () => {
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
              <span style={{ color: 'var(--token-cyan-primary)' }}>Autonomous Vehicle</span> Simulation
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Advanced simulation environments for testing and validating autonomous systems with comprehensive edge case coverage.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_img_3.png" alt="Simulation Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_img_4.png" alt="Simulation Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Edge Case Testing</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Test your autonomous systems against thousands of edge cases and challenging conditions before real-world deployment.
                </p>
                <div className="bg-purple-100 rounded-xl p-4">
                  <p className="text-purple-800 font-semibold">Comprehensive Coverage • Multi-Sensor Support</p>
                </div>
              </div>
              
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Validation Platform</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Validate AI systems in complex, real-world scenarios with detailed performance metrics and analysis.
                </p>
                <div className="bg-orange-100 rounded-xl p-4">
                  <p className="text-orange-800 font-semibold">Real-world Scenarios • Performance Metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Accelerate <span style={{ color: 'var(--token-cyan-primary)' }}>AV Development</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Reduce development time and improve safety outcomes with comprehensive simulation testing.
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
            Schedule Demo
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

const InfrastructurePage = () => {
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
              <span style={{ color: 'var(--token-cyan-primary)' }}>Infrastructure</span> Monitoring
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Advanced monitoring and analysis of critical infrastructure and construction projects with 81% cost reduction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>24/7 Asset Protection</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Monitor critical infrastructure assets with advanced video analysis that detects maintenance needs and security threats.
                </p>
                <div className="bg-indigo-100 rounded-xl p-4">
                  <p className="text-indigo-800 font-semibold">81% Cost Reduction • 24/7 Monitoring</p>
                </div>
              </div>
              
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Predictive Maintenance</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Identify structural issues and maintenance needs before they become costly problems.
                </p>
                <div className="bg-teal-100 rounded-xl p-4">
                  <p className="text-teal-800 font-semibold">Preventive Detection • Cost Savings</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_img_5.png" alt="Infrastructure Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_img_6.png" alt="Infrastructure Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Protect Your <span style={{ color: 'var(--token-cyan-primary)' }}>Critical Assets</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Join infrastructure managers reducing costs while improving safety outcomes.
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
            Schedule Demo
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

const RoboticsPage = () => {
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
              <span style={{ color: 'var(--token-cyan-primary)' }}>Robotics</span> Solutions
            </h1>
            <p 
              className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--token-text-secondary)' }}
            >
              Robot behavior analysis and performance optimization in various environments for maximum productivity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/curve_image_1.png" alt="Robotics Demo 1" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
              <img src="/images/curve_image_2.png" alt="Robotics Demo 2" className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Performance Optimization</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Analyze and optimize robot behavior across various environments and applications for maximum efficiency.
                </p>
                <div className="bg-pink-100 rounded-xl p-4">
                  <p className="text-pink-800 font-semibold">Behavior Analysis • Performance Tracking</p>
                </div>
              </div>
              
              <div className="bg-white/80 rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--token-text-primary)' }}>Predictive Maintenance</h3>
                <p className="text-xl mb-6" style={{ color: 'var(--token-text-secondary)' }}>
                  Detect anomalies and predict maintenance needs to ensure safe operation in dynamic environments.
                </p>
                <div className="bg-yellow-100 rounded-xl p-4">
                  <p className="text-yellow-800 font-semibold">Anomaly Detection • Maintenance Prediction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--token-text-primary)' }}>
            Optimize Your <span style={{ color: 'var(--token-cyan-primary)' }}>Robotics Operations</span>
          </h2>
          <p className="text-2xl mb-12" style={{ color: 'var(--token-text-secondary)' }}>
            Join robotics companies maximizing efficiency with AI-powered behavior analysis.
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
            Schedule Demo
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
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
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
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
