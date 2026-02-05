import React from 'react';
import { Target, Lightbulb, Heart, ShieldCheck, Clock, Briefcase } from 'lucide-react';

const TeamMember = ({ name, role, img }: { name: string; role: string; img: string }) => (
  <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-ifs-red/10 group">
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-ifs-red rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 opacity-20"></div>
      <img src={img} alt={name} className="w-36 h-36 rounded-full object-cover relative z-10 border-4 border-white shadow-lg" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{name}</h3>
    <p className="text-ifs-red text-sm font-bold text-center uppercase tracking-wider">{role}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-ifs-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Medical Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">Pioneering Excellence</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            IFS Healthcare Limited is a health sector focused organization dedicated to specialized services that empower sustainable growth across the global healthcare landscape.
          </p>
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-50 p-10 rounded-3xl border-l-8 border-ifs-red shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <Target className="h-8 w-8 text-ifs-red" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To enable sustainable profitable enterprise performance through the whole life management of physical assets and productive workplace and provision of effective business support services.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-3xl border-l-8 border-ifs-blue shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <Lightbulb className="h-8 w-8 text-ifs-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become the largest facilities management, project management and business support organisation in Nigeria, Africa and the Middle East.
            </p>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="mb-24">
          <div className="bg-ifs-blue text-white rounded-[2rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
             <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-80 h-80 bg-ifs-red opacity-10 rounded-full"></div>
             <div className="absolute top-0 left-0 -mt-10 -ml-10 w-40 h-40 bg-white/5 rounded-full"></div>
             <h2 className="text-4xl font-bold mb-8 relative z-10">Intelligent Systems Strategy</h2>
             <p className="text-xl leading-relaxed relative z-10 text-blue-100 max-w-4xl font-light">
               As professionals in the field of facilities management, we have embraced a methodology of building an intelligent system that optimizes people, process, assets and the work environment to support delivery of our clients’ business objectives.
             </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-ifs-red mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:bg-ifs-red group-hover:-translate-y-2 shadow-sm">
                <Heart className="h-10 w-10 text-ifs-red group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Service</h3>
              <p className="text-gray-500 font-medium">Commitment to community.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:bg-ifs-blue group-hover:-translate-y-2 shadow-sm">
                <Briefcase className="h-10 w-10 text-ifs-blue group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-500 font-medium">Unrivaled professionalism.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:bg-amber-600 group-hover:-translate-y-2 shadow-sm">
                <ShieldCheck className="h-10 w-10 text-amber-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-500 font-medium">Entrepreneurial spirit.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:bg-purple-600 group-hover:-translate-y-2 shadow-sm">
                <Clock className="h-10 w-10 text-purple-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Legacy</h3>
              <p className="text-gray-500 font-medium">Timeless enduring value.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Leadership Team</h2>
          <div className="w-20 h-1 bg-ifs-red mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <TeamMember 
              name="Dr. Tunde Ayeye" 
              role="Group Managing Director" 
              img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="Bukola Makinde" 
              role="Lead Consultant" 
              img="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="Mary Ikechukwu" 
              role="Marketing Officer" 
              img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="Prof. Yemi Laosebikan" 
              role="Clinical Innovations" 
              img="https://images.unsplash.com/photo-1622253692010-337936a19240?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="Dr. Dale Ogunbayo" 
              role="Medical Director" 
              img="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;