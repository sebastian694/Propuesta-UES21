
import React from 'react';
import { User, Database, BarChart3, Fingerprint } from 'lucide-react';
import { SectionProps } from '../../types';

export const Roles: React.FC<SectionProps> = ({ id }) => {
  const roles = [
    {
      title: "Team Leader",
      description: "Responsable de organizar, dirigir y coordinar al equipo. Su rol clave en identificar oportunidades de crecimiento e impulsar mejoras que agreguen valor a la cuenta.",
      icon: User,
      colorClass: "text-abn-dark bg-slate-100"
    },
    {
      title: "Paid Media Manager",
      description: "Encargado de planificar la estrategia de medios en cada mercado, analizar resultados y coordinar la implementación. También gestiona la relación diaria con el cliente. Está capacitada para trabajar con cualquier medio digital y definir una estrategia full-funnel cross-channel.",
      icon: User,
      colorClass: "text-abn-dark bg-slate-100"
    },
    {
      title: "Paid Media Analyst",
      description: "Responsable de la implementación operativa. Activa campañas, monitorea resultados, optimiza presupuestos y arma reportes mensuales. Está capacitado para implementar campañas en cualquier medio digital.",
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
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${role.colorClass} group-hover:scale-110 transition-transform`}>
                  <role.icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-800 leading-tight">{role.title}</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
