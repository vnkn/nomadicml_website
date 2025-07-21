import Head from 'next/head';

export default function InfrastructureDetails() {
  return (
    <>
      <Head>
        <title>Infrastructure Monitoring | NomadicML</title>
      </Head>
      <div className="py-20 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">Infrastructure Monitoring: In-Depth</h1>
          <p className="text-xl mb-8">
            Monitor and analyze critical infrastructure assets with advanced video analysis and real-time alerts.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img src="/images/curve_img_5.png" alt="Infrastructure Demo 1" className="rounded-xl shadow-lg" />
            <img src="/images/curve_img_6.png" alt="Infrastructure Demo 2" className="rounded-xl shadow-lg" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc ml-8 mb-8 text-lg text-gray-700">
            <li>24/7 monitoring with instant anomaly detection</li>
            <li>Automated maintenance and structural health alerts</li>
            <li>81% cost reduction in monitoring operations</li>
            <li>Customizable dashboards and reporting</li>
          </ul>
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="mb-8">
            <strong>Bridge & Road Monitoring:</strong> Detect cracks, wear, and safety issues.<br />
            <strong>Construction Sites:</strong> Ensure safety compliance and progress tracking.<br />
            <strong>Industrial Facilities:</strong> Prevent costly incidents and optimize maintenance.
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