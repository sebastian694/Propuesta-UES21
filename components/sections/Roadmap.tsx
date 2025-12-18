import React from 'react';
import { UserPlus, GraduationCap, Search, Calendar, Settings, BarChart3, ShieldCheck } from 'lucide-react';
import { SectionProps } from '../../types';
export const Roadmap: React.FC<SectionProps> = ({ id }) => {
  const phases = [
    {
      months: "Enero - Marzo",
      title: "Fase 1: Inicio de Gestión",
      items: ["Diagnóstico profundo de cuentas", "Setup de herramientas ABN", "Ejecución peak season inmediata", "Auditoría de tracking"],
      color: "border-slate-400",
      bg: "bg-slate-50",
      icon: Search
    },
    {
      months: "Marzo - Julio",
      title: "Fase 2: Estrategia Always On",
      items: ["Definición metodología WoW", "Sistemas de automatización", "Estabilización de resultados", "Documentación de procesos"],
      color: "border-emerald-500",
      bg: "bg-emerald-50/30",
      icon: Settings
    },
    {
      months: "Agosto - Diciembre",
      title: "Fase 3: Hiring & Capacitación",
      items: [
        "Reclutamiento de Core Team & Analistas (Siglo 21)",
        "Onboarding cultural y técnico (Siglo 21)",
        "Capacitación en metodologías (ABN)",
        "Gestión compartida progresiva (Ambos)",
        "Workshops técnicos y manuales operativos (ABN)"
      ],
      color: "border-purple-500",
      bg: "bg-purple-50/50",
      icon: GraduationCap
    },
    {
      months: "Enero - Marzo 2027",
      title: "Gestión In-House 100% UES21",
      items: [
        "Consolidación total del equipo interno",
        "Auditoría de performance semestral",
        "Acompañamiento estratégico puntual",
        "Autonomía operativa absoluta",
        "UES21 lidera operación 100%"
      ],
      color: "border-slate-900",
      bg: "bg-slate-100",
      icon: ShieldCheck
    }
  ];
  return (
    <section id={id} className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-12 text-center">Plan de Acompañamiento & Transición</h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <div 
                key={idx} 
                className={`${phase.bg} p-6 rounded-2xl shadow-sm border-t-4 ${phase.color} hover:shadow-lg transition-all duration-300 group flex flex-col h-full`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200">
                    <Calendar size={12} className="text-slate-400" />
                    <span className="text-slate-700 text-[10px] font-bold">
                      {phase.months}
                    </span>
                  </div>
                  <phase.icon size={18} className="text-slate-400 group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-base font-bold text-slate-800 mb-3 leading-tight">{phase.title}</h3>
                
                <ul className="space-y-2 mt-auto">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0 group-hover:bg-abn-accent transition-colors"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
