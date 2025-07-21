import { useState } from 'react'
import * as React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import './App.css'

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="./" className="flex items-center">
          <img 
            src="https://framerusercontent.com/images/WhSBvyt8B4aqKNJoaKzpOhJJJo.png" 
            alt="NomadicML" 
            className="h-8"
          />
        </a>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 font-medium">
                How We Work
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[600px] p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">PROCESS</h3>
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <a href="#upload" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Upload Videos</div>
                          <div className="text-sm text-gray-600">All major formats supported</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#analysis" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">AI Analysis</div>
                          <div className="text-sm text-gray-600">Frame-by-frame detection</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#insights" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Get Insights</div>
                          <div className="text-sm text-gray-600">Actionable reports & alerts</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">CAPABILITIES</h3>
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <a href="#detection" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Object Detection</div>
                          <div className="text-sm text-gray-600">Advanced recognition</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#monitoring" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Real-time Monitoring</div>
                          <div className="text-sm text-gray-600">Live analysis & alerts</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                    <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                      <div className="font-medium text-cyan-900 mb-2">Try Our Demo</div>
                      <a href="https://app.nomadicml.com/live-demo/examples" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                        Explore Examples →
                      </a>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 font-medium">
                Platform
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[600px] p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">FEATURES</h3>
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <a href="#vla" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">VLA Annotations</div>
                          <div className="text-sm text-gray-600">Context-aware labeling</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#search" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Event Search</div>
                          <div className="text-sm text-gray-600">Lightning-fast discovery</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#reasoning" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Semantic Reasoning</div>
                          <div className="text-sm text-gray-600">Deep understanding</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#chat" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Custom Chat</div>
                          <div className="text-sm text-gray-600">Tailored interfaces</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">USE CASES</h3>
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <a href="#driving" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Driving Analysis</div>
                          <div className="text-sm text-gray-600">90%+ accuracy</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#infrastructure" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Infrastructure</div>
                          <div className="text-sm text-gray-600">81% cost reduction</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                      <div className="font-medium text-purple-900 mb-2">Platform Access</div>
                      <a href="https://app.nomadicml.com/" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Login to Platform →
                      </a>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 font-medium">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[500px] p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">DOCUMENTATION</h3>
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <a href="https://docs.nomadicml.com/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">API Documentation</div>
                          <div className="text-sm text-gray-600">Complete integration guide</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="https://docs.nomadicml.com/tutorials" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Tutorials</div>
                          <div className="text-sm text-gray-600">Step-by-step guides</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="https://docs.nomadicml.com/examples" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-gray-900">Code Examples</div>
                          <div className="text-sm text-gray-600">Ready-to-use snippets</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-900 mb-2">Need Help?</div>
                      <a href="mailto:support@nomadicml.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Contact Support →
                      </a>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 font-medium">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[400px] p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">ABOUT</h3>
                  <div className="space-y-3">
                    <NavigationMenuLink asChild>
                      <a href="#careers" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-gray-900">Careers</div>
                        <div className="text-sm text-gray-600">Join our team</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#contact" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-gray-900">Contact</div>
                        <div className="text-sm text-gray-600">Get in touch</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#privacy" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-gray-900">Privacy Policy</div>
                        <div className="text-sm text-gray-600">Data protection</div>
                      </a>
                    </NavigationMenuLink>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900 mb-2">Get Started</div>
                    <a href="https://calendly.com/nomadic-ml/nomadicml-intro" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                      Book a Call →
                    </a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://app.nomadicml.com/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Log In
          </a>
          <a 
            href="https://calendly.com/nomadic-ml/nomadicml-intro"
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20" style={{ background: 'var(--token-09f133ed-0d43-429a-a52e-79336c0fbca1)' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
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
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/60 backdrop-blur-sm p-1 rounded-lg">
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
            <div className="bg-gray-900 rounded-lg p-6 text-left shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">upload_video.py</span>
              </div>
              <pre className="text-green-400 text-sm font-mono mb-4">
{`# Upload Video
highway_road_video = 
client.video.upload('highway_road')`}
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

