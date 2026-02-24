import { useEffect } from "react";
export default function Page() {
  useEffect(() => {
    const m1 = document.createElement("meta");
    m1.setAttribute("name", "variant_id");
    m1.setAttribute("content", "1");
    document.head.appendChild(m1);
    const m2 = document.createElement("meta");
    m2.setAttribute("name", "generation_id");
    m2.setAttribute("content", "62b890a4-adbc-4dca-a827-da4f4ff5f9d1");
    document.head.appendChild(m2);
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Synthetix AI</h1>
        
        <p className="mt-6 text-gray-600">test agents that do absolute wonders\n\nlandiright</p>
        <div className="flex flex-wrap gap-3 justify-center">
        <a href="https://linkedin.com" className="inline-block rounded-lg btn-buy bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 font-medium" data-action="purchase">Get started</a>
        </div>
      </main>
    </div>
  );
}
