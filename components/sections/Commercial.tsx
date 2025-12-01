
import React, { useState } from 'react';
import { SectionProps } from '../../types';
import { Check, Calculator, Info, Palette } from 'lucide-react';

export const Commercial: React.FC<SectionProps> = ({ id }) => {
  const [investment, setInvestment] = useState<string>('');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateFee = (inv: number) => {
    if (inv <= 113000) {
      return 9000;
    } else if (inv <= 175000) {
      const fee = inv * 0.08;
      // Cap at 14000, Floor at 9000
      return Math.min(Math.max(fee, 9000), 14000);
    } else {
      const fee = inv * 0.07;
      // Floor at 14000
      return Math.max(fee, 14000);
    }
  };

  const numericInvestment = parseFloat(investment.replace(/,/g, '')) || 0;
  const calculatedFee = calculateFee(numericInvestment);
  
  // Determine active tier for display logic
  const hasInput = numericInvestment > 0;
  const activeTier = !hasInput ? 0 : numericInvestment <= 113000 ? 1 : numericInvestment <= 175000 ? 2 : 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers
    const val = e.target.value.replace(/[^0-9]/g, '');
    setInvestment(val);
  };

  return (
    <section id={id} className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-abn-dark mb-12 text-center">Propuesta Comercial</h2>
        
        <div className="max-w-5xl mx-auto">
          
          {/* Fee Model Description */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-abn-dark mb-4">Modelo de Fee</h3>
            <p className="text-slate-600 text-lg">
              El esquema de honorarios se define en función del presupuesto mensual invertido en medios digitales gestionado por ABN Digital, combinando un componente fijo y uno variable según el tramo de inversión.
            </p>
          </div>

          {/* Table Summary */}
          <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200 mb-12">
            <table className="w-full text-center border-collapse bg-white min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th colSpan={2} className="py-4 px-4 border-r border-slate-700">Monthly Budget (USD)</th>
                  <th rowSpan={2} className="py-4 px-4 border-r border-slate-700 align-middle">Fixed</th>
                  <th rowSpan={2} className="py-4 px-4 border-r border-slate-700 align-middle">Variable</th>
                  <th colSpan={2} className="py-4 px-4">Total USD</th>
                </tr>
                <tr className="bg-slate-800 text-white text-sm">
                  <th className="py-3 px-4 border-r border-slate-700 border-t border-slate-700 w-1/6">From</th>
                  <th className="py-3 px-4 border-r border-slate-700 border-t border-slate-700 w-1/6">To</th>
                  <th className="py-3 px-4 border-r border-slate-700 border-t border-slate-700 w-1/6">Minimum</th>
                  <th className="py-3 px-4 border-t border-slate-700 w-1/6">Maximum</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-medium text-sm md:text-base">
                <tr className={`border-b border-slate-200 transition-colors duration-300 ${activeTier === 1 ? 'bg-teal-50 ring-2 ring-inset ring-abn-accent/30' : 'hover:bg-slate-50'}`}>
                  <td className="py-4 px-4 border-r border-slate-100">0</td>
                  <td className="py-4 px-4 border-r border-slate-100">113K</td>
                  <td className="py-4 px-4 border-r border-slate-100">9.0K</td>
                  <td className="py-4 px-4 border-r border-slate-100">0%</td>
                  <td className="py-4 px-4 border-r border-slate-100 font-bold text-abn-dark">$9,000</td>
                  <td className="py-4 px-4 font-bold text-abn-dark">$9,000</td>
                </tr>
                <tr className={`border-b border-slate-200 transition-colors duration-300 ${activeTier === 2 ? 'bg-teal-50 ring-2 ring-inset ring-abn-accent/30' : 'hover:bg-slate-50'}`}>
                  <td className="py-4 px-4 border-r border-slate-100">113K</td>
                  <td className="py-4 px-4 border-r border-slate-100">175K</td>
                  <td className="py-4 px-4 border-r border-slate-100 font-bold text-slate-400 text-xs uppercase">No aplica</td>
                  <td className="py-4 px-4 border-r border-slate-100">8%</td>
                  <td className="py-4 px-4 border-r border-slate-100 font-bold text-abn-dark">$9,000</td>
                  <td className="py-4 px-4 font-bold text-abn-dark">$14,000</td>
                </tr>
                <tr className={`border-b border-slate-200 transition-colors duration-300 ${activeTier === 3 ? 'bg-teal-50 ring-2 ring-inset ring-abn-accent/30' : 'hover:bg-slate-50'}`}>
                  <td className="py-4 px-4 border-r border-slate-100">175K</td>
                  <td className="py-4 px-4 border-r border-slate-100 font-bold text-slate-400 text-xs uppercase">-</td>
                  <td className="py-4 px-4 border-r border-slate-100 font-bold text-slate-400 text-xs uppercase">No aplica</td>
                  <td className="py-4 px-4 border-r border-slate-100">7%</td>
                  <td className="py-4 px-4 border-r border-slate-100 font-bold text-abn-dark">$14,000</td>
                  <td className="py-4 px-4 font-bold text-slate-400">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-slate-400 uppercase tracking-widest text-center">Ejemplo</h4>
          </div>

          {/* Tier Cards - Detailed */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            
            {/* Tier 1 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col ${activeTier === 1 ? 'border-abn-accent shadow-lg bg-teal-50/50 scale-[1.02] ring-1 ring-abn-accent' : 'bg-slate-50 border-slate-200 hover:border-abn-accent/50'}`}>
               <div className="mb-4">
                 <h4 className="text-lg font-bold text-abn-dark">Tramo 1</h4>
                 <p className="text-sm text-slate-500">Inversión de USD0 a USD113K</p>
               </div>
               <div className="space-y-3 mb-6 flex-grow">
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-600">Fee Fijo:</span>
                   <span className="font-bold">USD 9.000</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-600">Fee Variable:</span>
                   <span className="font-bold">0%</span>
                 </div>
                 <div className="pt-3 border-t border-slate-200 flex justify-between">
                   <span className="font-bold text-abn-accent">Total Mensual:</span>
                   <span className="font-bold text-abn-dark">USD 9.000</span>
                 </div>
               </div>
            </div>

            {/* Tier 2 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col ${activeTier === 2 ? 'border-abn-accent shadow-lg bg-teal-50/50 scale-[1.02] ring-1 ring-abn-accent' : 'bg-slate-50 border-slate-200 hover:border-abn-accent/50'}`}>
               <div className="mb-4">
                 <h4 className="text-lg font-bold text-abn-dark">Tramo 2</h4>
                 <p className="text-sm text-slate-500">Inversión de USD113K a USD175K</p>
               </div>
               <div className="space-y-3 mb-6 flex-grow">
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-600">Fee Fijo:</span>
                   <span className="font-bold text-slate-400 text-xs uppercase">No aplica</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-600">Fee Variable:</span>
                   <span className="font-bold">8%</span>
                 </div>
                 <div className="pt-3 border-t border-slate-200 space-y-1">
                   <div className="flex justify-between">
                     <span className="font-bold text-abn-accent">Mínimo:</span>
                     <span className="font-bold text-abn-dark">USD 9.000</span>
                   </div>
                    <div className="flex justify-between">
                     <span className="font-bold text-abn-accent">Máximo:</span>
                     <span className="font-bold text-abn-dark">USD 14.000</span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Tier 3 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col ${activeTier === 3 ? 'border-abn-accent shadow-lg bg-teal-50/50 scale-[1.02] ring-1 ring-abn-accent' : 'bg-slate-50 border-slate-200 hover:border-abn-accent/50'}`}>
               <div className="mb-4">
                 <h4 className="text-lg font-bold text-abn-dark">Tramo 3</h4>
                 <p className="text-sm text-slate-500">Inversión {'>'} USD 175K</p>
               </div>
               <div className="space-y-3 mb-6 flex-grow">
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-600">Fee Fijo:</span>
                   <span className="font-bold text-slate-400 text-xs uppercase">No aplica</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-600">Fee Variable:</span>
                   <span className="font-bold">7%</span>
                 </div>
                 <div className="pt-3 border-t border-slate-200 space-y-1">
                   <div className="flex justify-between">
                     <span className="font-bold text-abn-accent">Mínimo:</span>
                     <span className="font-bold text-abn-dark">USD 14.000</span>
                   </div>
                    <div className="flex justify-between">
                     <span className="font-bold text-abn-accent">Máximo:</span>
                     <span className="font-bold text-slate-400">Sin tope</span>
                   </div>
                 </div>
               </div>
            </div>

          </div>

          {/* CALCULATOR SECTION */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
             {/* Background accents */}
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
                     Ingresa tu inversión mensual estimada para calcular el fee correspondiente según nuestro modelo de tramos inteligente.
                   </p>
                   
                   <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg group-focus-within:text-abn-accent transition-colors">$</span>
                      <input 
                        type="text" 
                        value={investment}
                        onChange={handleInputChange}
                        placeholder="100000"
                        className="w-full bg-slate-800 border border-slate-600 text-white text-2xl font-bold rounded-2xl py-5 pl-10 pr-24 focus:ring-2 focus:ring-abn-accent focus:border-transparent outline-none placeholder-slate-600 transition-all shadow-inner"
                      />
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold bg-slate-800 py-1 px-2 rounded-md">USD / Mes</span>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-abn-accent to-transparent opacity-50"></div>
                   
                   <span className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-4">Fee Mensual Estimado</span>
                   <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 mb-6 tracking-tight">
                      {hasInput ? formatCurrency(calculatedFee) : '$0'}
                   </div>
                   
                   <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300 ${activeTier > 0 ? 'bg-abn-accent/20 border-abn-accent/30' : 'bg-slate-800 border-slate-700'}`}>
                      <span className={`w-2 h-2 rounded-full ${activeTier > 0 ? 'bg-abn-accent animate-pulse' : 'bg-slate-600'}`}></span>
                      <span className={`text-xs font-bold uppercase tracking-wide ${activeTier > 0 ? 'text-abn-accent' : 'text-slate-500'}`}>
                        {activeTier === 1 ? 'Tramo 1 (Fijo)' : activeTier === 2 ? 'Tramo 2 (Variable 8%)' : activeTier === 3 ? 'Tramo 3 (Variable 7%)' : 'Ingrese Inversión'}
                      </span>
                   </div>
                </div>
             </div>
          </div>

          {/* Inclusions */}
          <div className="bg-abn-dark text-white p-8 md:p-10 rounded-3xl">
            <h4 className="text-xl font-bold mb-6">El servicio incluye:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                   <Check className="text-abn-accent" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Detrics bonificado</h5>
                  <p className="text-slate-300 text-sm">Ahorro estimado de <strong>$1.000 USD/mes</strong> en herramientas de centralización de datos (vs Supermetrics).</p>
                </div>
              </div>
               <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                   <Check className="text-abn-accent" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Agente de Marketing AI</h5>
                  <p className="text-slate-300 text-sm">Ahorro de <strong>$10.000 USD</strong> de setup + <strong>$1.500 USD/mes</strong> de mantenimiento.</p>
                </div>
              </div>
               <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                   <Check className="text-abn-accent" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Equipo & Training</h5>
                  <p className="text-slate-300 text-sm">Equipo asignado full-service y capacitación continua al equipo in-house.</p>
                </div>
              </div>
               <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                   <Check className="text-abn-accent" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Flexibilidad</h5>
                  <p className="text-slate-300 text-sm">Capacidad de sumar equipo en picos de demanda (preaviso 60 días) como costo extra.</p>
                </div>
              </div>
              {/* New Item */}
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                   <Info className="text-abn-accent" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Alcance de Inversión</h5>
                  <p className="text-slate-300 text-sm">Contempla únicamente la inversión gestionada en su totalidad por ABN, como Google.</p>
                </div>
              </div>
              {/* Creative Specialist Pricing */}
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                   <Palette className="text-pink-400" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-pink-400">Creative Specialist *</h5>
                  <p className="text-slate-300 text-sm">Servicio opcional adicional: <strong>USD 40 / hora</strong>.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