const HowWeWork = () => {
  return (
    <section id="howitworks" className="py-20 bg-white">
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
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="text-center" data-framer-appear-id="upload-section">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Videos</h3>
            <p className="text-gray-600">
              We support all major video formats and integrate with all cloud-based object storage services.
            </p>
          </div>
          
          <div className="text-center" data-framer-appear-id="analysis-section">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Analyze every frame, detect unique objects, and locate critical edge cases.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 
            className="text-3xl font-bold text-gray-900 mb-4"
            data-framer-appear-id="insights-title"
          >
            Obtain Insights
          </h3>
          <p 
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
            data-framer-appear-id="insights-subtitle"
          >
            Receive detailed reports, real-time alerts, and structured data that you can immediately act upon or integrate into your workflows.
          </p>
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
            data-framer-appear-id="insights-gallery"
          >
            <img 
              src="https://framerusercontent.com/images/leXwebmEyOqKNJoaKzpOhJJJo.png" 
              alt="Analysis Result 1"
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="https://framerusercontent.com/images/leXwebmEyOqKNJoaKzpOhJJJo.png" 
              alt="Analysis Result 2"
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="https://framerusercontent.com/images/leXwebmEyOqKNJoaKzpOhJJJo.png" 
              alt="Analysis Result 3"
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="https://framerusercontent.com/images/leXwebmEyOqKNJoaKzpOhJJJo.png" 
              alt="Analysis Result 4"
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
          <a 
            href="https://app.nomadicml.com/live-demo/examples"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            data-framer-appear-id="insights-cta"
          >
            Try Demo →
          </a>
        </div>
      </div>
    </section>
  )
}

const ImageGalleries = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mb-12">
        <div className="flex framer-scroll-left whitespace-nowrap" data-framer-appear-id="gallery-row-1">
          <img src="https://framerusercontent.com/images/Bc9W3gwPFlKNJoaKzpOhJJJo.png" alt="Gallery 1" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-1" />
          <img src="https://framerusercontent.com/images/I2h609YRjaKNJoaKzpOhJJJo.png" alt="Gallery 2" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-2" />
          <img src="https://framerusercontent.com/images/UCKsdpX6NcKNJoaKzpOhJJJo.png" alt="Gallery 3" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-3" />
          <img src="https://framerusercontent.com/images/MbPetnmV3LKNJoaKzpOhJJJo.png" alt="Gallery 4" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-4" />
          <img src="https://framerusercontent.com/images/kozRp3IY0WKNJoaKzpOhJJJo.png" alt="Gallery 5" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-5" />
          <img src="https://framerusercontent.com/images/Md6QYEVDm0KNJoaKzpOhJJJo.png" alt="Gallery 6" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-6" />
          <img src="https://framerusercontent.com/images/Bc9W3gwPFlKNJoaKzpOhJJJo.png" alt="Gallery 1" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
          <img src="https://framerusercontent.com/images/I2h609YRjaKNJoaKzpOhJJJo.png" alt="Gallery 2" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
          <img src="https://framerusercontent.com/images/UCKsdpX6NcKNJoaKzpOhJJJo.png" alt="Gallery 3" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
          <img src="https://framerusercontent.com/images/MbPetnmV3LKNJoaKzpOhJJJo.png" alt="Gallery 4" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
        </div>
      </div>
      <div>
        <div className="flex framer-scroll-right whitespace-nowrap" data-framer-appear-id="gallery-row-2">
          <img src="https://framerusercontent.com/images/UCKsdpX6NcKNJoaKzpOhJJJo.png" alt="Gallery 3" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-7" />
          <img src="https://framerusercontent.com/images/MbPetnmV3LKNJoaKzpOhJJJo.png" alt="Gallery 4" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-8" />
          <img src="https://framerusercontent.com/images/kozRp3IY0WKNJoaKzpOhJJJo.png" alt="Gallery 5" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-9" />
          <img src="https://framerusercontent.com/images/Md6QYEVDm0KNJoaKzpOhJJJo.png" alt="Gallery 6" className="h-32 w-auto mx-4 rounded-lg shadow-md" data-framer-appear-id="gallery-10" />
          <img src="https://framerusercontent.com/images/Bc9W3gwPFlKNJoaKzpOhJJJo.png" alt="Gallery 1" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
          <img src="https://framerusercontent.com/images/I2h609YRjaKNJoaKzpOhJJJo.png" alt="Gallery 2" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
          <img src="https://framerusercontent.com/images/UCKsdpX6NcKNJoaKzpOhJJJo.png" alt="Gallery 3" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
          <img src="https://framerusercontent.com/images/MbPetnmV3LKNJoaKzpOhJJJo.png" alt="Gallery 4" className="h-32 w-auto mx-4 rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  )
}

