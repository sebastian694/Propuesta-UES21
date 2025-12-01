
import React, { useState } from 'react';
import { Award, Globe, Database, Zap, Layout, GraduationCap, Building2, Cpu, BarChart, Trophy, Rocket, LineChart, Megaphone, ScanFace, TrendingUp } from 'lucide-react';
import { SectionProps } from '../../types';
import { ABNSymbol, HikeSymbol, DetricsSymbol } from '../Logos';

export const Credentials: React.FC<SectionProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<'group' | 'digital' | 'education' | 'cases'>('group');

  const clients = [
    { name: 'Despegar' },
    { name: 'Assist Card' }, 
    { name: 'AstroPay' },
    { name: 'Banco Galicia' },
    { name: 'Unicomer' },
    { name: 'Sodimac' },
    { name: 'Laureate Education' },
    { name: 'Universidad Austral' },
  ];

  return (
    <section id={id} className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-4">Credenciales y Experiencia</h2>
          <div className="flex flex-wrap gap-4 mt-8 border-b border-slate-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('group')}
              className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'group' ? 'border-abn-accent text-abn-accent' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'digital' ? 'border-abn-accent text-abn-accent' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Expertise ABN Digital
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'education' ? 'border-abn-accent text-abn-accent' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Casos Educación
            </button>
             <button
              onClick={() => setActiveTab('cases')}
              className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'cases' ? 'border-abn-accent text-abn-accent' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Casos de Éxito
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          {/* TAB: GRUPO ABN & TRAYECTORIA */}
          {activeTab === 'group' && (
            <div className="animate-fadeIn space-y-16">
              
              {/* Sobre Nosotros - Group Companies */}
              <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-abn-dark/30 to-transparent skew-x-12 translate-x-32 pointer-events-none" />
                
                <div className="relative z-10 mb-10 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">Sobre Nosotros</h3>
                  <p className="text-slate-400">Un mismo equipo con múltiples soluciones</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                   {/* ABN Digital */}
                   <a href="https://abndigital.com.ar/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors backdrop-blur-sm group cursor-pointer">
                      <div className="mb-6 bg-abn-accent/10 w-24 h-24 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                        <ABNSymbol className="w-12 h-12 text-abn-accent" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 tracking-wide">ABN <span className="text-abn-accent">DIGITAL</span></h4>
                      <p className="text-sm text-slate-400">Digital Media & Analytics</p>
                   </a>
                   
                   {/* Hike */}
                   <a href="https://www.hikethecloud.com/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors backdrop-blur-sm group cursor-pointer">
                      <div className="mb-6 bg-purple-500/10 w-24 h-24 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                        <HikeSymbol className="w-12 h-12 text-purple-400" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 tracking-wide">hike <span className="text-purple-400">the cloud.</span></h4>
                      <p className="text-sm text-slate-400">AI, Data & Tech for Marketing</p>
                   </a>

                   {/* Detrics */}
                   <a href="https://detrics.io/es/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors backdrop-blur-sm group cursor-pointer">
                      <div className="mb-6 bg-blue-500/10 w-24 h-24 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                        <DetricsSymbol className="w-12 h-12 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 tracking-wide text-blue-400">Detrics</h4>
                      <p className="text-sm text-slate-400">Data Engineering</p>
                   </a>
                </div>
              </div>

              {/* Trayectoria */}
              <div>
                <h3 className="text-2xl font-bold text-abn-dark mb-10 text-center md:text-left">Trayectoria</h3>
                
                {/* Clients (Circular with Dark Theme) */}
                <div className="mb-16">
                  <h4 className="text-sm font-bold text-slate-400 uppercase mb-8 text-center tracking-widest">Confían en nosotros</h4>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {clients.map((client) => (
                      <div 
                        key={client.name} 
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full p-[3px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group bg-white border-2 border-slate-900"
                      >
                        <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                          <span 
                            className="font-bold text-xs md:text-sm text-center px-2 transition-colors text-slate-900"
                          >
                            {client.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantitative Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col justify-center">
                     <div className="text-3xl md:text-4xl font-bold text-abn-dark mb-1">+40</div>
                     <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Países</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col justify-center">
                     <div className="text-3xl md:text-4xl font-bold text-abn-dark mb-1">+15</div>
                     <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Industrias</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col justify-center">
                     <div className="text-3xl md:text-4xl font-bold text-abn-dark mb-1">+100M</div>
                     <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Inversión Gestionada</div>
                  </div>
                </div>

                {/* Badges Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col justify-center h-full">
                      <p className="text-abn-accent font-bold text-lg leading-tight">Media Partners</p>
                      <p className="text-xs text-slate-500 mt-1">Google, Meta & TikTok</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col justify-center h-full">
                      <p className="text-abn-accent font-bold text-lg leading-tight">GMP Partner</p>
                      <p className="text-xs text-slate-500 mt-1">Google Marketing Platform</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col justify-center h-full">
                      <p className="text-abn-accent font-bold text-lg leading-tight">Meridian Partner</p>
                      <p className="text-xs text-slate-500 mt-1">Advanced Measurement</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col justify-center h-full">
                      <p className="text-abn-accent font-bold text-lg leading-tight">#1 GPTW 2025</p>
                      <p className="text-xs text-slate-500 mt-1">Marketing & Publicidad</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col justify-center h-full">
                      <p className="text-abn-accent font-bold text-lg leading-tight">#1 Marketer</p>
                      <p className="text-xs text-slate-500 mt-1">Del Año</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col justify-center h-full">
                      <p className="text-abn-accent font-bold text-lg leading-tight">Partner Académico</p>
                      <p className="text-xs text-slate-500 mt-1">Universidad Austral</p>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: ABN DIGITAL EXPERTISE */}
          {activeTab === 'digital' && (
            <div className="animate-fadeIn space-y-12">
               
               <div className="max-w-4xl">
                 <h3 className="text-2xl font-bold text-abn-dark mb-4">ABN Digital</h3>
                 <p className="text-slate-600 leading-relaxed text-lg">
                   Unidad especializada en Digital Media & Analytics, responsable de liderar el performance, la tecnología aplicada a medios y la ingeniería de datos para grandes anunciantes de la región.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {/* Specialties */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-bold text-abn-accent mb-6 flex items-center gap-2">
                      <Award size={24} /> Especialidades Principales
                    </h4>
                    <div className="space-y-3">
                      {/* Item 1 */}
                      <div className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                         <div className="w-10 h-10 rounded-lg bg-teal-50 text-abn-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Megaphone size={20} />
                         </div>
                         <div>
                            <h5 className="font-bold text-slate-800 text-sm">Paid Media</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">Meta, Google, TikTok, Programmatic, Retail Media.</p>
                         </div>
                      </div>
                      {/* Item 2 */}
                      <div className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                         <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Database size={20} />
                         </div>
                         <div>
                            <h5 className="font-bold text-slate-800 text-sm">Data Engineering & Automation</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">Infraestructura de datos robusta.</p>
                         </div>
                      </div>
                      {/* Item 3 */}
                      <div className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                         <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <ScanFace size={20} />
                         </div>
                         <div>
                            <h5 className="font-bold text-slate-800 text-sm">App & Web Tracking</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">GTM, GA4, CM360, Firebase, MMPs.</p>
                         </div>
                      </div>
                      {/* Item 4 */}
                      <div className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                         <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <BarChart size={20} />
                         </div>
                         <div>
                            <h5 className="font-bold text-slate-800 text-sm">Reporting Real-time</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">Dashboards personalizados y alertas.</p>
                         </div>
                      </div>
                      {/* Item 5 */}
                      <div className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                         <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <TrendingUp size={20} />
                         </div>
                         <div>
                            <h5 className="font-bold text-slate-800 text-sm">Optimización Full-Funnel</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">Orientada a performance.</p>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-bold text-abn-accent mb-6 flex items-center gap-2">
                      <Cpu size={24} /> Herramientas Propias
                    </h4>
                    <div className="space-y-4">
                       <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-sm transition-shadow">
                          <strong className="text-purple-700 block text-sm mb-1">Detrics</strong>
                          <span className="text-xs text-slate-600">Data collector & ETL para unificar datos.</span>
                       </div>
                       <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-sm transition-shadow">
                          <strong className="text-purple-700 block text-sm mb-1">Lennie</strong>
                          <span className="text-xs text-slate-600">Monitoreo, performance y reporting con alertas.</span>
                       </div>
                       <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-sm transition-shadow">
                          <strong className="text-purple-700 block text-sm mb-1">Rel-AI</strong>
                          <span className="text-xs text-slate-600">Redistribución inteligente de presupuestos.</span>
                       </div>
                       <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-sm transition-shadow">
                          <strong className="text-purple-700 block text-sm mb-1">Budget Mutator</strong>
                          <span className="text-xs text-slate-600">Engine de control de inversión centralizado.</span>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Differentiators */}
               <div className="bg-abn-dark text-white p-8 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-abn-accent/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <h4 className="text-xl font-bold mb-6 relative z-10">Diferenciales ABN Digital</h4>
                 <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    <div>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                        <Award size={20} className="text-abn-accent" />
                      </div>
                      <h5 className="font-bold mb-2">Equipo Senior</h5>
                      <p className="text-sm text-slate-300">Talento certificado en GMP, Meta y TikTok.</p>
                    </div>
                    <div>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                        <Database size={20} className="text-abn-accent" />
                      </div>
                      <h5 className="font-bold mb-2">Medios + Data</h5>
                      <p className="text-sm text-slate-300">Integración total de tecnología y datos.</p>
                    </div>
                    <div>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                        <Building2 size={20} className="text-abn-accent" />
                      </div>
                      <h5 className="font-bold mb-2">Visión Regional</h5>
                      <p className="text-sm text-slate-300">Estructura escalable y flexible.</p>
                    </div>
                 </div>
               </div>
            </div>
          )}

          {/* TAB: EDUCATION CASES */}
          {activeTab === 'education' && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-abn-dark mb-4">Experiencia en Educación</h3>
                <p className="text-slate-600">Acompañamos a instituciones educativas líderes en su transformación digital y crecimiento de matrícula.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Universidad Austral', desc: 'Partner Académico & Estrategia Digital' },
                  { name: 'UPN', desc: 'Universidad Privada del Norte' },
                  { name: 'UTP', desc: 'Universidad Tecnológica del Perú' },
                  { name: 'Laureate', desc: 'Laureate International Universities' },
                  { name: 'UCIC', desc: 'Universidad Corporativa Intercorp' },
                  { name: 'IDAT', desc: 'Instituto Superior Tecnológico' },
                  { name: 'IPAE', desc: 'Escuela de Empresarios' },
                  { name: 'IAG', desc: 'Instituto Argentino de Gastronomía' },
                ].map((edu, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-abn-accent/10 transition-colors">
                      <GraduationCap size={32} className="text-slate-400 group-hover:text-abn-accent transition-colors" />
                    </div>
                    <h4 className="font-bold text-abn-dark text-lg mb-2">{edu.name}</h4>
                    <p className="text-sm text-slate-500">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: GENERAL CASES */}
          {activeTab === 'cases' && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-abn-dark mb-4">Resultados Comprobados</h3>
                <p className="text-slate-600">Casos de éxito en múltiples industrias.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-abn-accent shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Despegar</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">DV360</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✅ +40% Eficiencia en medios</li>
                    <li className="flex items-center gap-2">✅ 44MM Alcance incremental</li>
                    <li className="flex items-center gap-2">✅ $1.3M Ahorro en inventario</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Zinli</h4>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">App Growth</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✅ -55% Reducción de CAC</li>
                    <li className="flex items-center gap-2">✅ +83% CTR</li>
                    <li className="flex items-center gap-2">✅ +47% Conversion Rate</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Gollo</h4>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Retail</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✅ +10pp Audiencia interesada</li>
                    <li className="flex items-center gap-2">✅ Estrategia Omnicanal M27</li>
                    <li className="flex items-center gap-2">✅ Expansión de Revenue</li>
                  </ul>
                </div>
                 <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">Assist Card</h4>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Regional</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✅ Operación Regional Full Service</li>
                    <li className="flex items-center gap-2">✅ Equipos dedicados en AR/BR/MX</li>
                    <li className="flex items-center gap-2">✅ Creatividad + Performance</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-slate-500 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">CControl</h4>
                    <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Auditoría</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✅ Auditoría digital integral</li>
                    <li className="flex items-center gap-2">✅ Plan de acción estratégico</li>
                    <li className="flex items-center gap-2">✅ Diagnóstico Web & Paid</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">AstroPay</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Data</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✅ Dashboards Real-time</li>
                    <li className="flex items-center gap-2">✅ Redistribución auto de budget</li>
                    <li className="flex items-center gap-2">✅ Tracking avanzado</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
