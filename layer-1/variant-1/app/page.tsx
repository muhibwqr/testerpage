import { Oswald, Source_Sans_3 } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function SynthetixLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Grain overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Gradient mesh background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#ff4444] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-[#1a1a1a] to-transparent rounded-full blur-2xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 md:px-12 py-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className={`${oswald.className} text-2xl md:text-3xl font-bold tracking-tight`}>
            Synthetix AI
          </div>
          <a 
            href="https://linkedin.com"
            className="bg-[#ff4444] hover:bg-[#e63939] px-6 py-3 rounded-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#ff4444]/20"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-12 md:pt-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`${oswald.className} text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight`}>
                AI AGENTS<br />
                <span className="text-[#ff4444]">THAT ACTUALLY</span><br />
                WORK
              </h1>
              <p className={`${sourceSans.className} text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl`}>
                Stop wrestling with complex automation. Our intelligent agents handle your daily tasks with precision and intention.
              </p>
              <div className="pt-4">
                <a 
                  href="https://linkedin.com"
                  className="inline-block bg-[#ff4444] hover:bg-[#e63939] px-8 py-4 text-lg font-semibold rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#ff4444]/30 hover:scale-105"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-lg border border-[#2a2a2a] backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ff4444] rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="space-y-3 text-sm font-mono">
                    <div className="text-gray-400">$ synthetix deploy agent</div>
                    <div className="text-green-400">✓ Agent initialized</div>
                    <div className="text-green-400">✓ Context analysis complete</div>
                    <div className="text-green-400">✓ Task automation active</div>
                    <div className="text-[#ff4444]">→ Ready to work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-lg border border-[#2a2a2a] backdrop-blur-sm hover:border-[#ff4444]/30 transition-all duration-500 group">
              <div className="w-12 h-12 bg-[#ff4444]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff4444]/20 transition-colors">
                <div className="w-6 h-6 bg-[#ff4444] rounded-sm" />
              </div>
              <h3 className={`${oswald.className} text-2xl font-bold mb-4`}>INTENTIONAL AI</h3>
              <p className={`${sourceSans.className} text-gray-300 leading-relaxed`}>
                AI that understands context and nuance, making decisions with purpose rather than blind automation.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-lg border border-[#2a2a2a] backdrop-blur-sm hover:border-[#ff4444]/30 transition-all duration-500 group md:mt-12">
              <div className="w-12 h-12 bg-[#ff4444]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff4444]/20 transition-colors">
                <div className="w-6 h-6 bg-[#ff4444] rounded-sm" />
              </div>
              <h3 className={`${oswald.className} text-2xl font-bold mb-4`}>POWERFUL BRANDING</h3>
              <p className={`${sourceSans.className} text-gray-300 leading-relaxed`}>
                Branding tools that elevate your professional presence with sophisticated design intelligence.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-lg border border-[#2a2a2a] backdrop-blur-sm hover:border-[#ff4444]/30 transition-all duration-500 group">
              <div className="w-12 h-12 bg-[#ff4444]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff4444]/20 transition-colors">
                <div className="w-6 h-6 bg-[#ff4444] rounded-sm" />
              </div>
              <h3 className={`${oswald.className} text-2xl font-bold mb-4`}>SEAMLESS INTEGRATION</h3>
              <p className={`${sourceSans.className} text-gray-300 leading-relaxed`}>
                Integration that works behind the scenes, enhancing your workflow without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${oswald.className} text-4xl md:text-6xl font-bold mb-8 leading-tight`}>
            READY TO WORK<br />
            <span className="text-[#ff4444]">SMARTER?</span>
          </h2>
          <p className={`${sourceSans.className} text-xl text-gray-300 mb-12 max-w-2xl mx-auto`}>
            Join the revolution of intelligent automation. Your AI agents are waiting.
          </p>
          <a 
            href="https://linkedin.com"
            className="inline-block bg-[#ff4444] hover:bg-[#e63939] px-12 py-5 text-xl font-bold rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff4444]/40 hover:scale-105"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-12 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`${oswald.className} text-2xl font-bold`}>
              Synthetix AI
            </div>
            <div className={`${sourceSans.className} text-gray-400`}>
              AI agents that make life easier
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}