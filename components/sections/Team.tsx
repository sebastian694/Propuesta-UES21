
import React from 'react';
import { User, Users, MessageCircle, ArrowRightLeft, Briefcase, UserCheck, CheckCircle2, ShieldAlert, RotateCw, BarChart3, Database, Fingerprint, ArrowDown, Palette } from 'lucide-react';
import { SectionProps } from '../../types';

export const Team: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-4 text-center">Equipo y Metodología</h2>
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-abn-accent mb-2">Equipo Dedicado</h3>
          <p className="text-slate-600">Un mismo equipo con múltiples soluciones, integrado con UES21.</p>
        </div>

        {/* TEAM DIAGRAM STRUCTURE */}
        <div className="mb-24 flex justify-center">
          
          <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-24">
            
            {/* LEFT SIDE: ABN FULL TEAM */}
            <div className="flex flex-col items-center">
              
              {/* 1. HEAD (Martina) */}
              <div className="mb-10 relative z-10 flex flex-col items-center">
                 <div className="flex items-center gap-4 bg-white p-4 pr-8 rounded-full border border-slate-200 shadow-lg relative z-20">
                    <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-abn-accent flex items-center justify-center shadow-inner">
                       <User size={32} className="text-white" />
                    </div>
                    <div>
                       <p className="font-bold text-sm text-abn-dark">Martina Abritta (COO)</p>
                       <p className="text-xs text-slate-500">Soporte Estratégico</p>
                    </div>
                 </div>
                 {/* Line Down to Core Team */}
                 <div className="h-12 w-0.5 bg-slate-300 absolute -bottom-12 left-1/2 -translate-x-1/2 -z-10"></div>
              </div>

              {/* 2. OPERATIONAL BLOCK (Core + Data) */}
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 bg-white/60 p-8 rounded-[3rem] border border-slate-100 shadow-sm relative">
                  
                  {/* CORE TEAM COLUMN */}
                  <div className="flex flex-col items-center relative">
                    
                    {/* Team Leader */}
                    <div className="flex flex-col items-center text-center w-40 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm z-10">
                      <div className="w-14 h-14 rounded-full bg-slate-50 border-2 border-abn-dark flex items-center justify-center mb-2">
                        <User size={24} className="text-abn-dark" />
                      </div>
                      <h4 className="font-bold text-sm text-abn-dark leading-tight min-h-[40px] flex items-center justify-center">Team Leader</h4>
                      <p className="text-abn-accent text-[10px] font-bold uppercase mt-1">Dedicación 50%</p>
                    </div>

                    {/* Arrow */}
                    <div className="my-2 text-slate-300">
                        <ArrowDown size={24} />
                    </div>

                    {/* Manager */}
                    <div className="flex flex-col items-center text-center w-40 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm z-10">
                      <div className="w-14 h-14 rounded-full bg-slate-50 border-2 border-abn-dark flex items-center justify-center mb-2">
                        <User size={24} className="text-abn-dark" />
                      </div>
                      <h4 className="font-bold text-sm text-abn-dark leading-tight min-h-[40px] flex items-center justify-center">Paid Media Manager</h4>
                      <p className="text-abn-accent text-[10px] font-bold uppercase mt-1">Dedicación 100%</p>
                    </div>

                    {/* Arrow */}
                    <div className="my-2 text-slate-300">
                        <ArrowDown size={24} />
                    </div>

                    {/* Analyst */}
                    <div className="flex flex-col items-center text-center w-40 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm z-10">
                      <div className="w-14 h-14 rounded-full bg-slate-50 border-2 border-abn-dark flex items-center justify-center mb-2">
                        <User size={24} className="text-abn-dark" />
                      </div>
                      <h4 className="font-bold text-sm text-abn-dark leading-tight min-h-[40px] flex items-center justify-center">Paid Media Analyst</h4>
                      <p className="text-abn-accent text-[10px] font-bold uppercase mt-1">Dedicación 100%</p>
                    </div>
                  </div>

                  {/* DATA SQUAD BOX */}
                  <div className="flex flex-col gap-2">
                    <div className="bg-slate-100 p-5 rounded-3xl border border-slate-200">
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Data & Tech Squad</h5>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border border-slate-100 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                            <User size={14} className="text-blue-600" />
                          </div>
                          <h4 className="font-bold text-xs text-abn-dark">Data Specialist</h4>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border border-slate-100 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                            <User size={14} className="text-purple-600" />
                          </div>
                          <h4 className="font-bold text-xs text-abn-dark">Reporting Specialist</h4>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border border-slate-100 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                            <User size={14} className="text-teal-600" />
                          </div>
                          <h4 className="font-bold text-xs text-abn-dark">Tracking Specialist</h4>
                        </div>
                        {/* New Optional Creative Specialist */}
                        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border border-slate-100 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center">
                            <Palette size={14} className="text-pink-600" />
                          </div>
                          <h4 className="font-bold text-xs text-abn-dark">Creative Specialist *</h4>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500 font-bold">Incluye 40 horas mensuales.</p>
                      <p className="text-[10px] text-slate-400 mt-1">* Opcional</p>
                    </div>
                  </div>

              </div>
            </div>

            {/* CENTER: CONNECTOR */}
            <div className="hidden xl:flex flex-col items-center justify-center text-slate-300 pt-20">
               <ArrowRightLeft size={48} className="text-abn-accent animate-pulse" />
               <span className="text-sm font-bold mt-2 text-abn-dark">Integración</span>
            </div>

            {/* RIGHT SIDE: UES21 */}
            <div className="flex flex-col gap-6 pt-10">
               
               <div className="flex items-center gap-4 bg-white p-4 pr-8 rounded-2xl shadow-sm border-l-4 border-abn-accent w-72 hover:-translate-y-1 transition-transform border-t border-r border-b border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <UserCheck size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-abn-dark">Interlocutor</h4>
                    <p className="text-slate-500 text-xs">Equipo UES21</p>
                  </div>
               </div>

               <div className="flex items-center gap-4 bg-white p-4 pr-8 rounded-2xl shadow-sm border-l-4 border-purple-500 w-72 hover:-translate-y-1 transition-transform border-t border-r border-b border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <Users size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-abn-dark">Creativos</h4>
                    <p className="text-slate-500 text-xs">Equipo UES21</p>
                  </div>
               </div>

               <div className="flex items-center gap-4 bg-white p-4 pr-8 rounded-2xl shadow-sm border-l-4 border-blue-500 w-72 hover:-translate-y-1 transition-transform border-t border-r border-b border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <Briefcase size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-abn-dark">Equipo McKinsey</h4>
                    <p className="text-slate-500 text-xs">Soporte Estratégico</p>
                  </div>
               </div>

            </div>
            
          </div>
        </div>

        {/* METHODOLOGY SECTION */}
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-abn-accent mb-2">Metodología</h3>
                <p className="text-slate-600 font-medium">Metodología Agile</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {/* Item 1 */}
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={24} />
                    </div>
                    <h4 className="font-bold text-abn-dark mb-2">Check Ins</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Sincronización constante para alinear prioridades y avance diario.</p>
                 </div>

                 {/* Item 2 */}
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                        <RotateCw size={24} />
                    </div>
                    <h4 className="font-bold text-abn-dark mb-2">Sprints & OKRs</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Trabajo por sprints definidos con objetivos claros y resultados medibles.</p>
                 </div>

                 {/* Item 3 */}
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">
                        <BarChart3 size={24} />
                    </div>
                    <h4 className="font-bold text-abn-dark mb-2">KPIs Semanales</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Reuniones de performance semanales para revisión profunda de métricas.</p>
                 </div>

                 {/* Item 4 */}
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center lg:translate-x-1/2 group">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                    </div>
                    <h4 className="font-bold text-abn-dark mb-2">Soporte Ágil</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Canales directos (Slack/WhatsApp) con tiempo de respuesta menor a 2 horas.</p>
                 </div>

                 {/* Item 5 */}
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center lg:translate-x-1/2 group">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 text-abn-accent group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                    <h4 className="font-bold text-abn-dark mb-2">Encuentros Presenciales</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Reuniones de trabajo presenciales para hitos clave y workshops.</p>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};
