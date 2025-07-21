import * as React from "react"
import { ChevronDown, ChevronUp, BookOpen, FileText, Headphones, ArrowRight, Upload, Search, BarChart3, Eye, MessageSquare, Car, Building2, Code, HelpCircle, Users, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { FloatingLogos } from "./floating-logos"

interface DropdownItem {
  title: string
  description?: string
  author?: string
  href: string
  icon: React.ReactNode
}

interface DropdownSection {
  title: string
  items: DropdownItem[]
}

interface DelveDropdownProps {
  trigger: string
  sections: DropdownSection[]
  ctaSection?: {
    title: string
    description: string
    buttonText: string
    buttonHref: string
    progress?: {
      text: string
      progress: number
    }
    showFloatingLogos?: boolean
  }
  isOpen: boolean
  onToggle: () => void
}

const DelveDropdown = React.forwardRef<
  HTMLDivElement,
  DelveDropdownProps
>(({ trigger, sections, ctaSection, isOpen, onToggle }, ref) => {
  const handleItemClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Close the dropdown
    onToggle()
    
    // If it's an external link, redirect
    if (href.startsWith('http')) {
      window.open(href, '_blank')
    } else if (href.startsWith('/')) {
      // Handle React Router navigation for internal pages
      window.location.href = href
    } else if (href.startsWith('#')) {
      // Handle internal links with smooth scrolling
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors",
          isOpen && "bg-blue-50 text-blue-900"
        )}
      >
        {trigger}
        {isOpen ? (
          <ChevronUp className="h-4 w-4 transition-transform" />
        ) : (
          <ChevronDown className="h-4 w-4 transition-transform" />
        )}
      </button>

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 w-full bg-white shadow-xl border-b border-gray-200 overflow-hidden dropdown-enter z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex">
              {/* Left side - Menu items */}
              <div className="flex-1 p-6">
                <div className="grid grid-cols-2 gap-8">
                  {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        {section.title}
                      </h3>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <button
                            key={itemIndex}
                            onClick={(e) => handleItemClick(e, item.href)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group dropdown-item w-full text-left"
                          >
                            <div className="flex-shrink-0 mt-0.5 text-blue-600">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </div>
                              {item.description && (
                                <div className="text-sm text-gray-600 mt-1">
                                  {item.description}
                                </div>
                              )}
                              {item.author && (
                                <div className="text-sm text-gray-500 mt-1">
                                  {item.author}
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - CTA section */}
              {ctaSection && (
                <div className="w-80 bg-blue-50 p-6 relative overflow-hidden">
                  {/* Floating logos background */}
                  {ctaSection.showFloatingLogos && (
                    <div className="absolute inset-0 opacity-10">
                      <FloatingLogos />
                    </div>
                  )}

                  {/* Progress card */}
                  {ctaSection.progress && (
                    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                      <div className="font-medium text-gray-900 mb-2">
                        {ctaSection.progress.text}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-300 progress-bar"
                          style={{ 
                            width: `${ctaSection.progress.progress}%`,
                            '--progress-width': `${ctaSection.progress.progress}%`
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  )}

                  {/* CTA content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {ctaSection.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {ctaSection.description}
                    </p>
                    <button
                      onClick={(e) => handleItemClick(e, ctaSection.buttonHref)}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      {ctaSection.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

DelveDropdown.displayName = "DelveDropdown"

// Predefined icons for common use cases
const DropdownIcons = {
  book: <BookOpen className="h-5 w-5" />,
  document: <FileText className="h-5 w-5" />,
  podcast: <Headphones className="h-5 w-5" />,
  upload: <Upload className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  analytics: <BarChart3 className="h-5 w-5" />,
  detection: <Eye className="h-5 w-5" />,
  chat: <MessageSquare className="h-5 w-5" />,
  driving: <Car className="h-5 w-5" />,
  infrastructure: <Building2 className="h-5 w-5" />,
  code: <Code className="h-5 w-5" />,
  help: <HelpCircle className="h-5 w-5" />,
  team: <Users className="h-5 w-5" />,
  security: <Shield className="h-5 w-5" />,
}

export { DelveDropdown, DropdownIcons } 