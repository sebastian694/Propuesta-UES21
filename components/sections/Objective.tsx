
import React from 'react';
import { SectionProps } from '../../types';

export const Objective: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-6">Objetivo del Partnership</h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Acompañar a <span className="font-bold text-abn-dark">UES21</span> en el diseño e implementación de una estrategia integral de performance con visión transversal entre plataformas, medición real y ejecución veloz. ABN Digital actúa como partner estratégico que aporta expertise, aceleración y tecnología, con el compromiso de construir capacidades internas sólidas para asegurar la escalabilidad y autonomía total de la institución.
          </p>
        </div>
      </div>
    </section>
  );
};
