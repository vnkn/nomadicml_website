import Head from 'next/head';

export default function RoboticsDetails() {
  return (
    <>
      <Head>
        <title>Robotics Solutions | NomadicML</title>
      </Head>
      <div className="py-20 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">Robotics Solutions: In-Depth</h1>
          <p className="text-xl mb-8">
            Analyze and optimize robot behavior and performance across diverse environments and applications.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img src="/images/curve_image_1.png" alt="Robotics Demo 1" className="rounded-xl shadow-lg" />
            <img src="/images/curve_image_2.png" alt="Robotics Demo 2" className="rounded-xl shadow-lg" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc ml-8 mb-8 text-lg text-gray-700">
            <li>Behavior analysis and performance tracking</li>
            <li>Anomaly detection and predictive maintenance</li>
            <li>Workflow optimization for manufacturing and logistics</li>
            <li>Customizable analytics and reporting</li>
          </ul>
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="mb-8">
            <strong>Manufacturing:</strong> Optimize robot efficiency and safety.<br />
            <strong>Logistics:</strong> Improve warehouse automation and throughput.<br />
            <strong>Service Robots:</strong> Enhance performance in dynamic environments.
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