
import Image from "next/image";
import { Handshake } from "lucide-react";

export default function AboutPartner({ title, description, icons }) {
  // Handle different Strapi response structures (nested data or direct array)
  const iconList = Array.isArray(icons?.data) ? icons.data : (Array.isArray(icons) ? icons : []);

  console.log("AboutPartner processed icons:", iconList.length);

  // Split icons into two columns for the staggered layout
  // We'll just take the first half for left, second for right, or alternate
  // If we want a scrolling effect or static staggering
  const half = Math.ceil(iconList.length / 2);
  const col1 = iconList.slice(0, half);
  const col2 = iconList.slice(half);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-linear-to-br from-blue-50/50 via-white to-cyan-50/30">
      
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

                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 tracking-tight">
                    {title || "Our Partners"}
                 </h2>
                 
                 <p className="text-slate-500 text-xl md:text-2xl font-light leading-normal">
                    {description || "Build a strong network together"}
                 </p>
             </div>

             {/* Right Column: Staggered Logo Grid */}
             {/* We create a container that looks like the screenshot: two columns, shifting up/down */}
             <div className="relative h-[600px] overflow-hidden mask-linear-gradient-to-b">
                 
                 {/* The two scrolling columns */}
                 {/* If we want them to scroll nicely, we can add animation. 
                     For now, let's just place them in a static staggered grid as per the static design request.
                     If animation is needed later, we can add marquee classes.
                  */}
                 <div className="grid grid-cols-2 gap-6 h-full">
                     
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

                 {/* Top/Bottom Fade Masks */}
                 <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white to-transparent z-10" />
                 <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent z-10" />
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
        <div className="w-full aspect-square bg-white rounded-4xl shadow-sm border border-slate-100 flex items-center justify-center p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
             <div className="relative w-full h-full">
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
