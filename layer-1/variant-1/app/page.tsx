import { Playfair_Display, Source_Sans_Pro } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const sourceSans = Source_Sans_Pro({ weight: ['400', '600'], subsets: ['latin'] });

export default function AgenticFlowLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle grid texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/20 via-transparent to-[#2a2a2a]/10"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`${playfair.className} text-2xl font-bold tracking-tight`}>
            Agentic Flow
          </div>
          <a 
            href="https://muhib.com"
            className="bg-[#ff4444] hover:bg-[#ff3333] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff4444]/25"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${playfair.className} text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent`}>
            Unleash Your Peak Performance with AI Agents
          </h1>
          <p className={`${sourceSans.className} text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed`}>
            Custom AI agents that amplify your capabilities, automate your workflows, and accelerate your success
          </p>
          <a 
            href="https://muhib.com"
            className="inline-block bg-[#ff4444] hover:bg-[#ff3333] px-12 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4444]/30 mb-20"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Floating Product Cards */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff4444] to-[#cc3333] rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>Intentional AI Design</h3>
                <p className={`${sourceSans.className} text-gray-400 leading-relaxed`}>
                  AI agents crafted to align perfectly with your goals and working style, creating seamless integration into your daily workflow.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden group md:mt-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff4444] to-[#cc3333] rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>Powerful Branding</h3>
                <p className={`${sourceSans.className} text-gray-400 leading-relaxed`}>
                  Maintain your professional identity while leveraging AI capabilities that enhance rather than replace your unique value proposition.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff4444] to-[#cc3333] rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>Performance Optimization</h3>
                <p className={`${sourceSans.className} text-gray-400 leading-relaxed`}>
                  Transform AI from a tool into your competitive advantage with intelligent automation that scales your impact exponentially.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfair.className} text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent`}>
            Transform Potential into Performance
          </h2>
          <p className={`${sourceSans.className} text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed`}>
            Join high-performing professionals who've discovered the competitive advantage of intelligent AI agents designed specifically for their success.
          </p>
          <a 
            href="https://muhib.com"
            className="inline-block bg-[#ff4444] hover:bg-[#ff3333] px-12 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4444]/30"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`${playfair.className} text-3xl font-bold mb-4`}>
            Agentic Flow
          </div>
          <p className={`${sourceSans.className} text-gray-400 mb-8`}>
            Transform potential into performance with intelligent AI agents
          </p>
          <div className={`${sourceSans.className} text-sm text-gray-500`}>
            © 2024 Agentic Flow. Designed for high performers.
          </div>
        </div>
      </footer>
    </div>
  );
}