import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { SectionProps } from '../../types';

export const Solution: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-4">Solución Propuesta</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Un abordaje integral que combina gestión inmediata con construcción de futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold text-abn-dark mb-3">Gestión Estrategia de Medios Digitales</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              ABN asume la gestión operativa y estratégica para asegurar el éxito de la campaña crítica de marzo, garantizando estabilidad y resultados.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
            <div className="w-14 h-14 bg-teal-100 text-abn-accent rounded-xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-bold text-abn-dark mb-3">Estructura Escalable</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Construcción de bases sólidas de medición, automatización y eficiencia. Dejamos un sistema funcionando, no solo campañas activas.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-abn-dark mb-3">Transición In-House</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Transferencia de know-how y capacitación al equipo de UES21 para lograr independencia operativa completa post-transición.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};