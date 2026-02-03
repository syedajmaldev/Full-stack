import Image from "next/image";
import { Zap } from "lucide-react";
import Link from "next/link"; // Assuming the "Let's have a coffee" is a link/button

export default function AboutTeam({ title, description1, description2, boldText, img }) {
  const imgUrl = img?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}` : null;

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-10">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border border-slate-100">
                  <Zap className="w-4 h-4 text-cyan-500 fill-cyan-500" />
                  <span className="text-blue-600 font-semibold text-sm tracking-wide">Future Forward</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-500 tracking-tight">
                {title || "Innovation & Team"}
              </h2>

              {/* Descriptions */}
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  {description1 && <p>{description1}</p>}
                  {description2 && <p>{description2}</p>}
              </div>

              {/* Bold Callout Text */}
              {/* "Let's have a coffee / Want to join the team?" */}
              {boldText && (
                  <div className="text-2xl md:text-3xl font-bold italic text-slate-900 leading-tight">
                      {/* We can try to split by newline if the user enters it that way, or just render it */}
                       <div dangerouslySetInnerHTML={{ __html: boldText.replace(/\n/g, '<br/>') }} />
                  </div>
              )}

              {/* CTA Pill */}
              <div className="inline-flex flex-wrap items-center gap-4 p-2 pr-6 rounded-full bg-indigo-50/80 border border-indigo-100">
                   <span className="px-4 py-2 text-indigo-600 font-medium">
                       Let&apos;s create something extraordinary together
                   </span>
                   <Link 
                     href="/contact" 
                     className="px-6 py-2 bg-white text-indigo-600 font-bold rounded-full shadow-sm hover:shadow-md transition-shadow"
                   >
                       Let&apos;s have a coffee
                   </Link>
              </div>

          </div>

          {/* Right Column: Image Frame */}
          <div className="relative flex justify-center lg:justify-end">
               {/* The Purple Frame Container */}
               <div className="relative w-full max-w-md aspect-4/5 rounded-[3rem] p-3 bg-linear-to-br from-purple-200 via-indigo-200 to-blue-200 shadow-2xl">
                   {/* Inner White Border/Spacing */}
                   <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white bg-white">
                        {imgUrl ? (
                            <Image 
                                src={imgUrl} 
                                alt={title || "Team"}
                                fill 
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                No Image
                            </div>
                        )}
                   </div>
                   
                   {/* Decorative dots/circles (Blue/Cyan bubbles) */}
                   <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-400 rounded-full blur-sm opacity-80" />
                   <div className="absolute top-1/2 -right-8 w-6 h-6 bg-cyan-400 rounded-full opacity-60" />
                   <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-50/80 rounded-full blur-xl" />
               </div>
          </div>

        </div>
      </div>
    </section>
  );
}
