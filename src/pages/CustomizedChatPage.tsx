import * as React from 'react'

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
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Customized Chat <span className="text-sky-600">& Comparisons</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Interact with your video data using natural language queries and powerful comparison tools for informed decision making.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Natural Language Interface</h3>
              <p className="text-slate-600">Ask questions in plain English and get instant, accurate answers about your video data.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Smart Comparisons</h3>
              <p className="text-slate-600">Compare performance across time periods, locations, and scenarios with intelligent analytics.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Interactive Exploration</h3>
              <p className="text-slate-600">Drill down into specific events, filter results dynamically, and export findings to reports.</p>
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
              Our conversational interface transforms complex video analysis into simple, natural interactions
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

      {/* Example Query Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Natural Language Query Example</h2>
            <p className="text-lg text-slate-600">See how easy it is to get insights from your video data</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">💬 Query Example</h4>
              <p className="text-blue-700 font-medium text-base leading-relaxed mb-4">
                "Show me all instances where vehicles crossed the center line in the last week"
              </p>
              <div className="text-sm text-blue-600">
                → Returns specific video clips, timestamps, locations, and frequency analysis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Capabilities Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Powerful Capabilities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Interactive Exploration</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-4"></div>
                  Drill down into specific events and timeframes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-4"></div>
                  Filter and sort results dynamically
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-4"></div>
                  Export findings to reports and dashboards
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Automated Insights</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  Generate comprehensive reports automatically
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  Set up alerts for important patterns
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  Schedule regular analysis summaries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Customized Chat & Comparisons?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Ease of Use</h3>
              <p className="text-slate-600">No technical expertise required - interact with complex data using simple conversational language.</p>
              <div className="mt-4 text-sm font-semibold text-green-600">Zero learning curve</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Instant Insights</h3>
              <p className="text-slate-600">Get immediate answers to complex questions without waiting for technical analysis.</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">Real-time responses</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Data-Driven Decisions</h3>
              <p className="text-slate-600">Make informed decisions with comprehensive comparisons and automated trend analysis.</p>
              <div className="mt-4 text-sm font-semibold text-purple-600">Smart analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Start Conversing with Your Data
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the power of natural language video analysis and intelligent comparisons
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://app.nomadicml.com/live-demo/examples"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Chat Demo
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

export default CustomizedChatPage 