import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SectionProps } from '../../types';
import { ABNSymbol } from '../Logos';

export const Hero: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative h-screen min-h-[700px] flex items-center bg-abn-dark overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50 skew-x-12 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-abn-accent/10 to-transparent rounded-full blur-3xl" />

      {/* Background Watermark Logo */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 opacity-[0.05] pointer-events-none z-0 hidden lg:block">
        <ABNSymbol className="w-[800px] h-[800px] text-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-6">
             <span className="bg-abn-accent/10 backdrop-blur-md text-abn-accent border border-abn-accent/20 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                Propuesta ABN Digital <span className="text-white">→</span> UES21
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Propuesta <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-abn-accent to-teal-200">
              ABN Digital & UES21
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Una alianza estratégica diseñada para gestionar, acelerar y transferir conocimiento, asegurando un sistema de crecimiento autónomo para UES21.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('objective')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-abn-accent hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              Ver Propuesta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
