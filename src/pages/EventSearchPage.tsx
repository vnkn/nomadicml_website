import * as React from 'react'

const EventSearchPage = () => {
  const [activeFeature, setActiveFeature] = React.useState(0)

  const features: Array<{
    id: number;
    title: string;
    icon: string;
    color: 'blue' | 'purple' | 'emerald';
    description: string;
    details: string;
    benefits: string[];
  }> = [
    {
      id: 0,
      title: 'Smart Indexing',
      icon: '📚',
      color: 'blue' as const,
      description: 'Automatically catalog video content with semantic understanding for intelligent search capabilities.',
      details: 'Our proprietary indexing technology creates semantic maps of video content, enabling lightning-fast searches across massive datasets with contextual understanding. Advanced AI algorithms analyze visual patterns, objects, behaviors, and contexts to create comprehensive search indexes.',
      benefits: [
        'Semantic content mapping',
        'Real-time indexing',
        'Scalable architecture',
        'Context-aware categorization'
      ]
    },
    {
      id: 1,
      title: 'Natural Language Search',
      icon: '🔍',
      color: 'purple' as const,
      description: 'Search using plain English queries that understand context, intent, and meaning.',
      details: 'Ask questions in natural language like "Show me vehicles making unsafe lane changes during rain" and get precise results with semantic understanding of intent. Our NLP engine processes complex queries and translates them into precise video search parameters.',
      benefits: [
        'Conversational queries',
        'Intent recognition',
        'Context understanding',
        'Multi-language support'
      ]
    },
    {
      id: 2,
      title: 'Sub-Second Results',
      icon: '⚡',
      color: 'emerald' as const,
      description: 'Get instant results across massive video datasets with our proprietary search technology.',
      details: 'Experience lightning-fast search performance with results delivered in under 1 second, even when searching through millions of hours of indexed content. Our optimized search algorithms and distributed processing ensure consistent performance at scale.',
      benefits: [
        '< 1 second response time',
        'Unlimited dataset size',
        'Distributed processing',
        'Real-time updates'
      ]
    }
  ]

  const getFeatureColorClasses = (color: 'blue' | 'purple' | 'emerald', isActive: boolean) => {
    const baseClasses = {
      blue: {
        bg: isActive ? 'bg-blue-100' : 'bg-blue-50',
        border: isActive ? 'border-blue-300' : 'border-blue-200',
        text: 'text-blue-600',
        icon: 'bg-blue-100'
      },
      purple: {
        bg: isActive ? 'bg-purple-100' : 'bg-purple-50',
        border: isActive ? 'border-purple-300' : 'border-purple-200',
        text: 'text-purple-600',
        icon: 'bg-purple-100'
      },
      emerald: {
        bg: isActive ? 'bg-emerald-100' : 'bg-emerald-50',
        border: isActive ? 'border-emerald-300' : 'border-emerald-200',
        text: 'text-emerald-600',
        icon: 'bg-emerald-100'
      }
    }
    return baseClasses[color]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Razor-Fast <span className="text-sky-600">Event Search</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Search through thousands of hours of video footage in seconds, not hours. Find exactly what you need, when you need it.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="mb-16">
            {/* Feature Tab Navigation */}
            <div className="flex flex-col md:flex-row justify-center mb-8 space-y-2 md:space-y-0 md:space-x-4">
              {features.map((feature, index) => {
                const colors = getFeatureColorClasses(feature.color, activeFeature === index)
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
                      activeFeature === index 
                        ? `${colors.bg} ${colors.border} shadow-lg` 
                        : `bg-white border-slate-200 hover:${colors.bg} hover:${colors.border}`
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className={`font-semibold ${activeFeature === index ? colors.text : 'text-slate-700'}`}>
                        {feature.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Active Feature Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${getFeatureColorClasses(features[activeFeature].color, true).icon} rounded-lg flex items-center justify-center mr-4`}>
                      <span className="text-2xl">{features[activeFeature].icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{features[activeFeature].title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {features[activeFeature].details}
                  </p>
                  <div className="text-sm text-slate-500">
                    <strong>Key Features:</strong>
                  </div>
                  <ul className="mt-2 space-y-2">
                    {features[activeFeature].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <div className={`w-2 h-2 ${getFeatureColorClasses(features[activeFeature].color, true).text.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${getFeatureColorClasses(features[activeFeature].color, true).bg} rounded-xl p-6 border ${getFeatureColorClasses(features[activeFeature].color, true).border}`}>
                  <div className="text-center">
                    <div className={`w-20 h-20 ${getFeatureColorClasses(features[activeFeature].color, true).icon} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-4xl">{features[activeFeature].icon}</span>
                    </div>
                    <h4 className={`text-lg font-semibold ${getFeatureColorClasses(features[activeFeature].color, true).text} mb-2`}>
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Performance Metrics</h2>
            <p className="text-lg text-slate-600">Industry-leading search performance with real-world results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">99.9%</div>
              <div className="text-slate-700 font-medium">Search Accuracy</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">&lt;1s</div>
              <div className="text-slate-700 font-medium">Average Response Time</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-slate-700 font-medium">Hours Indexed</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-700 font-medium">Real-time Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Razor-Fast Event Search?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Time Savings</h3>
              <p className="text-slate-600">Reduce search time from hours to seconds, dramatically improving operational efficiency.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">99.9% time reduction</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Precision Results</h3>
              <p className="text-slate-600">Find exactly what you're looking for with intelligent semantic understanding and context awareness.</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">99.9% accuracy</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Scalable Performance</h3>
              <p className="text-slate-600">Handle massive video libraries with consistent performance regardless of dataset size.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">Unlimited scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Experience Lightning-Fast Search
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            See how our event search can transform your video analysis workflow
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Search Demo
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

export default EventSearchPage 