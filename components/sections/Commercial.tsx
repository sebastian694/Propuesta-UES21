import React, { useState } from 'react';
import { SectionProps } from '../../types';
import { Check, Calculator, Palette, FileText } from 'lucide-react';

export const Commercial: React.FC<SectionProps> = ({ id }) => {
  const [investment, setInvestment] = useState<string>('');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateFee = (inv: number) => {
    if (inv <= 0) return 0;
    if (inv <= 190000000) {
      return 13300000;
    } else if (inv <= 224000000) {
      // 190M * 0.07 = 13.3M
      return Math.max(13300000, inv * 0.07);
    } else if (inv <= 324000000) {
      // 224M * 0.06 = 13.44M -> Min is 15.7M (prev tier max)
      // 324M * 0.06 = 19.44M -> Table says 19.4M
      return Math.max(15700000, inv * 0.06);
    } else if (inv <= 424000000) {
      // 324M * 0.05 = 16.2M -> Min is 19.4M (prev tier max)
      // 424M * 0.05 = 21.2M
      return Math.max(19400000, inv * 0.05);
    } else {
      // > 424M
      return Math.max(21200000, inv * 0.04);
    }
  };

  // Convert input (assumed in millions) to raw number for calculation
  const rawInput = parseFloat(investment.replace(/,/g, '')) || 0;
  const numericInvestment = rawInput * 1000000;
  const calculatedFee = calculateFee(numericInvestment);
  
  // Determine active tier for display logic
  const hasInput = rawInput > 0;
  let activeTier = 0;
  if (hasInput) {
    if (numericInvestment <= 190000000) activeTier = 1;
    else if (numericInvestment <= 224000000) activeTier = 2;
    else if (numericInvestment <= 324000000) activeTier = 3;
    else if (numericInvestment <= 424000000) activeTier = 4;
    else activeTier = 5;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow numbers and decimal points
    const val = e.target.value.replace(/[^0-9.]/g, '');
    // Ensure only one decimal point
    const parts = val.split('.');
    const finalVal = parts.length > 2 ? `${parts[0]}.${parts[1]}` : val;
    setInvestment(finalVal);
  };

  const tiers = [
    { from: '0', to: '190M', fixed: '13.3M', var: '0%', min: '13.3M', max: '13.3M', id: 1 },
    { from: '190M', to: '224M', fixed: '-', var: '7%', min: '13.3M', max: '15.7M', id: 2 },
    { from: '224M', to: '324M', fixed: '-', var: '6%', min: '15.7M', max: '19.4M', id: 3 },
    { from: '324M', to: '424M', fixed: '-', var: '5%', min: '19.4M', max: '21.2M', id: 4 },
    { from: '424M', to: '-', fixed: '-', var: '4%', min: '21.2M', max: '0.0', id: 5 },
  ];

  return (
    <section id={id} className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-12 text-center">Propuesta Comercial</h2>
        
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-abn-dark mb-4">Modelo de Fee Variable</h3>
            <p className="text-slate-600 text-lg">
              El esquema de honorarios se define en función de la inversión mensual gestionada en ARS, combinando un componente fijo para el primer tramo y un esquema variable para escalas superiores.
            </p>
          </div>

          <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200 mb-12">
            <table className="w-full text-center border-collapse bg-white min-w-[700px]">
              <thead>
                <tr className="bg-[#00344d] text-white">
                  <th colSpan={2} className="py-4 px-4 border-r border-slate-700">Inversión Mensual (ARS)</th>
                  <th rowSpan={2} className="py-4 px-4 border-r border-slate-700 align-middle">Fixed</th>
                  <th rowSpan={2} className="py-4 px-4 border-r border-slate-700 align-middle">Variable</th>
                  <th colSpan={2} className="py-4 px-4">Total ARS</th>
                </tr>
                <tr className="bg-[#004a6d] text-white text-sm">
                  <th className="py-3 px-4 border-r border-slate-700 border-t border-slate-700 w-[15%]">Desde</th>
                  <th className="py-3 px-4 border-r border-slate-700 border-t border-slate-700 w-[15%]">Hasta</th>
                  <th className="py-3 px-4 border-r border-slate-700 border-t border-slate-700 w-[20%]">Mínimo</th>
                  <th className="py-3 px-4 border-t border-slate-700 w-[20%]">Máximo</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-medium text-sm md:text-base">
                {tiers.map((tier) => (
                  <tr key={tier.id} className={`border-b border-slate-200 transition-colors duration-300 ${activeTier === tier.id ? 'bg-teal-50 ring-2 ring-inset ring-abn-accent/30' : 'hover:bg-slate-50'}`}>
                    <td className="py-4 px-4 border-r border-slate-100">{tier.from}</td>
                    <td className="py-4 px-4 border-r border-slate-100">{tier.to}</td>
                    <td className={`py-4 px-4 border-r border-slate-100 ${tier.fixed === '-' ? 'text-slate-400 font-normal' : 'font-bold'}`}>{tier.fixed}</td>
                    <td className="py-4 px-4 border-r border-slate-100">{tier.var}</td>
                    <td className="py-4 px-4 border-r border-slate-100 font-bold text-abn-dark">{tier.min}</td>
                    <td className={`py-4 px-4 font-bold text-abn-dark ${tier.max === '-' || tier.max === '0.0' ? 'text-slate-400 font-normal' : ''}`}>{tier.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-abn-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-600/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
             
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-abn-accent/20 rounded-lg border border-abn-accent/20">
                         <Calculator className="text-abn-accent" size={24} />
                      </div>
                      <h4 className="text-2xl font-bold text-white">Calculadora de Fee</h4>
                   </div>
                   <p className="text-slate-400 mb-8 leading-relaxed">
                     Ingresa tu inversión mensual en <strong>Millones</strong> de ARS para calcular el fee estimado.
                   </p>
                   
                   <div className="relative group">
                      <input 
                        type="text" 
                        value={investment}
                        onChange={handleInputChange}
                        placeholder="190"
                        className="w-full bg-slate-800 border border-slate-600 text-white text-2xl font-bold rounded-2xl py-5 pl-6 pr-44 focus:ring-2 focus:ring-abn-accent focus:border-transparent outline-none placeholder-slate-700 transition-all shadow-inner"
                      />
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold bg-slate-800 py-1 px-2 rounded-md">M ARS / Mes</span>
                   </div>
                   <p className="text-[10px] text-slate-500 mt-2 ml-2 italic">Ej: Escribí "15" para 15.000.000 ARS</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-abn-accent to-transparent opacity-50"></div>
                   
                   <span className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-4">Fee Mensual Estimado</span>
                   <div className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 mb-6 tracking-tight">
                      {hasInput ? formatCurrency(calculatedFee) : '$ 0'}
                   </div>
                   
                   <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300 ${activeTier > 0 ? 'bg-abn-accent/20 border-abn-accent/30' : 'bg-slate-800 border-slate-700'}`}>
                      <span className={`w-2 h-2 rounded-full ${activeTier > 0 ? 'bg-abn-accent animate-pulse' : 'bg-slate-600'}`}></span>
                      <span className={`text-[10px] font-bold uppercase tracking-wide ${activeTier > 0 ? 'text-abn-accent' : 'text-slate-500'}`}>
                        {activeTier > 0 ? `Tramo ${activeTier} Activo` : 'Esperando inversión'}
                      </span>
                   </div>
                </div>
             </div>
          </div>

          {/* Updated Fixed Fee Section */}
          <div className="text-center mb-16 py-8 px-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-abn-dark">Modelo Fee Fijo: ARS 16M</h3>
            <p className="text-slate-500 text-sm mt-2 italic">Valor de referencia mensual para gestión integral de performance y data.</p>
            <p className="text-slate-400 text-xs mt-1 italic">Si se requieren nuevos talentos por demanda, se cotizarán por separado</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-abn-dark text-white p-8 md:p-10 rounded-3xl h-full">
              <h4 className="text-xl font-bold mb-6">El servicio incluye:</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg h-fit">
                    <Check className="text-abn-accent" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-base mb-1">Detrics bonificado</h5>
                    <p className="text-slate-300 text-xs">Centralización de datos y ETL avanzado sin costo adicional.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg h-fit">
                    <Check className="text-abn-accent" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-base mb-1">Agente de Marketing AI</h5>
                    <p className="text-slate-300 text-xs">Setup y mantenimiento de agentes inteligentes incluidos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg h-fit">
                    <Check className="text-abn-accent" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-base mb-1">Equipo & Training</h5>
                    <p className="text-slate-300 text-xs">Equipo senior asignado y capacitación continua in-house.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg h-fit">
                    <Palette className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-base mb-1 text-pink-400">Creative Specialist *</h5>
                    <p className="text-slate-300 text-xs">Servicio opcional: Paquete de 50hs mensuales por 2M sin IVA.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 md:p-10 rounded-3xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-abn-accent" size={24} />
                <h4 className="text-xl font-bold text-abn-dark">Consideraciones Comerciales</h4>
              </div>
              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm"><strong>Duración Mínima de contrato:</strong> 3 meses.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm"><strong>Duración Óptima:</strong> 12 a 24 meses.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm"><strong>Tiempo para inicio de servicio:</strong> 10 días.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm"><strong>Recisión de contrato:</strong> Preaviso de 60 días.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm"><strong>Ajuste trimestral por IPC</strong> en modelo fijo.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-slate-600 text-sm"><strong>Cláusula Gatillo</strong> en modelo Variable:</p>
                    <ul className="mt-1 ml-4 space-y-1">
                      <li className="text-slate-500 text-[11px] leading-tight">• Si inflación &lt; 6% trimestral: no se ajusta el fee trimestral.</li>
                      <li className="text-slate-500 text-[11px] leading-tight">• Si inflación &lt; 10% semestral: no se ajusta el fee semestral.</li>
                      <li className="text-slate-500 text-[11px] leading-tight">• Caso contrario: se ajusta por IPC.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm"><strong>Impuestos:</strong> Los valores expresados no incluyen IVA.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-abn-accent mt-2 flex-shrink-0"></div>
                  <div className="bg-teal-100/50 p-3 rounded-xl border border-teal-200/50">
                    <p className="text-abn-dark text-xs leading-relaxed italic">
                      El fee se calcula por la gestión de ABN sobre la inversión neta en todas plataformas, <strong>sin incluir Meta Ads</strong>.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                  <p className="text-teal-600 text-sm font-bold">Las 5 capacitaciones propuestas son bonificadas.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
