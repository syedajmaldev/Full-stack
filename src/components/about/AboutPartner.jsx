
import Image from "next/image";
import { Handshake } from "lucide-react";

export default function AboutPartner({ title, description, icons }) {
  // Handle different Strapi response structures (nested data or direct array)
  const iconList = Array.isArray(icons?.data) ? icons.data : (Array.isArray(icons) ? icons : []);

  // Split icons into two columns for the staggered layout
  // We'll just take the first half for left, second for right, or alternate
  // If we want a scrolling effect or static staggering
  const half = Math.ceil(iconList.length / 2);
  const col1 = iconList.slice(0, half);
  const col2 = iconList.slice(half);

  return (
    <section className="relative  py-20 overflow-hidden  max-w-8xl mx-auto  bg-sky-100">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             
             {/* Left Column: Text Content */}
             <div className="max-w-xl space-y-6">
                 {/* Badge */}
                 <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-blue-100/60 mb-2">
                    <Handshake className="w-5 h-5 text-blue-500" />
                    <span className="text-blue-600 font-semibold text-sm tracking-wide">Partnership Network</span>
                 </div>

                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 tracking-tight">
                    {title || "Our Partners"}
                 </h2>
                 
                 <p className="text-slate-500 text-xl md:text-3xl font-medium leading-normal">
                    {description || "Build a strong network together"}
                 </p>
             </div>

             {/* Right Column: Staggered Logo Grid */}
             {/* We create a container that looks like the screenshot: two columns, shifting up/down */}
             <div className="relative h-[500px] overflow-hidden mask-linear-gradient-to-b">
                 
                 {/* The two scrolling columns */}
                 <div className="grid grid-cols-2 gap-2 h-[100px]">
                     
                     {/* Column 1 - Scrolling Up */}
                     <div className="flex flex-col gap-6 animate-infinite-scroll-up">
                        {[...col1, ...col1, ...col1].map((icon, idx) => (
                           <LogoCard key={`c1-${idx}`} icon={icon} />
                        ))}
                     </div>

                     {/* Column 2 - Scrolling Down or Offset Up */}
                     <div className="flex flex-col gap-6 pt-16 animate-infinite-scroll-down">
                        {[...col2, ...col2, ...col2].map((icon, idx) => (
                           <LogoCard key={`c2-${idx}`} icon={icon} />
                        ))}
                     </div>
                 </div>

             </div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({ icon }) {
    if (!icon) return null;
    const url = icon.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${icon.url}` : null;
    if (!url) return null;

    return (
        <div className="w-[50%] aspect-square bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
             <div className="relative w-[90%] h-[90%]">
                 <Image 
                    src={url}
                    alt={icon.alternativeText || "Partner Logo"}
                    fill
                    className="object-contain"
                 />
             </div>
        </div>
    )
}
