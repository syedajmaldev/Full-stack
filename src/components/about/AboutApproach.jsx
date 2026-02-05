import Image from "next/image";

export default function AboutApproach({ title, description, img, cards }) {
  const arrowImgUrl = img?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}` : null;

  return (
    <section className="relative py-6 lg:py-14 overflow-hidden bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-blue-600 font-semibold text-xs tracking-wider uppercase">Behind Brand</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-500">
                {title || "Our Approach"}
            </h2>

            {description && (
                <p className="max-w-3xl text-slate-500 text-lg md:text-xl leading-relaxed">
                    {description}
                </p>
            )}

            {/* Approach Main Image */}
            {arrowImgUrl && (
                <div className="relative w-[80%] max-w-4xl h-[300px] mt-0">
                     <Image 
                        src={arrowImgUrl}
                        alt="Approach Diagram"
                        fill
                        className="object-contain"
                     />
                </div>
            )}
        </div>

        {/* Cards Grid */}
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
           {cards?.map((card, index) => (
              <ApproachCard key={index} card={card} index={index} />
           ))}
        </div>

      </div>
    </section>
  );
}

function ApproachCard({ card, index }) {
   const iconUrl = card.icons?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icons.url}` : null;
   
   // Cycle through specific background tints
   const bgColors = [
       "bg-cyan-50/80 border-cyan-100 hover:border-cyan-200",
       "bg-teal-50/80 border-teal-100 hover:border-teal-200",
       "bg-sky-50/80 border-sky-100 hover:border-sky-200",
       "bg-purple-50/80 border-purple-100 hover:border-purple-200"
   ];
   
   const colorClass = bgColors[index % bgColors.length];

   return (
       <div 
            className={`group relative px-4 py-2 rounded-3xl border transition-all duration-300 hover:shadow-lg ${colorClass}`}
       >
           <div className="flex flex-col items-start gap-6">
               
               {/* Icon Circle */}
               <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/60 shadow-sm group-hover:scale-110 transition-transform duration-300">
                   {iconUrl ? (
                       <div className="relative w-10 h-10">
                           <Image 
                             src={iconUrl} 
                             alt={card.title || "Step Icon"}
                             fill
                             className="object-contain"
                           />
                       </div>
                   ) : (
                       <span className="text-2xl font-bold text-slate-400">{index + 1}</span>
                   )}
               </div>
               
               {/* Text Content */}
               <div className="space-y-1">
                   <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                       {card.title}
                    </h3>
                   <p className="text-slate-600 text-lg leading-relaxed">
                       {card.description}
                   </p>
               </div>
           </div>
       </div>
   );
}
