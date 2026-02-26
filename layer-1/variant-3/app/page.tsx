import { Rajdhani, Inter } from 'next/font/google';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const inter = Inter({ subsets: ['latin'] });

export default function SynthetixAI() {
  return (
    <div className={`min-h-screen bg-slate-50 ${inter.className}`}>
      {/* Navigation */}
      <nav className="relative z-50 px-4 py-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-slate-800 ${rajdhani.className}`}>
            SYNTHETIX AI
          </div>
          <a
            href="https://linkedin.com"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-16 md:px-8 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 leading-none mb-6 ${rajdhani.className}`}>
                AI AGENTS
                <br />
                <span className="text-red-500 transform -rotate-2 inline-block">THAT ACTUALLY</span>
                <br />
                WORK
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Stop wrestling with complex automation. Our intelligent agents handle your daily tasks with precision and intention.
              </p>
              <a
                href="https://linkedin.com"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25"
              >
                Get started
              </a>
            </div>
            
            {/* Floating UI Elements */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              {/* Main Card */}
              <div className="absolute top-8 right-0 w-72 md:w-80 bg-white rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="p-6">
                  <div className="h-4 bg-red-500 rounded mb-4"></div>
                  <div className="h-3 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 bg-slate-200 rounded mb-2 w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                  <div className="mt-6 flex space-x-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Card */}
              <div className="absolute top-32 left-4 w-64 md:w-72 bg-slate-800 text-white rounded-2xl shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="text-sm font-medium">AI Agent Active</div>
                  </div>
                  <div className="h-3 bg-slate-600 rounded mb-2"></div>
                  <div className="h-3 bg-slate-600 rounded mb-2 w-2/3"></div>
                  <div className="h-3 bg-red-500 rounded w-1/3"></div>
                </div>
              </div>
              
              {/* Accent Card */}
              <div className="absolute bottom-8 right-12 w-48 md:w-56 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="p-4">
                  <div className={`text-lg font-bold mb-2 ${rajdhani.className}`}>PRECISION</div>
                  <div className="text-sm opacity-90">Context-aware automation</div>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-xs">99.7% accuracy</div>
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Diagonal Background Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 transform rotate-45 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-300/30 transform -rotate-12 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500/5 to-transparent transform skew-x-12 origin-top-right"></div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:px-8 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold text-slate-800 mb-6 ${rajdhani.className}`}>
              INTELLIGENT
              <span className="text-red-500 transform rotate-1 inline-block ml-4">BY DESIGN</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI agents don't just follow scripts—they understand context, adapt to nuance, and deliver results that matter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="group">
              <div className="bg-slate-50 rounded-2xl p-8 transform hover:-rotate-1 transition-all duration-300 hover:shadow-2xl border border-slate-100">
                <div className="w-12 h-12 bg-red-500 rounded-xl mb-6 transform group-hover:rotate-12 transition-transform duration-300"></div>
                <h3 className={`text-2xl font-bold text-slate-800 mb-4 ${rajdhani.className}`}>
                  INTENTIONAL AI
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Context-aware intelligence that understands nuance and adapts to your specific needs, not generic automation.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group">
              <div className="bg-slate-800 text-white rounded-2xl p-8 transform hover:rotate-1 transition-all duration-300 hover:shadow-2xl">
                <div className="w-12 h-12 bg-red-500 rounded-xl mb-6 transform group-hover:-rotate-12 transition-transform duration-300"></div>
                <h3 className={`text-2xl font-bold mb-4 ${rajdhani.className}`}>
                  POWERFUL BRANDING
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Elevate your professional presence with tools that understand brand consistency and visual impact.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 transform hover:-rotate-1 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25">
                <div className="w-12 h-12 bg-white/20 rounded-xl mb-6 transform group-hover:rotate-12 transition-transform duration-300"></div>
                <h3 className={`text-2xl font-bold mb-4 ${rajdhani.className}`}>
                  SEAMLESS INTEGRATION
                </h3>
                <p className="text-red-100 leading-relaxed">
                  Works behind the scenes with your existing workflow, no disruption, no learning curve.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Background Elements */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-slate-100/50 to-transparent transform -skew-x-12 origin-top-left"></div>
        <div className="absolute bottom-0 right-0 w-1/5 h-1/2 bg-gradient-to-l from-red-500/5 to-transparent transform skew-x-12 origin-bottom-right"></div>
      </section>

      {/* Proof Section */}
      <section className="px-4 py-16 md:px-8 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-6xl font-bold text-slate-800 mb-6 ${rajdhani.className}`}>
                RESULTS
                <br />
                <span className="text-red-500 transform -rotate-1 inline-block">THAT SPEAK</span>
                <br />
                FOR THEMSELVES
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Don't just take our word for it. See how our AI agents transform daily workflows into seamless, intelligent operations.
              </p>
              <a
                href="https://linkedin.com"
                className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get started
              </a>
            </div>
            
            {/* Floating Metrics */}
            <div className="relative h-96 md:h-[400px]">
              <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-2xl p-6 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className={`text-3xl font-bold text-red-500 mb-2 ${rajdhani.className}`}>99.7%</div>
                <div className="text-slate-600 font-medium">Task Accuracy</div>
              </div>
              
              <div className="absolute top-20 left-4 bg-slate-800 text-white rounded-2xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className={`text-3xl font-bold text-red-400 mb-2 ${rajdhani.className}`}>3.2x</div>
                <div className="text-slate-300 font-medium">Faster Workflows</div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl shadow-2xl p-6 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className={`text-3xl font-bold mb-2 ${rajdhani.className}`}>24/7</div>
                <div className="text-red-100 font-medium">Always Active</div>
              </div>
              
              <div className="absolute bottom-0 left-0 bg-slate-100 rounded-2xl shadow-xl p-6 transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <div className={`text-3xl font-bold text-slate-800 mb-2 ${rajdhani.className}`}>Zero</div>
                <div className="text-slate-600 font-medium">Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`text-3xl font-bold mb-4 ${rajdhani.className}`}>
            SYNTHETIX AI
          </div>
          <p className="text-slate-400 mb-8">
            AI agents that make life easier
          </p>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-500 text-sm">
              © 2024 Synthetix AI. Intelligent automation for the modern world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}