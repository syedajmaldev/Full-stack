import { getAboutData } from "@/lib/about";

export default async function AboutPage() {
  const data = await getAboutData();
  
  // Default fallbacks while maintaining the skeletal structure if data is missing
  const heading = data?.Heading || {};
  const subHeading = data?.description || {};

  return (
    <main className="font-sans antialiased text-slate-900 bg-white">
      {/* --- Mission Section --- */}
      <section className="relative py-4 px-6 md:px-12 lg:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-[0.2em] uppercase mb-8 shadow-sm">
            Our Mission
          </span>
          <h1 className="font-sans text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1A56DB] via-[#9333EA] to-[#2563EB]">
            {heading} 
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            {subHeading}
          </p>
        </div>
      </section>
    </main>
  );
}

