import React, { useState } from 'react';
import { User, Database, BarChart3, Fingerprint, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionProps } from '../../types';

export const Roles: React.FC<SectionProps> = ({ id }) => {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const toggleRole = (index: number) => {
    setExpandedRole(expandedRole === index ? null : index);
  };

  const roles = [
    {
      title: "Team Leader",
      description: "Responsable de organizar, dirigir y coordinar al equipo. Su rol clave en identificar oportunidades de crecimiento e impulsar mejoras que agreguen valor a la cuenta.",
      responsibilities: [
        "Generar análisis de competencia, benchmarks y aprendizajes accionables.",
        "Identificar insights relevantes de la industria, tendencias y oportunidades para mejorar la performance.",
        "Plantear hipótesis de testeo y proponer experimentos que permitan acelerar resultados.",
        "Supervisar la ejecución del equipo, garantizando calidad, orden y cumplimiento de deadlines.",
        "Traducir datos en recomendaciones claras para el Manager y el partner."
      ],
      icon: User,
      colorClass: "text-abn-dark bg-slate-100"
    },
    {
      title: "Paid Media Manager",
      description: "Encargado de planificar la estrategia de medios en cada mercado, analizar resultados y coordinar la implementación. También gestiona la relación diaria con el cliente. Está capacitada para trabajar con cualquier medio digital y definir una estrategia full-funnel cross-channel.",
      responsibilities: [
        "Diseñar el Media Plan completo, definiendo estrategias, presupuestos y racionales.",
        "Ser el principal interlocutor del partner y de los medios, manteniendo contacto diario para alinear expectativas y prioridades.",
        "Liderar todas las reuniones de status, presentaciones y espacios de revisión de performance.",
        "Presentar reportes estratégicos, insights y recomendaciones accionables.",
        "Coordinar con Team Leaders y Analysts para garantizar una ejecución ordenada y alineada a la estrategia.",
        "Anticipar riesgos, gestionar tiempos y mantener al cliente informado con claridad."
      ],
      icon: User,
      colorClass: "text-abn-dark bg-slate-100"
    },
    {
      title: "Paid Media Analyst",
      description: "Responsable de la implementación operativa. Activa campañas, monitorea resultados, optimiza presupuestos y arma reportes mensuales. Está capacitado para implementar campañas en cualquier medio digital.",
      responsibilities: [
        "Implementar anuncios en todas las plataformas publicitarias según los lineamientos del Media Plan.",
        "Optimizar campañas diariamente, priorizando eficiencia, volumen y objetivos del funnel.",
        "Realizar controles de consumo y presupuesto para evitar desvíos.",
        "Monitorear métricas clave y generar alertas tempranas ante anomalías.",
        "Documentar aprendizajes y colaborar en la elaboración de reportes."
      ],
      icon: User,
      colorClass: "text-abn-dark bg-slate-100"
    },
    {
      title: "Data Specialist",
      description: "Diseña y ejecuta automatizaciones con AI que optimizan flujos de datos y procesos operativos. Su foco está en escalar tareas repetitivas, conectar plataformas y asegurar la eficiencia del stack tecnológico.",
      icon: Database,
      colorClass: "text-blue-600 bg-blue-50"
    },
    {
      title: "Reporting Specialist",
      description: "Especialista en visualización de datos y generación de dashboards claros, accionables y en tiempo real. Traduce métricas complejas en insights comprensibles para la toma de decisiones.",
      icon: BarChart3,
      colorClass: "text-purple-600 bg-purple-50"
    },
    {
      title: "Tracking Specialist",
      description: "Se encarga de la implementación y mantenimiento del tracking de eventos, conversiones y usuarios. Asegura una medición precisa y confiable a lo largo de todo el journey digital.",
      icon: Fingerprint,
      colorClass: "text-teal-600 bg-teal-50"
    }
  ];

  return (
    <section id={id} className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-abn-dark mb-12 text-center">Definición de Roles</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 group flex flex-col h-full ${role.responsibilities ? 'cursor-pointer hover:border-abn-accent/30' : ''}`}
              onClick={() => role.responsibilities && toggleRole(idx)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${role.colorClass} group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <role.icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-800 leading-tight flex-grow">{role.title}</h4>
                {role.responsibilities && (
                  <div className="text-slate-400 group-hover:text-abn-accent transition-colors">
                    {expandedRole === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                )}
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {role.description}
                </p>

                {role.responsibilities && expandedRole === idx && (
                  <div className="mt-6 pt-6 border-t border-slate-200 animate-fadeIn">
                    <h5 className="font-bold text-xs text-abn-accent uppercase tracking-wider mb-4">Responsabilidades principales</h5>
                    <ul className="space-y-3">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={14} className="text-abn-accent mt-0.5 flex-shrink-0" />
                          <span className="leading-tight">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {role.responsibilities && expandedRole !== idx && (
                   <p className="text-xs text-abn-accent font-bold mt-2 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">Click para ver responsabilidades</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
