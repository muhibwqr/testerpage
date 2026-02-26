import { Bebas_Neue, Manrope } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'] });

export default function SynthetixAI() {
  return (
    <div className={`min-h-screen bg-white text-black ${manrope.className}`}>
      {/* Navigation */}
      <nav className="border-b border-black px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl md:text-3xl font-bold ${bebasNeue.className}`}>
            SYNTHETIX AI
          </div>
          <a 
            href="https://linkedin.com"
            className="bg-black text-white px-6 md:px-8 py-3 text-sm md:text-base font-semibold hover:bg-gray-900 transition-colors"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
          <h1 className={`text-5xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none ${bebasNeue.className}`}>
            AI AGENTS<br />THAT ACTUALLY<br />WORK
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Stop wrestling with complex automation. Our intelligent agents handle your daily tasks with precision and intention.
          </p>
          <a 
            href="https://linkedin.com"
            className="inline-block bg-red-600 text-white px-12 py-4 text-lg font-bold hover:bg-red-700 transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-16 h-1 bg-red-600 mb-8"></div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 ${bebasNeue.className}`}>
            PRECISION BY DESIGN
          </h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="border-l-4 border-red-600 pl-8">
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${bebasNeue.className}`}>
                INTENTIONAL AI
              </h3>
              <p className="text-lg leading-relaxed">
                Our agents understand context and nuance, making decisions that align with your goals and values.
              </p>
            </div>
            <div className="border-l-4 border-red-600 pl-8">
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${bebasNeue.className}`}>
                POWERFUL BRANDING
              </h3>
              <p className="text-lg leading-relaxed">
                Elevate your professional presence with tools that enhance rather than replace your expertise.
              </p>
            </div>
            <div className="border-l-4 border-red-600 pl-8">
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${bebasNeue.className}`}>
                SEAMLESS INTEGRATION
              </h3>
              <p className="text-lg leading-relaxed">
                Works behind the scenes, integrating with your existing workflow without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-12 ${bebasNeue.className}`}>
            RESULTS SPEAK LOUDER
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="border-4 border-black p-8 mb-8">
                <div className="text-6xl md:text-8xl font-bold text-red-600 mb-4">95%</div>
                <p className="text-xl">Task completion accuracy</p>
              </div>
              <div className="border-4 border-black p-8">
                <div className="text-6xl md:text-8xl font-bold text-red-600 mb-4">3X</div>
                <p className="text-xl">Faster workflow execution</p>
              </div>
            </div>
            <div className="text-left">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Our AI agents don't just automate—they understand. Every task is executed with the precision and intention you'd expect from your best team member.
              </p>
              <a 
                href="https://linkedin.com"
                className="inline-block bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-900 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`text-3xl md:text-4xl font-bold mb-8 ${bebasNeue.className}`}>
            SYNTHETIX AI
          </div>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg">
            AI agents that make life easier
          </p>
        </div>
      </footer>
    </div>
  );
}