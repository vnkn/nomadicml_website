import * as React from 'react'

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

export default SemanticReasoningPage 