import React from 'react';
import { Check, X } from 'lucide-react';
import { SectionProps } from '../../types';

export const Comparison: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-12 text-center">¿Por qué ABN Digital?</h2>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-slate-200 mb-20">
          <div className="grid grid-cols-3 bg-slate-50 p-4 font-bold text-sm md:text-base border-b border-slate-200">
            <div className="text-slate-500">Feature</div>
            <div className="text-center text-slate-400">Agencia Tradicional</div>
            <div className="text-center text-abn-accent">ABN Digital</div>
          </div>
          
          {[
            { feat: 'Modelo Operativo', bad: 'Operan campañas', good: 'Construimos sistemas' },
            { feat: 'Reporting', bad: 'Manual / Mensual', good: 'Real-time / Automático' },
            { feat: 'Equipo', bad: 'Ejecución Junior', good: 'Senior & Técnico' },
            { feat: 'Legado', bad: 'Resultados efímeros', good: 'Capacidad instalada' },
            { feat: 'Data', bad: 'Caja negra', good: 'Data-driven foundation' },
            { feat: 'Objetivo Final', bad: 'Dependencia eterna', good: 'Independencia del cliente' },
          ].map((row, idx) => (
            <div key={idx} className={`grid grid-cols-3 p-4 items-center ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
              <div className="font-medium text-slate-700 text-sm">{row.feat}</div>
              <div className="text-center text-slate-400 text-sm px-2">{row.bad}</div>
              <div className="text-center text-abn-dark font-bold text-sm px-2 flex justify-center items-center gap-2">
                {row.good}
                <Check size={14} className="text-abn-accent" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-abn-dark rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/20 [mask-image:linear-gradient(0deg,transparent,white)] pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Estamos listos para acompañarlos
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              UES21 no necesita solo alguien que opere campañas. Necesita un socio que ordene, acelere, digitalice y automatice.
            </p>
            <button className="bg-white text-abn-dark hover:bg-slate-100 font-bold py-4 px-10 rounded-full transition-colors shadow-lg cursor-default">
              Muchas Gracias
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};