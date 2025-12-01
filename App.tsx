import React, { useState, useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { Objective } from './components/sections/Objective';
import { Credentials } from './components/sections/Credentials';
import { ContextPains } from './components/sections/ContextPains';
import { Solution } from './components/sections/Solution';
import { Scope } from './components/sections/Scope';
import { Team } from './components/sections/Team';
import { Roadmap } from './components/sections/Roadmap';
import { Commercial } from './components/sections/Commercial';
import { Comparison } from './components/sections/Comparison';
import { Menu, X, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Objetivo', id: 'objective' },
    { label: 'Credenciales', id: 'credentials' },
    { label: 'Contexto', id: 'context' },
    { label: 'Solución', id: 'solution' },
    { label: 'Equipo', id: 'team' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Propuesta', id: 'commercial' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-abn-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="font-bold text-xl md:text-2xl tracking-tighter text-white cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection('hero')}
          >
             <span>ABN Digital</span>
             <span className="text-abn-accent">→</span>
             <span>UES21</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-abn-accent text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-abn-dark absolute top-full w-full border-t border-slate-800">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-slate-300 hover:text-abn-accent text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Hero id="hero" />
        <Objective id="objective" />
        <Credentials id="credentials" />
        <ContextPains id="context" />
        <Solution id="solution" />
        <Scope id="scope" />
        <Team id="team" />
        <Roadmap id="roadmap" />
        <Commercial id="commercial" />
        <Comparison id="comparison" />
      </main>

      {/* Footer */}
      <footer className="bg-abn-dark text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">ABN Digital</h2>
              <p className="max-w-md">
                Acompañando a las empresas líderes de LATAM con soluciones escalables, integrales y basadas en datos.
              </p>
            </div>
            <div className="text-right">
              <p className="mb-2">Propuesta confidencial para UES21</p>
              <p className="text-sm">© {new Date().getFullYear()} ABN Digital Group.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-abn-accent text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-all z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;