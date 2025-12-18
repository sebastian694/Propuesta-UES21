import React, { useState } from 'react';
import { CheckCircle2, Search, BarChart3, Presentation, Server, Rocket, Plus, Lightbulb, Monitor, Zap, RefreshCw, Settings, Database, Bell, Target, GraduationCap, X, Youtube, Facebook, Instagram, Linkedin, Twitter, Play, FileSpreadsheet, Slack, Mic, Layout, Globe, Activity, PieChart, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { SectionProps } from '../../types';

export const Scope: React.FC<SectionProps> = ({ id }) => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const scopeItems = [
    {
      title: "Gestión & Performance",
      icon: Search,
      items: [
        "Google Ads: Ejecución completa, optimización y testing.",
        "Meta Ads: Rol estratégico, revisión de tracking y optimización.",
        "TikTok Ads: Implementación desde cero, oportunidad de crecimiento incremental.",
        "DV360: Oportunidades de compra programática."
      ]
    },
    {
      title: "Auditoría & Implementación Tracking",
      icon: Server,
      items: [
        "Auditoría GTM/GA4/Server-Side.",
        "Validación de eventos de conversión.",
        "Integración correcta con Hubspot.",
        "Documentación de arquitectura de medición."
      ]
    },
    {
      title: "Data, Reporting, Automation & AI",
      icon: BarChart3,
      items: [
        "Implementación de Detrics.",
        "Dashboards ejecutivos y operativos.",
        "Sistema de alertas (Overspend/Underdelivery).",
        "Dashboard 'All In One' de todas las fuentes."
      ]
    },
    {
      title: "Capacitación (Training)",
      icon: Presentation,
      items: [
        "Trainings al equipo interno.",
        "Sesiones 1:1 y Workshops.",
        "Manuales operativos y metodologías ABN.",
        "Acompañamiento en adopción de procesos."
      ]
    }
  ];

  const processSteps = [
    { id: '01', title: 'Onboarding', icon: Lightbulb, interactive: true },
    { id: '02', title: 'Planificación', icon: Monitor, interactive: true },
    { id: '03', title: 'Implementación', icon: Zap, interactive: true },
    { id: '04', title: 'Optimización', icon: RefreshCw, interactive: true },
    { id: '05', title: 'Sistema de Reporting', icon: Settings, interactive: true },
    { id: '06', title: 'Data Analysis & Automation', icon: Database, interactive: true },
    { id: '07', title: 'Sistema de Alertas', icon: Bell, interactive: true },
    { id: '08', title: 'Tracking & Medición', icon: Target, interactive: true },
    { id: '09', title: 'Capacitación', icon: GraduationCap, interactive: true },
  ];

  const renderModalContent = (stepId: string) => {
    switch(stepId) {
      case '01': // ONBOARDING
        return (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">01. Onboarding</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-abn-accent mb-6">Auditoría del canal</h3>
              <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed">
                La auditoría ayuda a entender la estrategia actual del Partner, identificar <strong className="text-white">mejoras</strong> y <strong className="text-white">oportunidades</strong> para maximizar resultados.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                { id: '01.', title: 'Revisión de cuentas y campañas', desc: 'Auditamos campañas, grupos, keywords, pujas y presupuestos.' },
                { id: '02.', title: 'Análisis de Creatividades', desc: 'Evaluamos textos, imágenes, videos y CTAs para mejorar el rendimiento.' },
                { id: '03.', title: 'Análisis de Métricas', desc: 'Medimos ROAS, CPC, CPA, CTR y más para entender qué funciona.' },
                { id: '04.', title: 'Análisis de Competencia', desc: 'Estudiamos keywords, mensajes y canales para detectar oportunidades.' }
              ].map((card, idx) => (
                 <div key={idx} className="bg-slate-900 border border-abn-accent/30 rounded-2xl p-6 hover:border-abn-accent transition-colors group h-full">
                  <span className="text-4xl font-bold text-white mb-4 block group-hover:text-abn-accent transition-colors">{card.id}</span>
                  <h4 className="text-xl font-bold text-white mb-3 leading-tight">{card.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '02': // PLANIFICACIÓN
        return (
          <div className="animate-fadeIn">
             <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">02. Planificación</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-abn-accent mb-6">Estrategia Full Funnel</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-1/3">
                 <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Diseñamos <strong className="text-abn-accent">Estrategias con un enfoque Full Funnel</strong> para lograr impactar a nuestra audiencia y generar <strong className="text-white">posicionamiento (TOM), consideración</strong> de marca, y <strong className="text-white">ventas</strong>. La <strong className="text-white">sinergia entre los medios digitales</strong> optimiza el éxito de los resultados.
                    </p>
                    <div className="mt-6">
                       <p className="text-sm underline text-slate-400 cursor-pointer hover:text-white">Benchmark de Archivos Alternativos</p>
                    </div>
                 </div>
               </div>
               <div className="lg:w-2/3 flex flex-col items-center">
                  {/* Funnel Visualization */}
                  <div className="w-full max-w-lg flex flex-col items-center gap-2">
                     
                     {/* Awareness (Top) */}
                     <div className="w-full bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 shadow-lg flex items-center justify-center gap-8 transition-transform hover:scale-[1.02]">
                        <Play size={40} className="text-red-600 fill-current" />
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-bold text-xl shadow-md">G</div>
                        <span className="text-blue-500 font-black text-2xl tracking-tighter">max</span>
                        <span className="text-white font-bold text-xl">Disney+</span>
                     </div>

                     {/* Consideration (Middle) */}
                     <div className="w-[85%] bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 shadow-lg flex items-center justify-center gap-8 transition-transform hover:scale-[1.02]">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center text-white font-bold text-xs shadow-md">Ads</div>
                        <Facebook size={32} className="text-blue-600 fill-current" />
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg shadow-md">X</div>
                        <span className="text-pink-500 font-bold text-xl">TikTok</span>
                     </div>

                     {/* Conversion (Bottom) */}
                     <div className="w-[65%] bg-[#1e293b] pt-6 pb-10 px-6 rounded-b-[4rem] rounded-t-2xl border border-slate-700/50 shadow-lg flex items-center justify-center gap-8 transition-transform hover:scale-[1.02]">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-bold text-xl shadow-md">G</div>
                        <Facebook size={32} className="text-blue-600 fill-current" />
                        <span className="text-pink-500 font-bold text-xl">TikTok</span>
                     </div>

                  </div>
               </div>
            </div>
          </div>
        );

      case '03': // IMPLEMENTACIÓN
        return (
          <div className="animate-fadeIn">
             <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">03. Implementación</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-abn-accent mb-6">Coordinación y Alertas</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-1/3">
                 <p className="text-xl text-slate-300">
                   Nuestro <strong className="text-white">sistema de alertas</strong> informa sobre campañas y materiales listos para uso, facilitando su coordinación.
                 </p>
               </div>
               <div className="lg:w-2/3 flex flex-col md:flex-row items-center gap-8 justify-center">
                  {/* Flow Icons */}
                  <div className="flex md:flex-col gap-8 items-center text-slate-500">
                     <div className="flex flex-col items-center">
                        <Mic size={40} className="text-white mb-2" />
                        <div className="h-8 w-0.5 bg-slate-600 hidden md:block"></div>
                        <ArrowRight className="md:hidden text-slate-600" />
                     </div>
                     <div className="flex flex-col items-center">
                        <FileSpreadsheet size={40} className="text-green-500 mb-2" />
                        <div className="h-8 w-0.5 bg-slate-600 hidden md:block"></div>
                        <ArrowRight className="md:hidden text-slate-600" />
                     </div>
                     <Slack size={40} className="text-purple-400" />
                  </div>
                  
                  {/* Cards */}
                  <div className="flex flex-col gap-4 w-full max-w-md">
                     <div className="bg-slate-800 border border-slate-600 p-8 rounded-2xl text-center shadow-lg">
                        <h4 className="text-2xl font-bold text-white tracking-[0.2em]">EQUIPO CREATIVO</h4>
                     </div>
                     
                     <div className="bg-slate-800 border border-slate-600 p-5 rounded-2xl flex items-center justify-between font-mono text-xs text-slate-300 shadow-lg">
                        <div className="flex gap-3 items-center">
                           <span className="font-bold text-white text-lg">Meta</span>
                           <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-bold border border-green-500/50">SI</span>
                        </div>
                        <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 text-right">
                           <span>Feed Carousel</span> <div className="w-4 h-4 border border-slate-500 rounded flex items-center justify-center text-abn-accent"><CheckCircle2 size={12} /></div>
                           <span>Story Carousel</span> <div className="w-4 h-4 border border-slate-500 rounded"></div>
                           <span>InStream</span> <div className="w-4 h-4 border border-slate-500 rounded"></div>
                        </div>
                     </div>
                     
                     <div className="bg-slate-800 border border-slate-600 p-5 rounded-2xl relative overflow-hidden shadow-lg">
                        <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
                           <Slack size={18} className="text-purple-400" />
                           <span className="text-white font-bold text-sm">Update Material</span>
                           <span className="text-[10px] bg-slate-700 px-1 rounded text-slate-400 ml-auto">BOT</span>
                        </div>
                        <div className="space-y-2 text-xs text-slate-300 font-mono">
                           <p><span className="text-yellow-500 bg-yellow-500/10 px-1 rounded">@here</span> Cosas siniestras ocurrieron en la solapa <span className="text-blue-400 underline">Weeks_Implementacion</span> con las siguientes propiedades:</p>
                           <div className="bg-black/30 p-3 rounded border-l-2 border-abn-accent pl-3 space-y-1 mt-2">
                              <p>Pais: <span className="text-white">CL</span> 🇨🇱</p>
                              <p>Campaña: <span className="text-white">Campaña Brand</span></p>
                              <p>Medio: <span className="text-white">Meta</span></p>
                              <p>Formato: <span className="text-white">InStream</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case '04': // OPTIMIZACIÓN
        return (
          <div className="animate-fadeIn">
             <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">04. Optimización</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-abn-accent mb-6">Ciclo de Mejora Continua</h3>
            </div>
            <div className="relative py-10 px-4">
               {/* Line */}
               <div className="absolute top-[3.5rem] left-0 w-full h-0.5 bg-slate-700 hidden md:block"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                  {/* Step 1 */}
                  <div className="flex flex-col md:items-start gap-4 group">
                     <div className="w-full h-2 bg-abn-accent mb-2 md:mb-0 md:w-32 md:h-6 md:bg-abn-accent md:rounded-r-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                     <div>
                       <h4 className="text-2xl font-bold text-white mb-2">A/B Testing</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">Experimentos A/B para validar medio, campañas, creatividades, audiencias y canales.</p>
                     </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-col md:items-start gap-4 group">
                     <div className="w-full h-2 bg-abn-accent mb-2 md:mb-0 md:w-32 md:h-6 md:bg-abn-accent md:rounded-r-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                     <div>
                       <h4 className="text-2xl font-bold text-white mb-2">Implementación</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">Activación de los testeos según prioridades y roadmap.</p>
                     </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col md:items-start gap-4 group">
                     <div className="w-full h-2 bg-abn-accent mb-2 md:mb-0 md:w-32 md:h-6 md:bg-abn-accent md:rounded-r-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                     <div>
                       <h4 className="text-2xl font-bold text-white mb-2">Aprendizaje y Análisis</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">Analizamos resultados para detectar oportunidades.</p>
                     </div>
                  </div>
                   {/* Step 4 */}
                   <div className="flex flex-col md:items-start gap-4 group">
                     <div className="w-full h-2 bg-abn-accent mb-2 md:mb-0 md:w-32 md:h-6 md:bg-abn-accent md:rounded-r-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                     <div>
                       <h4 className="text-2xl font-bold text-white mb-2">Corrección y Escala</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">Ajustamos y escalamos lo que funciona.</p>
                       <div className="mt-2 inline-flex items-center gap-2 bg-slate-800 border border-abn-accent/50 rounded-full px-3 py-1">
                          <span className="w-2 h-2 rounded-full bg-abn-accent animate-pulse"></span>
                          <span className="text-[10px] font-bold text-abn-accent uppercase">#Agente AI Mkt</span>
                       </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case '05': // REPORTING
        return (
          <div className="animate-fadeIn text-center">
             <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">05. Sistema de Reporting</h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Utilizamos herramientas de tecnología para crear dashboards personalizados que integran los resultados de las campañas en tiempo real.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 max-w-6xl mx-auto">
               {/* Item 1 */}
               <a href="https://docs.google.com/spreadsheets/d/1m0Wi-TwE9ApvFC_d6QhXwDSxqzayMRhOHOd2FtmZCZo/edit?pli=1&gid=1988650463#gid=1988650463" target="_blank" rel="noopener noreferrer" className="group/link cursor-pointer">
                  <div className="flex flex-col items-center gap-6 group">
                     <div className="w-32 h-32 rounded-full border-2 border-white group-hover:border-abn-accent flex items-center justify-center transition-all duration-300 hover:scale-110 bg-slate-800 relative">
                        <Activity size={56} className="text-white group-hover:text-abn-accent transition-colors" />
                        <ExternalLink size={20} className="absolute top-0 right-0 text-abn-accent opacity-0 group-hover/link:opacity-100 transition-opacity translate-x-2 -translate-y-2" />
                     </div>
                     <div>
                       <h4 className="text-white font-medium text-sm md:text-base">Reporte Diario Real-Time</h4>
                       <span className="text-abn-accent font-bold text-2xl md:text-3xl block mt-1 underline decoration-transparent group-hover/link:decoration-abn-accent transition-all">All In One</span>
                     </div>
                  </div>
               </a>
               {/* Item 2 */}
               <a href="https://docs.google.com/spreadsheets/d/1I3UCiMzaeOuN6_8TKHOv5EGx6aUX7hT24BaeZfLeZ3g/edit?gid=1988650463#gid=1988650463" target="_blank" rel="noopener noreferrer" className="group/link cursor-pointer">
                  <div className="flex flex-col items-center gap-6 group">
                     <div className="w-32 h-32 rounded-full border-2 border-white group-hover:border-abn-accent flex items-center justify-center transition-all duration-300 hover:scale-110 bg-slate-800 relative">
                        <BarChart3 size={56} className="text-white group-hover:text-abn-accent transition-colors" />
                         <ExternalLink size={20} className="absolute top-0 right-0 text-abn-accent opacity-0 group-hover/link:opacity-100 transition-opacity translate-x-2 -translate-y-2" />
                     </div>
                     <div>
                       <h4 className="text-white font-medium text-sm md:text-base">Reporte Análisis</h4>
                       <span className="text-abn-accent font-bold text-2xl md:text-3xl block mt-1 underline decoration-transparent group-hover/link:decoration-abn-accent transition-all">Performance</span>
                     </div>
                  </div>
               </a>
               {/* Item 3 */}
               <div className="flex flex-col items-center gap-6 group">
                  <div className="w-32 h-32 rounded-full border-2 border-white group-hover:border-abn-accent flex items-center justify-center transition-all duration-300 hover:scale-110 bg-slate-800">
                     <FileText size={56} className="text-white group-hover:text-abn-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm md:text-base">Reporte para Weekly</h4>
                    <span className="text-abn-accent font-bold text-2xl md:text-3xl block mt-1">Semanal</span>
                  </div>
               </div>
               {/* Item 4 */}
               <a href="https://drive.google.com/file/d/19fTc-kCBw59FeZ-dXdORnZ6uLSPX7JU9/view" target="_blank" rel="noopener noreferrer" className="group/link cursor-pointer">
                  <div className="flex flex-col items-center gap-6 group">
                     <div className="w-32 h-32 rounded-full border-2 border-white group-hover:border-abn-accent flex items-center justify-center transition-all duration-300 hover:scale-110 bg-slate-800 relative">
                        <PieChart size={56} className="text-white group-hover:text-abn-accent transition-colors" />
                        <ExternalLink size={20} className="absolute top-0 right-0 text-abn-accent opacity-0 group-hover/link:opacity-100 transition-opacity translate-x-2 -translate-y-2" />
                     </div>
                     <div>
                       <h4 className="text-white font-medium text-sm md:text-base">Reporte Ejecutivo</h4>
                       <span className="text-abn-accent font-bold text-2xl md:text-3xl block mt-1 underline decoration-transparent group-hover/link:decoration-abn-accent transition-all">Mensual</span>
                     </div>
                  </div>
               </a>
            </div>
          </div>
        );

      case '06': // DATA ANALYSIS 
         return (
           <div className="animate-fadeIn">
              <div className="mb-8">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">06. Data Analysis & Automation</h2>
               <h3 className="text-2xl md:text-3xl font-bold text-abn-accent mb-6">Centralización & Automatización</h3>
             </div>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-lg">
                      <h4 className="text-2xl font-bold text-white mb-3">Ingeniería de Datos</h4>
                      <p className="text-slate-400 text-lg">Estructuramos pipelines de datos desde todas las fuentes (Google, Meta, CRM) hacia un Data Warehouse centralizado.</p>
                   </div>
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-lg">
                      <h4 className="text-2xl font-bold text-white mb-3">Normalización</h4>
                      <p className="text-slate-400 text-lg">Limpieza y estandarización de datos para asegurar consistencia en el reporting.</p>
                   </div>
                </div>
                <div className="flex justify-center">
                   <div className="relative w-64 h-64">
                      {/* Central Icon */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                         <div className="w-32 h-32 bg-slate-900 rounded-full border-4 border-abn-accent flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                            <Database size={64} className="text-white" />
                         </div>
                      </div>
                      {/* Orbiting Elements */}
                      <div className="absolute inset-0 animate-spin-slow z-10">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-slate-800 p-2 rounded-full border border-slate-600"><Facebook size={20} className="text-blue-500"/></div>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-4 bg-slate-800 p-2 rounded-full border border-slate-600"><Play size={20} className="text-red-500"/></div>
                         <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-slate-800 p-2 rounded-full border border-slate-600"><Layout size={20} className="text-green-500"/></div>
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-slate-800 p-2 rounded-full border border-slate-600"><FileSpreadsheet size={20} className="text-yellow-500"/></div>
                      </div>
                      <div className="absolute inset-0 rounded-full border border-slate-700/50"></div>
                   </div>
                </div>
             </div>
           </div>
         );

      case '07': // ALERTAS
        return (
          <div className="animate-fadeIn">
             <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">07. Sistema de Alertas</h2>
              <p className="text-slate-300 text-xl">Control proactivo para evitar desvíos y asegurar la eficiencia.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {/* Geograficas */}
               <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-abn-accent">Geográficas</h4>
                  <p className="text-sm text-slate-400">Prevenimos tener impresiones fuera de la zona geográfica deseada.</p>
                  <div className="bg-slate-900 h-64 rounded-2xl border border-slate-700 flex items-center justify-center p-6 relative overflow-hidden group">
                     <Globe size={120} className="text-slate-700 group-hover:text-abn-accent/20 transition-colors" />
                     {/* Map Dots Overlay Sim */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:10px_10px] opacity-10"></div>
                  </div>
               </div>
               {/* Presupuesto */}
               <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-abn-accent">Presupuesto</h4>
                  <p className="text-sm text-slate-400">Prevenimos consumos diarios por encima del budget establecido.</p>
                  <div className="bg-slate-900 h-64 rounded-2xl border border-slate-700 flex items-end justify-center p-6 gap-3 pb-8 relative">
                     {/* Bars */}
                     <div className="w-6 h-[40%] bg-slate-600 rounded-t"></div>
                     <div className="w-6 h-[55%] bg-slate-600 rounded-t"></div>
                     <div className="w-6 h-[45%] bg-slate-600 rounded-t"></div>
                     <div className="w-6 h-[60%] bg-slate-600 rounded-t"></div>
                     <div className="w-6 h-[90%] bg-red-500 rounded-t shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse relative">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-900 text-red-100 text-[10px] px-1 rounded border border-red-500">Alert</div>
                     </div>
                     <div className="w-6 h-[50%] bg-slate-600 rounded-t"></div>
                     <div className="absolute top-4 right-4 text-xs font-mono text-slate-500">Budget Limit -----</div>
                  </div>
               </div>
               {/* Performance */}
               <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-abn-accent">Performance</h4>
                  <p className="text-sm text-slate-400">Control de KPIs para complementar nuestro control y toma de decisiones.</p>
                  <div className="bg-slate-900 h-64 rounded-2xl border border-slate-700 flex items-center justify-center p-6 relative">
                     <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                        <path d="M0 40 Q 20 45, 40 40 T 80 10 T 100 30" fill="none" stroke="#0A9286" strokeWidth="2" />
                        <circle cx="80" cy="10" r="3" fill="#fff" className="animate-ping" />
                        <circle cx="80" cy="10" r="3" fill="#abn-accent" />
                     </svg>
                     <div className="absolute top-4 left-4 text-xs font-mono text-slate-500">ROAS / CPA</div>
                  </div>
               </div>
            </div>
          </div>
        );

      case '08': // TRACKING 
         return (
            <div className="animate-fadeIn">
               <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">08. Tracking & Medición</h2>
                  <h3 className="text-2xl md:text-3xl font-bold text-abn-accent">Auditoría y Setup Avanzado</h3>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                  {[
                     { icon: Search, title: "Diagnóstico GA4 & GTM", desc: "Auditoria de GTM, identificar mejoras.", step: "01" },
                     { icon: Settings, title: "Integración Customer Journey", desc: "Capturar datos desde el sitio hasta el offline.", step: "02" },
                     { icon: Database, title: "Taxonomía y Estandarización", desc: "Consistencia en etiquetado y seguimiento.", step: "03" },
                     { icon: RefreshCw, title: "Optimización Rendimiento", desc: "Monitoreo de rendimiento web y corrección.", step: "04" },
                     { icon: FileText, title: "Seguimiento y Reporte", desc: "Diseño de dashboard para monitorear KPIs.", step: "05" },
                     { icon: ArrowRight, title: "Conclusión", desc: "Recapitular beneficios y próximos pasos.", step: "06" }
                  ].map((card, idx) => (
                     <div key={idx} className="bg-slate-900 border-t-4 border-abn-accent p-6 rounded-b-2xl flex flex-col items-center text-center h-full hover:bg-slate-800 transition-colors group">
                        <div className="w-14 h-14 rounded-full border border-slate-600 flex items-center justify-center mb-4 group-hover:border-abn-accent group-hover:bg-abn-accent/10 transition-all">
                           <card.icon size={24} className="text-white group-hover:text-abn-accent" />
                        </div>
                        <h5 className="font-bold text-white text-base mb-3 leading-tight min-h-[40px] flex items-center">{card.title}</h5>
                        <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         );

      case '09': // CAPACITACIÓN 
         return (
            <div className="animate-fadeIn">
               <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">09. Capacitación</h2>
                  <p className="text-slate-300 text-lg">
                     Capacitaciones al equipo interno del Partner para alinear objetivos, mejorar el <strong className="text-white">know-how</strong> y fortalecer sus <strong className="text-white">capacidades</strong>.
                  </p>
               </div>
               <div className="grid md:grid-cols-3 gap-8">
                  {/* Slide 1 */}
                  <div className="bg-gradient-to-br from-indigo-100 to-white p-8 rounded-3xl shadow-2xl transform hover:rotate-0 rotate-1 transition-transform duration-300 border-4 border-white/50">
                     <div className="flex justify-between items-start mb-12">
                        <h4 className="text-3xl font-bold text-indigo-900 leading-tight">Introducción al<br/>Branding</h4>
                        <div className="text-xs font-mono text-indigo-400 border border-indigo-200 px-2 py-1 rounded">01</div>
                     </div>
                     <div className="h-24 bg-indigo-600 rounded-br-full rounded-tl-full opacity-20 mb-4 blur-xl"></div>
                     <span className="text-sm font-bold text-slate-400">ABN Academy</span>
                  </div>
                   {/* Slide 2 */}
                   <div className="bg-gradient-to-br from-blue-100 to-white p-8 rounded-3xl shadow-2xl transform hover:rotate-0 -rotate-1 transition-transform duration-300 border-4 border-white/50">
                     <div className="flex justify-between items-start mb-8">
                        <h4 className="text-3xl font-bold text-blue-900 leading-tight">Creatividades</h4>
                        <div className="text-xs font-mono text-blue-400 border border-blue-200 px-2 py-1 rounded">02</div>
                     </div>
                     <p className="text-sm text-blue-800 mb-8 font-medium">Recomendaciones y mejores prácticas creativas para maximizar impacto.</p>
                     <div className="h-16 w-16 bg-blue-600 rounded-full opacity-20 ml-auto blur-lg"></div>
                  </div>
                  {/* Slide 3 */}
                   <div className="bg-gradient-to-br from-fuchsia-100 to-white p-8 rounded-3xl shadow-2xl transform hover:rotate-0 rotate-2 transition-transform duration-300 border-4 border-white/50">
                     <div className="flex justify-between items-start mb-12">
                        <h4 className="text-3xl font-bold text-fuchsia-900 leading-tight">Measurement</h4>
                        <div className="text-xs font-mono text-fuchsia-400 border border-fuchsia-200 px-2 py-1 rounded">03</div>
                     </div>
                     <div className="flex gap-2 mb-4">
                        <span className="bg-fuchsia-200 text-fuchsia-800 text-xs px-2 py-1 rounded-full font-bold">BrandLift</span>
                        <span className="bg-fuchsia-200 text-fuchsia-800 text-xs px-2 py-1 rounded-full font-bold">SearchLift</span>
                     </div>
                     <div className="w-20 h-20 bg-fuchsia-600 rounded-full opacity-20 -mb-10 -ml-4 blur-xl"></div>
                  </div>
               </div>
            </div>
         );

      default:
        return null;
    }
  };

  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-4">Alcance del Servicio</h2>
          <p className="text-abn-accent font-medium text-lg uppercase tracking-wide">
            un equipo preparado para garantizar el éxito de la gestión
          </p>
        </div>

        {/* Existing Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {scopeItems.map((scope, index) => (
            <div key={index} className="flex gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-abn-dark text-white rounded-xl flex items-center justify-center shadow-md">
                  <scope.icon size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-abn-dark mb-4">{scope.title}</h3>
                <ul className="space-y-3">
                  {scope.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={18} className="text-abn-accent mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Incrementals */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-abn-dark to-abn-accent shadow-2xl text-white transform hover:scale-[1.01] transition-transform duration-300 mb-20">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b border-white/20 pb-8">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Rocket size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Oportunidades Incrementales</h3>
                <p className="text-white/80 text-lg">Soluciones y Tecnología avanzadas para escalar el negocio más allá de lo convencional.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Modelo de Lead Scoring', 
                'MMM (Meridian y Robyn)', 
                'Suite de Google Marketing Platform', 
                'Ecosistema Hike'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default border border-white/10">
                  <Plus size={20} className="text-teal-300 flex-shrink-0" />
                  <span className="font-semibold text-lg leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 9-Step Process Diagram (Dark Theme) */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
           {/* Background Decoration */}
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-50"></div>
           <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-72 h-72 bg-abn-accent/10 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]"></div>
           </div>

           <div className="relative z-10">
             <h3 className="text-2xl font-bold text-white mb-2">Scope Always On</h3>
             <p className="text-abn-accent text-lg mb-8">Digital Media & Analytics</p>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 justify-items-center">
                {processSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center text-center group ${step.interactive ? 'cursor-pointer' : ''}`}
                    onClick={() => step.interactive && setActiveStep(step.id)}
                  >
                    <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-300 backdrop-blur-sm relative
                      ${step.interactive 
                        ? 'border-abn-accent shadow-[0_0_15px_rgba(20,184,166,0.5)] bg-abn-accent/10 hover:scale-110 hover:shadow-[0_0_25px_rgba(20,184,166,0.8)]' 
                        : 'border-slate-600 bg-slate-800/50 group-hover:border-abn-accent group-hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]'
                      }`}
                    >
                      <step.icon size={24} className={`transition-colors ${step.interactive ? 'text-abn-accent' : 'text-slate-300 group-hover:text-abn-accent'}`} />
                      {step.interactive && (
                         <div className="absolute -top-1 -right-1 w-3 h-3 bg-abn-accent rounded-full animate-ping"></div>
                      )}
                    </div>
                    <span className="text-slate-500 font-bold text-xs mb-1">{step.id}.</span>
                    <h4 className={`font-medium text-sm max-w-[120px] leading-tight transition-colors ${step.interactive ? 'text-abn-accent' : 'text-white group-hover:text-abn-accent'}`}>
                      {step.title}
                    </h4>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>

      {/* Dynamic Modal */}
      {activeStep && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveStep(null)}
        >
          <div 
            className="bg-[#0f172a] w-full max-w-7xl rounded-3xl relative overflow-hidden shadow-2xl border border-slate-700 max-h-[95vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button 
              onClick={() => setActiveStep(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full z-50"
            >
              <X size={24} />
            </button>
            
            {/* Content Container */}
            <div className="p-8 md:p-12">
               {renderModalContent(activeStep)}
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-abn-accent/5 to-transparent pointer-events-none -z-10"></div>
          </div>
        </div>
      )}
    </section>
  );
};