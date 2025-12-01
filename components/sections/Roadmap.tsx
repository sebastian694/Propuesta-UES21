
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { SectionProps } from '../../types';

export const Roadmap: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        {/* Roadmap */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-12 text-center">Roadmap</h2>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Phase 1 */}
            <div className="bg-slate-100 p-6 rounded-2xl shadow-sm border-t-4 border-slate-400 hover:shadow-lg transition-all h-full">
              <span className="inline-block bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Diciembre</span>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Fase 1: Diagnóstico y Setup</h3>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li>• Kick OFF & Accesos</li>
                <li>• Auditoría profunda de estrategia</li>
                 <li>• Auditoría profunda de tracking</li>
                <li>• Integración de Data</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-teal-50 p-6 rounded-2xl shadow-sm border-t-4 border-abn-accent hover:shadow-lg transition-all h-full">
              <span className="inline-block bg-white text-abn-accent text-xs font-bold px-3 py-1 rounded-full mb-4 border border-abn-accent/20">Enero - Marzo</span>
              <h3 className="text-lg font-bold text-teal-900 mb-3">Fase 2: Performance & Quick Wins</h3>
              <ul className="space-y-2 text-sm text-teal-800">
                <li>• Activación y Mejora de campañas</li>
                <li>• A/B Testings</li>
                <li>• TikTok piloto</li>
                <li>• Implementación automatizaciones</li>
              </ul>
            </div>

             {/* Phase 3 */}
             <div className="bg-yellow-50 p-6 rounded-2xl shadow-sm border-t-4 border-yellow-400 hover:shadow-lg transition-all h-full">
               <span className="inline-block bg-white text-yellow-700 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-yellow-200">Marzo</span>
               <h3 className="text-lg font-bold text-yellow-900 mb-3">Fase 3: Peak Season</h3>
               <ul className="space-y-2 text-sm text-yellow-800">
                 <li>• Máxima eficiencia operativa</li>
                 <li>• Captación de demanda masiva</li>
                 <li>• Escalamiento de resultados</li>
               </ul>
            </div>

            {/* Phase 4 */}
             <div className="bg-indigo-50 p-6 rounded-2xl shadow-sm border-t-4 border-indigo-400 hover:shadow-lg transition-all h-full">
               <span className="inline-block bg-white text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-indigo-200">Abril a Diciembre</span>
               <h3 className="text-lg font-bold text-indigo-900 mb-3">Fase 4: Always On</h3>
               <ul className="space-y-2 text-sm text-indigo-800">
                 <li>• Capacitación Interna</li>
                 <li>• Estructura con bases sólidas</li>
                 <li>• Incrementales</li>
               </ul>
            </div>

          </div>
        </div>

        {/* KPIs */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-abn-accent" />
            <h3 className="text-2xl font-bold text-abn-dark">KPIs de Éxito</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'CAC', sub: 'Reducción' },
              { label: 'Leads Calificados', sub: 'Incremento' },
              { label: 'Wasted Spend', sub: 'Minimización' },
              { label: 'Velocity', sub: 'Tiempo respuesta' },
              { label: 'Automatización', sub: '% Operativo' },
              { label: 'Visibilidad', sub: 'Real-time' },
            ].map((kpi, i) => (
              <div key={i} className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <p className="font-bold text-abn-dark">{kpi.label}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{kpi.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
