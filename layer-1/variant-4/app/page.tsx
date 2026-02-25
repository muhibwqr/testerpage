import { Bebas_Neue, Manrope } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function AgenticFlowLanding() {
  return (
    <div className={`min-h-screen bg-slate-900 text-slate-100 ${manrope.className} overflow-hidden`}>
      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-white ${bebasNeue.className} tracking-wider`}>
            AGENTIC FLOW
          </div>
          <a 
            href="https://muhib.com"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section with Diagonal Energy */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-800/50 to-transparent transform skew-x-12 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-red-500/10 to-transparent transform -skew-x-12 -translate-x-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none ${bebasNeue.className} tracking-tight`}>
                  <span className="block transform -skew-x-3 text-white">UNLEASH</span>
                  <span className="block transform skew-x-3 text-red-500 ml-8">YOUR PEAK</span>
                  <span className="block transform -skew-x-3 text-white -ml-4">PERFORMANCE</span>
                  <span className={`block text-2xl sm:text-3xl lg:text-4xl font-normal mt-4 ${manrope.className} text-slate-300 transform skew-x-1`}>
                    WITH AI AGENTS
                  </span>
                </h1>
              </div>
              
              <div className="transform skew-x-1 bg-slate-800/50 p-6 border-l-4 border-red-500">
                <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
                  Custom AI agents that amplify your capabilities, automate your workflows, and accelerate your success
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://muhib.com"
                  className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/30 flex items-center justify-center"
                >
                  <span className={`${bebasNeue.className} text-xl tracking-wider`}>GET STARTED</span>
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className={`text-sm font-bold ${bebasNeue.className} tracking-wider text-slate-300`}>AI AGENT ACTIVE</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-700 rounded transform skew-x-1"></div>
                      <div className="h-4 bg-slate-600 rounded w-3/4 transform -skew-x-1"></div>
                      <div className="h-4 bg-red-500/30 rounded w-1/2 transform skew-x-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform -skew-y-1"></div>
          <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-slate-600/30 to-transparent transform skew-y-1"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${bebasNeue.className} tracking-tight transform -skew-x-1`}>
              <span className="text-white">TRANSFORM POTENTIAL</span>
              <br />
              <span className="text-red-500">INTO PERFORMANCE</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group transform hover:-skew-x-1 transition-transform duration-300">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 h-full hover:border-red-500/30 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center transform skew-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded transform -skew-x-3"></div>
                  </div>
                  <h3 className={`text-2xl font-bold ${bebasNeue.className} tracking-wider text-white`}>
                    INTENTIONAL AI DESIGN
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    AI agents that align with your goals and working style, designed with purpose and precision for maximum impact.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group transform hover:skew-x-1 transition-transform duration-300">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 h-full hover:border-red-500/30 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center transform -skew-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded transform skew-x-3"></div>
                  </div>
                  <h3 className={`text-2xl font-bold ${bebasNeue.className} tracking-wider text-white`}>
                    POWERFUL BRANDING
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Maintain your professional identity while leveraging AI capabilities that enhance rather than replace your expertise.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group transform hover:-skew-x-1 transition-transform duration-300">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 h-full hover:border-red-500/30 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center transform skew-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded transform -skew-x-3"></div>
                  </div>
                  <h3 className={`text-2xl font-bold ${bebasNeue.className} tracking-wider text-white`}>
                    PERFORMANCE OPTIMIZATION
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Turn AI into your competitive advantage with optimization that amplifies your natural capabilities and accelerates results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent transform skew-y-1"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-slate-800/30 to-transparent transform -skew-x-12"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${bebasNeue.className} tracking-tight transform skew-x-1`}>
              <span className="text-white">READY TO</span>
              <br />
              <span className="text-red-500">DOMINATE?</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed transform -skew-x-1">
              Join high-performing professionals who've transformed their potential into unstoppable performance with intelligent AI agents.
            </p>
            
            <div className="pt-8">
              <a 
                href="https://muhib.com"
                className="group inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/40"
              >
                <span className={`${bebasNeue.className} text-2xl tracking-wider`}>GET STARTED NOW</span>
                <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 transform skew-x-1"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-2xl font-bold ${bebasNeue.className} tracking-wider text-white transform -skew-x-1`}>
              AGENTIC FLOW
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p className="transform skew-x-1">Transform potential into performance with intelligent AI agents</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}