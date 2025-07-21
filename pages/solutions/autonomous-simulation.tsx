import Head from 'next/head';

export default function SimulationDetails() {
  return (
    <>
      <Head>
        <title>Autonomous Vehicle Simulation | NomadicML</title>
      </Head>
      <div className="py-20 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">Autonomous Vehicle Simulation: In-Depth</h1>
          <p className="text-xl mb-8">
            Test and validate your autonomous systems in complex, real-world scenarios with our advanced simulation platform.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img src="/images/curve_img_3.png" alt="Simulation Demo 1" className="rounded-xl shadow-lg" />
            <img src="/images/curve_img_4.png" alt="Simulation Demo 2" className="rounded-xl shadow-lg" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc ml-8 mb-8 text-lg text-gray-700">
            <li>Edge case testing with thousands of scenarios</li>
            <li>Multi-sensor and multi-modal simulation</li>
            <li>Realistic environmental and traffic conditions</li>
            <li>Comprehensive reporting and analytics</li>
          </ul>
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="mb-8">
            <strong>AV Validation:</strong> Ensure safety and reliability before real-world deployment.<br />
            <strong>Scenario Generation:</strong> Test rare and dangerous situations safely.<br />
            <strong>Performance Benchmarking:</strong> Compare different AV systems and algorithms.
          </p>
          <div className="text-center">
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">
              Contact Us for a Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 