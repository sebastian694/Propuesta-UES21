import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionProps } from '../../types';

export const ContextPains: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-abn-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contexto & Puntos de Mejora</h2>
          <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed">
            UES21 enfrenta el desafío de escalar su estrategia digital en un contexto de competencia creciente, picos estacionales y tiempos de decisión cortos. El equipo interno necesita agilidad, herramientas, foco y soporte externo senior para acelerar mientras construye autonomía. Ese es el espacio donde ABN Digital entra como partner para ordenar, ejecutar, transferir conocimiento y dejar un sistema funcionando.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-abn-accent/50 transition-colors group flex flex-col h-full">
            <h3 className="text-xl font-bold text-abn-accent mb-6 text-center h-8 flex items-center justify-center">01. Performance</h3>
            
            <div className="flex-1 w-full">
              <div className="bg-red-900/10 p-4 rounded-lg text-sm text-red-200 border border-red-500/30 text-center flex flex-col items-center h-full justify-center">
                <span className="block font-bold mb-2 text-red-400 uppercase tracking-wide text-xs">Estado Actual</span>
                <p className="opacity-90">Ejecución fragmentada, con resultados variables según plataforma y momento del ciclo.</p>
              </div>
            </div>
            
            <div className="flex justify-center text-slate-600 group-hover:text-abn-accent transition-colors my-6">
              <ArrowRight className="transform rotate-90 md:rotate-0" />
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-emerald-900/10 p-4 rounded-lg text-sm text-emerald-200 border border-emerald-500/30 text-center flex flex-col items-center h-full justify-center">
                <span className="block font-bold mb-2 text-emerald-400 uppercase tracking-wide text-xs">Solución ABN</span>
                <p className="opacity-90">Arquitectura de campañas sólida, automatizada y mirada holistica para buscar eficiencias.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-abn-accent/50 transition-colors group flex flex-col h-full">
            <h3 className="text-xl font-bold text-abn-accent mb-6 text-center h-8 flex items-center justify-center">02. Medición & Data</h3>
            
            <div className="flex-1 w-full">
              <div className="bg-red-900/10 p-4 rounded-lg text-sm text-red-200 border border-red-500/30 text-center flex flex-col items-center h-full justify-center">
                <span className="block font-bold mb-2 text-red-400 uppercase tracking-wide text-xs">Estado Actual</span>
                <p className="opacity-90">Puntos ciegos en el recorrido del usuario, tracking incompleto y decisiones guiadas por intuición más que por evidencia.</p>
              </div>
            </div>
            
            <div className="flex justify-center text-slate-600 group-hover:text-abn-accent transition-colors my-6">
              <ArrowRight className="transform rotate-90 md:rotate-0" />
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-emerald-900/10 p-4 rounded-lg text-sm text-emerald-200 border border-emerald-500/30 text-center flex flex-col items-center h-full justify-center">
                <span className="block font-bold mb-2 text-emerald-400 uppercase tracking-wide text-xs">Solución ABN</span>
                <p className="opacity-90">Trazabilidad total del funnel, integración con HubSpot y dashboards unificados en tiempo real para decisiones informadas.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-abn-accent/50 transition-colors group flex flex-col h-full">
            <h3 className="text-xl font-bold text-abn-accent mb-6 text-center h-8 flex items-center justify-center">03. Capacidad Interna</h3>
            
            <div className="flex-1 w-full">
              <div className="bg-red-900/10 p-4 rounded-lg text-sm text-red-200 border border-red-500/30 text-center flex flex-col items-center h-full justify-center">
                <span className="block font-bold mb-2 text-red-400 uppercase tracking-wide text-xs">Estado Actual</span>
                <p className="opacity-90">Dependencia operacional de recursos puntuales, con riesgo de cuello de botella.</p>
              </div>
            </div>
            
            <div className="flex justify-center text-slate-600 group-hover:text-abn-accent transition-colors my-6">
              <ArrowRight className="transform rotate-90 md:rotate-0" />
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-emerald-900/10 p-4 rounded-lg text-sm text-emerald-200 border border-emerald-500/30 text-center flex flex-col items-center h-full justify-center">
                <span className="block font-bold mb-2 text-emerald-400 uppercase tracking-wide text-xs">Solución ABN</span>
                <p className="opacity-90">Transferencia de know–how, manuales operativos, entrenamiento y procesos documentados para que el equipo sea autónomo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};