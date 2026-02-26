import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'] });

export default function SynthetixLanding() {
  return (
    <div className={`min-h-screen bg-[#fafafa] text-[#262626] ${lato.className}`}>
      {/* Navigation */}
      <nav className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl md:text-3xl font-bold ${playfair.className}`}>
            Synthetix AI
          </div>
          <a 
            href="https://linkedin.com"
            className="bg-[#b91c1c] text-white px-6 py-3 font-medium hover:bg-[#991b1b] transition-colors duration-200"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 ${playfair.className}`}>
                AI Agents<br />
                <span className="text-[#b91c1c]">That Actually</span><br />
                Work
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl">
                Stop wrestling with complex automation. Our intelligent agents handle your daily tasks with precision and intention.
              </p>
              <a 
                href="https://linkedin.com"
                className="inline-block bg-[#b91c1c] text-white px-12 py-4 text-lg font-medium hover:bg-[#991b1b] transition-colors duration-200"
              >
                Get started
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-white border border-gray-200 p-8 shadow-sm">
                  <div className="space-y-4">
                    <div className="h-3 bg-[#b91c1c] w-16"></div>
                    <div className="h-2 bg-gray-300 w-full"></div>
                    <div className="h-2 bg-gray-300 w-3/4"></div>
                    <div className="h-2 bg-gray-300 w-1/2"></div>
                    <div className="mt-6 flex space-x-2">
                      <div className="w-8 h-8 bg-[#b91c1c] rounded-full"></div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-6xl font-bold mb-20 text-center ${playfair.className}`}>
            Intelligent by Design
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-1 bg-[#b91c1c] mx-auto mb-8"></div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${playfair.className}`}>
                Intentional AI
              </h3>
              <p className="text-lg font-light leading-relaxed">
                Our agents understand context and nuance, making decisions that align with your goals and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-1 bg-[#b91c1c] mx-auto mb-8"></div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${playfair.className}`}>
                Powerful Branding
              </h3>
              <p className="text-lg font-light leading-relaxed">
                Elevate your professional presence with tools that understand the importance of consistent, impactful design.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-1 bg-[#b91c1c] mx-auto mb-8"></div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${playfair.className}`}>
                Seamless Integration
              </h3>
              <p className="text-lg font-light leading-relaxed">
                Works behind the scenes with your existing workflow, enhancing productivity without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl md:text-6xl font-bold mb-8 leading-tight ${playfair.className}`}>
                Precision in<br />
                <span className="text-[#b91c1c]">Every Detail</span>
              </h2>
              <p className="text-xl font-light leading-relaxed mb-8">
                Our AI agents don't just automate—they understand. Each interaction is crafted with the same attention to detail you'd expect from your best team member.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                  <span className="text-lg">Context-aware decision making</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                  <span className="text-lg">Brand-consistent outputs</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                  <span className="text-lg">Seamless workflow integration</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-[#b91c1c] rounded-full"></div>
                  <span className="font-medium">Task Analysis</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 w-full"></div>
                  <div className="h-2 bg-gray-200 w-4/5"></div>
                  <div className="h-2 bg-[#b91c1c] w-3/5"></div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-[#b91c1c] rounded-full"></div>
                  <span className="font-medium">Brand Alignment</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-8 bg-[#b91c1c]"></div>
                  <div className="h-8 bg-gray-200"></div>
                  <div className="h-8 bg-gray-300"></div>
                  <div className="h-8 bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-16 bg-[#262626] text-[#fafafa]">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`text-3xl md:text-4xl font-bold mb-8 ${playfair.className}`}>
            Synthetix AI
          </div>
          <p className="text-lg font-light mb-8 max-w-2xl mx-auto">
            AI agents that make life easier through intelligent automation and thoughtful design.
          </p>
          <a 
            href="https://linkedin.com"
            className="inline-block bg-[#b91c1c] text-white px-12 py-4 text-lg font-medium hover:bg-[#991b1b] transition-colors duration-200"
          >
            Get started
          </a>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm font-light">
              © 2024 Synthetix AI. Intelligent agents for modern workflows.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}