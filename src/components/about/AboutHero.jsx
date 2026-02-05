import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AboutHero({ title, description, aboutBgimg, img, aboutCTA }) {
  const bgUrl = aboutBgimg?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${aboutBgimg.url}` : null;
  const imgUrl = img?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}` : null;

  // Helper to split title for highlighting
  const titleParts = title ? title.split(" with ") : [];
  const mainTitle = titleParts[0];
  const highlightTitle = titleParts.length > 1 ? `with ${titleParts[1]}` : "";

  return (
    <section className="relative py-6 lg:py-4 overflow-hidden ">
      {/* Background Image Layer */}
      {bgUrl && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src={bgUrl} 
            alt="Background pattern" 
            fill 
            className="object-cover opacity-100 mix-blend-overlay"
            priority
          />
        </div>
      )}
      
      {/* Background Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-12 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center items-start space-y-4 max-w-7xl pl-10 ">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-blue-600 font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              <span>About Valopt</span>
            </div>

            <div className="space-y-6">
               {/* Title */}
               <h1 className="font-sans text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                 {mainTitle}{" "}
                 {highlightTitle && (
                   <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                     {highlightTitle}
                   </span>
                 )}
               </h1>

               {/* Secondary Pill (Founded in...) */}
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Founded in 2022</span>
               </div>
               
               {/* Description */}
               <div className="text-lg md:text-xl text-slate-600 leading-normal font-normal">
                 <p>{description}</p>
               </div>
            </div>

            {/* CTA */}
            {aboutCTA && (
                <div className="pt-2 px-6">
                  <Link
                    href={aboutCTA.href || aboutCTA.url || "#"} 
                    className="inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-16 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-105 hover:shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    {aboutCTA.label}
                  </Link>
                </div>
            )}
          </div>
          
          {/* Right Column: Creative Image Layout */}
          <div className="relative flex items-center justify-center lg:justify-end mt-4 lg:mt-2">
             
             {/* Decorative Abstract Elements */}
             <div className="relative w-full max-w-[500px] aspect-square">
                
                {/* Back Decoration Circle/Blob */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl" />

                {/* Main Image Container */}
                <div className="relative w-[350px] h-[350px] rounded-[40px] overflow-hidden shadow-2xl ">
                    {imgUrl ? (
                         <Image
                           src={imgUrl}
                           alt={title || "About Hero"}
                           fill
                           className="object-cover"
                         />
                    ) : (
                        <div className="w-full h-full bg-slate-200" />
                    )}
                    
                    {/* Gradient Overlay on Image */}
                    <div className="absolute inset-0 bg-linear-to-t from-blue-900/60 to-transparent pointer-events-none" />
                </div>

                {/* Floating Glass Cards */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl z-30 shadow-lg animate-pulse-slow" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-linear-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/30 rounded-3xl z-30 shadow-xl" />
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl z-30" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
