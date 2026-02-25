import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function AgenticFlow() {
  return (
    <div className={`min-h-screen bg-[#1a1a1a] text-[#e5e5e5] ${openSans.className} relative overflow-hidden`}>
      {/* Grain overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-white ${montserrat.className}`}>
            Agentic Flow
          </div>
          <a 
            href="https://muhib.com"
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/25 transform hover:scale-105"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight ${montserrat.className}`}>
              Unleash Your Peak
              <br />
              <span className="text-[#3b82f6]">Performance</span> with AI Agents
            </h1>
            <p className="text-xl sm:text-2xl text-[#b3b3b3] mb-8 max-w-3xl mx-auto leading-relaxed">
              Custom AI agents that amplify your capabilities, automate your workflows, and accelerate your success
            </p>
            <a 
              href="https://muhib.com"
              className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/30 transform hover:scale-105"
            >
              Get started
            </a>
          </div>

          {/* Floating UI Previews */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main central preview */}
            <div className="relative z-20 bg-[#2a2a2a] rounded-2xl p-8 shadow-2xl border border-[#3a3a3a] transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
                </div>
                <div className="text-sm text-[#888] font-mono">AI Agent Dashboard</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Performance Agent</div>
                      <div className="text-[#888] text-sm">Optimizing workflow efficiency</div>
                    </div>
                  </div>
                  <div className="text-[#27ca3f] font-mono text-sm">+247% productivity</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Brand Agent</div>
                      <div className="text-[#888] text-sm">Maintaining professional identity</div>
                    </div>
                  </div>
                  <div className="text-[#3b82f6] font-mono text-sm">Active</div>
                </div>
              </div>
            </div>

            {/* Floating preview cards */}
            <div className="absolute -top-8 -left-8 w-64 bg-[#2a2a2a] rounded-xl p-6 shadow-xl border border-[#3a3a3a] transform rotate-[-5deg] hover:rotate-0 transition-all duration-500 z-10">
              <div className="text-[#3b82f6] font-semibold mb-2">Workflow Automation</div>
              <div className="text-sm text-[#b3b3b3] mb-4">AI agents handling repetitive tasks</div>
              <div className="space-y-2">
                <div className="h-2 bg-[#3b82f6] rounded-full w-3/4"></div>
                <div className="h-2 bg-[#1a1a1a] rounded-full w-full"></div>
                <div className="h-2 bg-[#3b82f6] rounded-full w-1/2"></div>
              </div>
            </div>

            <div className="absolute -top-4 -right-12 w-72 bg-[#2a2a2a] rounded-xl p-6 shadow-xl border border-[#3a3a3a] transform rotate-[3deg] hover:rotate-0 transition-all duration-500 z-10">
              <div className="text-[#8b5cf6] font-semibold mb-2">Performance Analytics</div>
              <div className="text-sm text-[#b3b3b3] mb-4">Real-time insights and optimization</div>
              <div className="flex space-x-2">
                <div className="flex-1 h-16 bg-[#1a1a1a] rounded flex items-end p-2">
                  <div className="w-full h-8 bg-[#3b82f6] rounded-sm"></div>
                </div>
                <div className="flex-1 h-16 bg-[#1a1a1a] rounded flex items-end p-2">
                  <div className="w-full h-12 bg-[#8b5cf6] rounded-sm"></div>
                </div>
                <div className="flex-1 h-16 bg-[#1a1a1a] rounded flex items-end p-2">
                  <div className="w-full h-6 bg-[#3b82f6] rounded-sm"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-16 w-56 bg-[#2a2a2a] rounded-xl p-6 shadow-xl border border-[#3a3a3a] transform rotate-[7deg] hover:rotate-0 transition-all duration-500 z-10">
              <div className="text-[#27ca3f] font-semibold mb-2">Goal Alignment</div>
              <div className="text-sm text-[#b3b3b3] mb-4">AI that understands your objectives</div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-[#27ca3f] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm text-white">Target achieved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 ${montserrat.className}`}>
              Transform Potential into
              <span className="text-[#3b82f6]"> Performance</span>
            </h2>
            <p className="text-xl text-[#b3b3b3] max-w-3xl mx-auto">
              Our AI agents don't just automate—they elevate your entire approach to high performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#3a3a3a] hover:border-[#3b82f6] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#3b82f6]/10">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className={`text-xl font-bold text-white mb-4 ${montserrat.className}`}>
                Intentional AI Design
              </h3>
              <p className="text-[#b3b3b3] leading-relaxed">
                AI agents that align with your goals and working style, designed with purpose and precision to amplify your natural capabilities.
              </p>
            </div>

            <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#3a3a3a] hover:border-[#8b5cf6] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#8b5cf6]/10">
              <div className="w-12 h-12 bg-[#8b5cf6] rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className={`text-xl font-bold text-white mb-4 ${montserrat.className}`}>
                Powerful Branding Integration
              </h3>
              <p className="text-[#b3b3b3] leading-relaxed">
                Maintain your professional identity while leveraging AI. Our agents seamlessly integrate with your brand and communication style.
              </p>
            </div>

            <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#3a3a3a] hover:border-[#27ca3f] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#27ca3f]/10">
              <div className="w-12 h-12 bg-[#27ca3f] rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className={`text-xl font-bold text-white mb-4 ${montserrat.className}`}>
                Performance Optimization
              </h3>
              <p className="text-[#b3b3b3] leading-relaxed">
                Turn AI into your competitive advantage. Our agents continuously optimize to help you achieve peak performance in your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 ${montserrat.className}`}>
            Ready to Unleash Your
            <span className="text-[#3b82f6]"> Peak Performance</span>?
          </h2>
          <p className="text-xl text-[#b3b3b3] mb-8 max-w-2xl mx-auto">
            Join high-performing professionals who are already using AI agents to amplify their capabilities and accelerate their success.
          </p>
          <a 
            href="https://muhib.com"
            className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/30 transform hover:scale-105"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`text-2xl font-bold text-white mb-4 md:mb-0 ${montserrat.className}`}>
              Agentic Flow
            </div>
            <div className="text-[#888] text-center md:text-right">
              <p className="mb-2">Transform potential into performance with intelligent AI agents</p>
              <p className="text-sm">© 2024 Agentic Flow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}