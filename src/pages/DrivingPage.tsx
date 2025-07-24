import * as React from 'react'

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

export default DrivingPage 