import React from 'react';
import { Activity, Database, Banknote, Plane } from 'lucide-react';
import StatsChart from '../components/StatsChart';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <div className="bg-ifs-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-200">Comprehensive solutions for the healthcare sector.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        
        {/* Service 1: FM */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12 border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/3 bg-red-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-red-100">
              <Activity className="h-16 w-16 text-ifs-red mb-4" />
              <h2 className="text-2xl font-bold text-center text-ifs-red">Healthcare Facilities Management</h2>
            </div>
            <div className="md:w-2/3 p-8 lg:p-12">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Healthcare facilities management is vital for medical facilities and to ensure service requests are provided efficiently and quickly to maintain operations without intermission. 
              </p>
              <div className="bg-ifs-light rounded-lg p-6 border border-red-100">
                <h3 className="font-semibold text-gray-900 mb-2">Our Value Proposition</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Significant reduction of technical losses in hospitals.</li>
                  <li>Optimization of workforce and operational effort.</li>
                  <li>Efficient facility usage deepening patient-provider relationships.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2: Resourcing */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12 border border-gray-100">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/3 bg-blue-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l border-blue-100">
              <Database className="h-16 w-16 text-ifs-blue mb-4" />
              <h2 className="text-2xl font-bold text-center text-ifs-blue">Healthcare Resourcing</h2>
            </div>
            <div className="md:w-2/3 p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We help our clients and partners grow and thrive by providing accurate health data, analytics, and data-driven health solutions. We leverage Machine Learning and AI to build advanced analytical models.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our insights on suppliers, customers, and business partners are valuable at all phases of a business lifecycle.
                  </p>
                </div>
                <div className="w-full flex items-center justify-center">
                  <StatsChart />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3: Financing */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12 border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/3 bg-amber-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-amber-100">
              <Banknote className="h-16 w-16 text-amber-600 mb-4" />
              <h2 className="text-2xl font-bold text-center text-amber-800">Healthcare Financing</h2>
            </div>
            <div className="md:w-2/3 p-8 lg:p-12">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Universal Health Coverage (UHC) requires sustainable financing. IFS Healthcare's strategic approach focuses on three core pillars:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg text-center border-t-4 border-amber-500">
                  <span className="block text-2xl font-bold text-amber-500 mb-2">1</span>
                  <p className="text-sm font-medium">Strategic Health Fund Raising</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center border-t-4 border-amber-500">
                  <span className="block text-2xl font-bold text-amber-500 mb-2">2</span>
                  <p className="text-sm font-medium">Risk Pooling & Barrier Reduction</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center border-t-4 border-amber-500">
                  <span className="block text-2xl font-bold text-amber-500 mb-2">3</span>
                  <p className="text-sm font-medium">Efficient Resource Allocation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4: Diaspora */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12 border border-gray-100">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/3 bg-red-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l border-red-100">
              <Plane className="h-16 w-16 text-ifs-red mb-4" />
              <h2 className="text-2xl font-bold text-center text-ifs-red">Diaspora Skills Repatriation</h2>
            </div>
            <div className="md:w-2/3 p-8 lg:p-12">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Provision of specialist and super-specialist services in <strong className="text-ifs-red">Renal, Cardiac, and Orthopaedics</strong> utilizing modern treatment modalities including robotics.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg border border-red-100">
                <h4 className="font-bold text-ifs-red mb-3">The Group Practice Model</h4>
                <p className="text-gray-700 mb-4">
                  A rotation of 4 specialists ensures annual cover on a 3-monthly cycle, providing continuous high-end care.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-ifs-red rounded-full"></div> Skills transfer for better healthcare outcomes.</li>
                  <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-ifs-red rounded-full"></div> Stimulation of local healthcare demand.</li>
                  <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-ifs-red rounded-full"></div> Enhanced economic growth and private funding.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;