import React from 'react';
import { 
  Activity, 
  Database, 
  Banknote, 
  Plane, 
  Wrench, 
  Droplets, 
  ShieldCheck, 
  UserCheck, 
  LayoutDashboard, 
  FileCheck,
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';
import StatsChart from '../components/StatsChart';

const ServiceCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
    <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-ifs-red transition-colors duration-300">
      <Icon className="h-7 w-7 text-ifs-red group-hover:text-white transition-colors" />
    </div>
    <h3 className="font-extrabold text-gray-900 mb-4 text-xl leading-tight group-hover:text-ifs-blue transition-colors">{title}</h3>
    <ul className="space-y-3 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-gray-600 flex items-start leading-relaxed">
          <span className="text-ifs-red mr-2 font-black" aria-hidden="true">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-24">
      {/* Header Section */}
      <div className="bg-ifs-blue text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-ifs-red rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-ifs-red/20 text-red-200 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6 border border-red-500/30">
            Strategic Solutions
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed font-light">
            Articulating a stronger, clearer Facilities Management offering tailored specifically for complex healthcare environments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        {/* Core Section: Healthcare Facilities Management */}
        <section className="bg-white rounded-[3rem] shadow-2xl overflow-hidden mb-20 border border-gray-100">
          <div className="p-8 lg:p-20">
            <div className="flex flex-col lg:flex-row lg:items-start gap-16 mb-20">
              <div className="lg:w-3/5">
                <h2 className="text-3xl md:text-5xl font-black text-ifs-blue mb-8 leading-tight">
                  Healthcare Facilities <br className="hidden md:block"/> Management (FM)
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Our FM offering for hospitals is designed to support <strong>safe, compliant, and uninterrupted clinical operations</strong>, while allowing healthcare providers to focus fully on patient care.
                  </p>
                  <p>
                    Drawing from global best practices in healthcare facilities management, our services are structured around integrated, outcome-driven solutions rather than standalone support functions.
                  </p>
                </div>
              </div>
              <div className="lg:w-2/5">
                <div className="bg-gradient-to-br from-ifs-blue to-blue-900 p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden group border border-white/10">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-ifs-red opacity-20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                  <h4 className="text-ifs-red font-black mb-6 flex items-center gap-3 text-xl tracking-tight">
                     <Activity size={28} /> The Strategic Partner
                  </h4>
                  <p className="text-blue-100 leading-relaxed font-light text-lg">
                    We integrate people, processes, and technology to deliver reliable, cost-effective, and scalable solutions across healthcare facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* The 6-Pillar Framework Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={Wrench}
                title="Hard FM & Engineering Services"
                items={[
                  "Planned and reactive maintenance of critical assets",
                  "MEP systems and medical gas systems",
                  "HVAC, power systems, and infrastructure",
                  "Dedicated support for clinical uptime"
                ]}
              />
              <ServiceCard 
                icon={Droplets}
                title="Soft FM Services"
                items={[
                  "Cleaning and infection-control services",
                  "Clinical and general waste management",
                  "Portering and laundry coordination",
                  "Hygiene aligned with hospital standards"
                ]}
              />
              <ServiceCard 
                icon={ShieldCheck}
                title="Asset & Lifecycle Management"
                items={[
                  "Equipment uptime management",
                  "Strategic lifecycle planning",
                  "Condition-based maintenance",
                  "Operational cost optimisation"
                ]}
              />
              <ServiceCard 
                icon={ClipboardCheck}
                title="Compliance, HSE & Risk"
                items={[
                  "Regulatory compliance management",
                  "Health and safety audits",
                  "Continuous improvement protocols",
                  "Alignment with global healthcare standards"
                ]}
              />
              <ServiceCard 
                icon={UserCheck}
                title="Patient & Staff Experience"
                items={[
                  "Front-of-house support services",
                  "Helpdesk operations",
                  "Service coordination",
                  "Enhancing the overall care environment"
                ]}
              />
              <ServiceCard 
                icon={LayoutDashboard}
                title="Digital & Performance"
                items={[
                  "Implementation of CMMS systems",
                  "Real-time reporting dashboards",
                  "KPI-driven transparency",
                  "Analytics to drive service excellence"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Other Specialized Services */}
        <div className="space-y-16">
          {/* Resourcing Section */}
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <Database className="h-10 w-10 text-ifs-blue" />
                  </div>
                  <h2 className="text-3xl font-black text-ifs-blue">Healthcare Resourcing</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Leveraging Machine Learning and AI to build advanced analytical models. We provide accurate health data and analytics-driven solutions to optimize clinical outcomes across the organization.
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-3 bg-ifs-blue text-white rounded-xl font-bold text-sm shadow-lg hover:bg-ifs-red transition-colors cursor-pointer flex items-center gap-2 group">
                    View Analytics Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <StatsChart />
              </div>
            </div>
          </div>

          {/* Financing & Diaspora Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Financing */}
            <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-xl border border-gray-100">
               <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-amber-50 rounded-2xl">
                    <Banknote className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-black text-ifs-blue">Healthcare Financing</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Focusing on sustainable financing to achieve Universal Health Coverage (UHC) goals across Sub-Saharan Africa.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {['Strategic Fund Raising', 'Risk Pooling', 'Efficient Resource Allocation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-amber-50/50 rounded-xl border border-amber-100">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-bold text-amber-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diaspora */}
            <div className="bg-ifs-blue p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden text-white">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-ifs-red opacity-10 rounded-full"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-black">Skills Repatriation</h2>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed relative z-10">
                Utilizing modern treatment modalities including robotics in <strong className="text-white">Renal, Cardiac, and Orthopaedics</strong> through our Group Practice Model.
              </p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative z-10">
                <h4 className="font-bold mb-2">Sustainable Coverage</h4>
                <p className="text-sm text-blue-200">Our 4-specialist rotation ensures continuous annual cover on a 3-monthly cycle.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-20 text-center bg-white p-12 rounded-[2rem] shadow-lg border border-gray-100">
          <h3 className="text-2xl font-black text-ifs-blue mb-4">Ready to align our framework with your priorities?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We would be pleased to further align this service framework with your specific operational priorities and clinical requirements.</p>
          <div className="flex justify-center">
             <button className="px-10 py-4 bg-ifs-red text-white font-black rounded-xl hover:bg-red-800 transition-all shadow-xl hover:-translate-y-1">
               Speak with a Strategic Partner
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