const ScrollingText = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden" data-framer-appear-id="scrolling-text-section">
      <div className="flex framer-scroll-text whitespace-nowrap" data-framer-appear-id="scrolling-text">
        <h1 className="text-4xl font-bold text-gray-900 mx-8">Search Videos • Analyze Videos • Try Our API</h1>
        <h1 className="text-4xl font-bold text-gray-900 mx-8">Search Videos • Analyze Videos • Try Our API</h1>
        <h1 className="text-4xl font-bold text-gray-900 mx-8">Search Videos • Analyze Videos • Try Our API</h1>
        <h1 className="text-4xl font-bold text-gray-900 mx-8">Search Videos • Analyze Videos • Try Our API</h1>
        <h1 className="text-4xl font-bold text-gray-900 mx-8">Search Videos • Analyze Videos • Try Our API</h1>
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
              src="https://framerusercontent.com/images/leXwebmEyOqKNJoaKzpOhJJJo.png" 
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

const Platform = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  
  const platformFeatures = [
    {
      title: "VLA Annotations",
      description: "Advanced visual language annotations that provide context-aware labeling for complex data structures.",
      icon: "🏷️"
    },
    {
      title: "Razor-Fast Event Search", 
      description: "Lightning-speed event discovery and filtering across massive datasets with real-time results.",
      icon: "⚡"
    },
    {
      title: "Deep Semantic Reasoning",
      description: "Intelligent understanding and analysis that goes beyond surface-level pattern matching.", 
      icon: "🧠"
    },
    {
      title: "Customized Chat and Comparisons",
      description: "Tailored conversational interfaces with powerful comparison tools for informed decision making.",
      icon: "💬"
    }
  ]
  
  const currentCards = [
    {
      category: "Detect Key Violations in Driving Footage",
      title: "90%+ Accuracy",
      description: "Identify traffic violations, unsafe driving behaviors, and compliance issues in real-time."
    },
    {
      category: "Infrastructure Monitoring", 
      title: "81% Cost Reduction",
      description: "Monitor infrastructure health, detect maintenance needs, and assess structural integrity through video analysis."
    },
    {
      category: "Label and Reason Over Objects",
      title: "Within Seconds", 
      description: "Advanced object detection and classification with contextual understanding and reasoning capabilities."
    }
  ]
  
  return (
    <section id="platform" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-8"
            data-framer-appear-id="platform-title"
          >
            NomadicML Platform
          </h2>
          
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="mb-8 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
            data-framer-appear-id="platform-toggle"
          >
            {showDropdown ? 'Show Summary' : 'View Platform Details'} 
            <span className="ml-2">{showDropdown ? '↑' : '↓'}</span>
          </button>
        </div>
        
        {showDropdown ? (
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg framer-appear" data-framer-appear-id="platform-details">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">PLATFORM</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100 framer-appear" data-framer-appear-id={`platform-feature-${index + 1}`}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8" data-framer-appear-id="platform-cards">
            {currentCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 framer-appear" data-framer-appear-id={`platform-card-${index + 1}`}>
                <div className="text-sm text-cyan-500 font-medium mb-2">{card.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        )}
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
              src="https://framerusercontent.com/images/PHAkmpTOAMqKNJoaKzpOhJJJo.png" 
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
      <Hero />
      <HowWeWork />
      <ImageGalleries />
      <ScrollingText />
      <TransformSection />
      <Platform />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
