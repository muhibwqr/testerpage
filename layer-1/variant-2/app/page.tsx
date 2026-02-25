import { Oswald, Inter } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '600'] });
const inter = Inter({ subsets: ['latin'] });

export default function AgenticFlow() {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-bold text-black ${oswald.className}`}>
              AGENTIC FLOW
            </div>
            <a
              href="https://muhib.com"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-medium transition-colors duration-200"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black leading-none mb-8 ${oswald.className}`}>
                UNLEASH YOUR
                <span className="block text-red-600">PEAK</span>
                PERFORMANCE
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed">
                Custom AI agents that amplify your capabilities, automate your workflows, and accelerate your success
              </p>
              <a
                href="https://muhib.com"
                className="inline-block bg-black hover:bg-gray-900 text-white px-12 py-4 text-lg font-medium transition-colors duration-200"
              >
                Get started
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-red-600 transform rotate-3"></div>
              <div className="relative bg-black p-8 lg:p-12 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="text-sm text-gray-300">AI AGENT ACTIVE</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-800 p-4 border-l-4 border-red-600">
                      <div className="text-sm text-gray-400 mb-1">WORKFLOW OPTIMIZATION</div>
                      <div className="text-white">Automated 47 tasks today</div>
                    </div>
                    <div className="bg-gray-800 p-4 border-l-4 border-red-600">
                      <div className="text-sm text-gray-400 mb-1">PERFORMANCE BOOST</div>
                      <div className="text-white">+340% efficiency increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-semibold text-black mb-6 ${oswald.className}`}>
              TRANSFORM POTENTIAL
              <span className="block text-red-600">INTO PERFORMANCE</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group">
              <div className="bg-white p-8 lg:p-10 border-4 border-black hover:border-red-600 transition-colors duration-300">
                <div className="w-16 h-16 bg-red-600 mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <h3 className={`text-2xl lg:text-3xl font-semibold text-black mb-4 ${oswald.className}`}>
                  INTENTIONAL
                  <span className="block">AI DESIGN</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  AI agents that align with your goals and working style, designed with purpose and precision
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 lg:p-10 border-4 border-black hover:border-red-600 transition-colors duration-300">
                <div className="w-16 h-16 bg-black mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-600"></div>
                </div>
                <h3 className={`text-2xl lg:text-3xl font-semibold text-black mb-4 ${oswald.className}`}>
                  POWERFUL
                  <span className="block">BRANDING</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Maintain your professional identity while leveraging AI capabilities that enhance your brand
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 lg:p-10 border-4 border-black hover:border-red-600 transition-colors duration-300">
                <div className="w-16 h-16 bg-red-600 mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-black"></div>
                </div>
                <h3 className={`text-2xl lg:text-3xl font-semibold text-black mb-4 ${oswald.className}`}>
                  PERFORMANCE
                  <span className="block">OPTIMIZATION</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Turn AI into your competitive advantage with systems built for peak performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 ${oswald.className}`}>
            READY TO
            <span className="block text-red-600">DOMINATE?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            Join high-performing professionals who've transformed their potential into measurable performance
          </p>
          <a
            href="https://muhib.com"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-16 py-5 text-xl font-medium transition-colors duration-200"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-2xl font-bold text-black mb-4 md:mb-0 ${oswald.className}`}>
              AGENTIC FLOW
            </div>
            <div className="text-gray-600">
              Transform potential into performance with intelligent AI agents
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}