import React from 'react';
import { SectionProps } from '../../types';

export const Objective: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-6">Objetivo del Partnership</h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Diseñar e implementar una estrategia integral de performance con visión transversal entre plataformas, medición real y ejecución veloz, con ABN como partner estratégico que aporta expertise y aceleración — construyendo capacidades internas para asegurar escalabilidad y autonomía.
          </p>
        </div>
      </div>
    </section>
  );
};