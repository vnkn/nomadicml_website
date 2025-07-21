import Head from 'next/head';

export default function DrivingDetails() {
  return (
    <>
      <Head>
        <title>Driving Solutions | NomadicML</title>
      </Head>
      <div className="py-20 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">Driving Solutions: In-Depth</h1>
          <p className="text-xl mb-8">
            Our platform enables advanced traffic analysis, real-time safety monitoring, and compliance tracking for fleets and autonomous vehicles.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img src="/images/curve_image_1.png" alt="Demo 1" className="rounded-xl shadow-lg" />
            <img src="/images/curve_image_2.png" alt="Demo 2" className="rounded-xl shadow-lg" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc ml-8 mb-8 text-lg text-gray-700">
            <li>Real-time violation detection with 90%+ accuracy</li>
            <li>Driver behavior analytics and risk scoring</li>
            <li>Automated compliance reporting</li>
            <li>Integration with telematics and dashcams</li>
          </ul>
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="mb-8">
            <strong>Fleet Safety:</strong> Monitor and improve driver safety across large fleets.<br />
            <strong>Autonomous Testing:</strong> Validate AV systems in real-world and simulated environments.<br />
            <strong>Insurance:</strong> Provide evidence and analytics for claims and risk assessment.
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