import React from 'react';
import { UserPlus, GraduationCap, FileText, CheckCircle2, ShieldAlert, Zap, Clock, Monitor, Users, FileCheck } from 'lucide-react';
import { SectionProps } from '../../types';

export const InHouseTransition: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-4">¿Qué incluye la Transición In-House?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 text-lg leading-relaxed mb-2">
              Un proceso estructurado para garantizar que el conocimiento de ABN se convierta en una capacidad instalada y autónoma en UES21.
            </p>
            <p className="text-abn-accent font-medium text-sm italic">
              * En caso de requerir mayor capacitación, se cotizará según demanda.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Recruitment Support */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UserPlus size={32} />
            </div>
            <h3 className="text-xl font-bold text-abn-dark mb-4">Soporte en Reclutamiento</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Acompañamos a RRHH en la selección del talento técnico ideal para el equipo de UES21.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-abn-accent mt-0.5" />
                <span>Definición de perfiles técnicos (JDs).</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-abn-accent mt-0.5" />
                <span>Entrevistas técnicas especializadas (hasta 10 entrevistas).</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-abn-accent mt-0.5" />
                <span>Evaluación de casos prácticos (hasta 10 casos prácticos).</span>
              </li>
            </ul>
          </div>

          {/* Ad-Hoc Training */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-teal-100 text-abn-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold text-abn-dark mb-4">Capacitación Ad-Hoc</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Entrenamiento intensivo (<strong>hasta 5 trainings</strong>) para hasta 4 profesionales en los <strong>principales medios digitales*</strong>.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Google Ads', 'Meta Ads', 'TikTok Ads', 'DV360', 'LinkedIn Ads', 'Dashboards'].map((tool) => (
                <span key={tool} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500">
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 italic">Sesiones teóricas, prácticas y hands-on sobre las cuentas reales.</p>
          </div>

          {/* Documentation */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-bold text-abn-dark mb-4">Documentación de Procesos</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              El manual de vuelo para que la operación no dependa de personas, sino de procesos documentados.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-abn-accent mt-0.5" />
                <span>Manuales operativos de plataformas.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-abn-accent mt-0.5" />
                <span>Metodología de reporting y optimización.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-abn-accent mt-0.5" />
                <span>Protocolos de arquitectura de tracking.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Transition Considerations Section (Moved below cards) */}
        <div className="mb-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
          <h3 className="text-xl font-bold text-abn-dark mb-8 flex items-center gap-2">
            <Clock className="text-abn-accent" size={24} />
            Consideraciones de Transición
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Tiempo de Traspaso</p>
                  <p className="text-sm font-bold text-slate-700">5 meses (Outside a In-house)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent">
                  <Monitor size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Modalidad</p>
                  <p className="text-sm font-bold text-slate-700">100% Virtual</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Training Program</p>
                  <p className="text-sm font-bold text-slate-700">5 sesiones (~2hs c/u)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Capacidad</p>
                  <p className="text-sm font-bold text-slate-700">Hasta 4 profesionales</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent">
                  <UserPlus size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Reclutamiento</p>
                  <p className="text-sm font-bold text-slate-700">Hasta 10 entrevistas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent">
                  <FileCheck size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Evaluación</p>
                  <p className="text-sm font-bold text-slate-700">Hasta 10 casos prácticos</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent">
                  <Zap size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Costo por Capacitación</p>
                  <p className="text-sm font-bold text-slate-700">ARS 1.5M</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-abn-accent flex-shrink-0">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Contenido</p>
                  <p className="text-[10px] font-bold text-slate-600 leading-tight">Módulos Intro/Avanzados (Estrategia, Imp, Opt)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flexibility/Contingency Card */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-abn-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
               <div className="w-20 h-20 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center">
                  <ShieldAlert size={40} className="text-orange-500" />
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Flexibilidad Ante el Cambio</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Entendemos que los planes pueden mutar. En caso de que <strong className="text-white">UES21</strong> decida no realizar la transición in-house total o desee mantener parte de nuestro servicio de forma permanente:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                 <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <Zap size={18} className="text-abn-accent mt-1 flex-shrink-0" />
                    <p className="text-xs text-slate-300">ABN puede continuar como partner de ejecución "Always On" indefinidamente.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <Zap size={18} className="text-abn-accent mt-1 flex-shrink-0" />
                    <p className="text-xs text-slate-300">Podemos re-estructurar el fee para mantener solo el soporte estratégico o de data.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
