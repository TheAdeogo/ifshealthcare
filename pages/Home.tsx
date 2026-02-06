import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Banknote, Globe, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-ifs-blue text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Diverse medical team in professional setting" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ifs-blue via-ifs-blue/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Optimizing Healthcare <br/>
              <span className="text-ifs-red">Through Intelligent Systems</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              IFS Healthcare Limited provides specialized services across Africa and the Middle East, focusing on sustainable profitable enterprise performance for private and public sector organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-ifs-blue bg-white hover:bg-gray-100 transition-all shadow-xl">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-all">
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-block px-3 py-1 bg-red-100 text-ifs-red text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                Our Foundation
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Bridging the Gap in Healthcare Finance</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We observed that lack of access to the right type of finance has been the strongest limiting factor to growth in the healthcare space in Sub-Saharan Africa. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our unique understanding of the business of healthcare across the whole value chain positions us to uniquely support the growth aspirations of leading healthcare institutions.
              </p>
              <Link to="/about" className="text-ifs-red font-bold text-lg hover:text-ifs-blue flex items-center group">
                Discover Our Vision
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-ifs-red/10 rounded-3xl -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1584515606963-35805a9992d5?auto=format&fit=crop&q=80&w=1200" 
                alt="African healthcare consultant reviewing data" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Pillars</h2>
            <div className="w-20 h-1.5 bg-ifs-red mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Delivering excellence through our outcome-driven healthcare facilities management and strategic support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 border border-red-100 group-hover:bg-ifs-red transition-colors">
                <Activity className="h-7 w-7 text-ifs-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Facilities Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Our 6-pillar framework ensures clinical uptime through integrated, safe, and compliant hospital operations.</p>
              <Link to="/services" className="text-ifs-red font-bold text-sm flex items-center group/link">
                View 6-Pillar Framework <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-ifs-blue transition-colors">
                <Users className="h-7 w-7 text-ifs-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Resourcing</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">AI-powered analytics and data-driven solutions to optimize talent and improve clinical outcomes.</p>
              <Link to="/services" className="text-ifs-red font-bold text-sm flex items-center group/link">
                Read more <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 transition-colors">
                <Banknote className="h-7 w-7 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Financing</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Strategic fund raising and risk pooling to achieve Universal Health Coverage goals in Africa.</p>
              <Link to="/services" className="text-ifs-red font-bold text-sm flex items-center group/link">
                Read more <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 transition-colors">
                <Globe className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diaspora Skills</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Repatriating specialist skills in Renal and Cardiac care via our sustainable group practice model.</p>
              <Link to="/services" className="text-ifs-red font-bold text-sm flex items-center group/link">
                Read more <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
            Our International Partners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
            
            {/* Louis Pasteur Logo Reconstructed */}
            <div className="flex items-center space-x-4 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-[#f57c00] flex items-center justify-center text-white font-black text-2xl relative overflow-hidden rounded-md shadow-sm">
                <span className="relative z-10">LP</span>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-black/10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-800 leading-tight">Louis Pasteur</span>
                <span className="text-xs font-semibold text-gray-500">Private Hospital</span>
              </div>
            </div>

            {/* XCBG Logo Reconstructed */}
            <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-2 border-[#d4af37] flex items-center justify-center rounded-sm">
                   <div className="w-8 h-8 border-2 border-[#d4af37] -mb-4 -mr-4 bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col">
                 <span className="text-xl font-black text-[#0d1b2a] tracking-tighter">XCBG</span>
                 <span className="text-[10px] font-bold text-[#0d1b2a] uppercase tracking-widest border-t border-gray-200 mt-0.5">International</span>
              </div>
            </div>

            {/* FIDSON Logo Reconstructed */}
            <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <div className="relative w-16 h-16 border-4 border-[#7cb342] p-1 rounded-sm">
                <div className="w-full h-full bg-[#311b92] flex items-center justify-center rounded-sm overflow-hidden">
                  <div className="flex space-x-0.5 transform -rotate-12">
                     <div className="w-1.5 h-6 bg-[#7cb342] rounded-full"></div>
                     <div className="w-1.5 h-8 bg-[#7cb342] rounded-full"></div>
                     <div className="w-1.5 h-6 bg-[#7cb342] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-[#311b92] tracking-wider">FIDSON</span>
                <span className="text-[10px] font-bold text-[#7cb342] uppercase tracking-[0.3em]">Healthcare Plc</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
