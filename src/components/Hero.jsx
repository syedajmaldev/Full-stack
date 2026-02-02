import Image from "next/image";

// Defined theme styles outside the component for cleaner code
const CARD_THEMES = [
  {
    borderColor: "border-blue-100",
    shadow: "shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)]",
    titleColor: "text-blue-600",
    descColor: "text-blue-500",
  },
  {
    borderColor: "border-purple-100",
    shadow: "shadow-[0_10px_40px_-15px_rgba(147,51,234,0.2)]",
    titleColor: "text-purple-600",
    descColor: "text-purple-500",
  },
  {
    borderColor: "border-emerald-100",
    shadow: "shadow-[0_10px_40px_-15px_rgba(16,185,129,0.2)]",
    titleColor: "text-emerald-600",
    descColor: "text-emerald-500",
  },
];

export default function Hero({ heading, description, HeroImg , heading2 , heroCards }) {
  const imageUrl = HeroImg?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${HeroImg.url}` : null;

  return (
    <section className="relative w-full py-6 md:py-12 lg:py-14 flex flex-col items-center justify-center bg-white px-6 overflow-hidden">
      
      <div className="container w-full max-w-7xl flex flex-col items-center text-center space-y-8">
        
        {/* Top Heading */}
        <h1 className="font-sans text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1A56DB] via-[#9333EA] to-[#2563EB]" >
          {heading}
        </h1>

        {/* Central Image */}
        <div className="relative w-full flex items-center justify-center  mt-0">
           {imageUrl ? (
             <div className="relative w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-90">
               <Image
                 src={imageUrl} 
                 alt={HeroImg.alternativeText || "Hero Image"} 
                 fill
                 priority
               />
             </div>
           ) : (
             <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-100 rounded-full animate-pulse" />
           )}
        </div>

        {/* Bottom Heading / Tagline */}
        <div className="">
          <h4 className="font-sans text-2xl font-medium text-transparent bg-clip-text bg-linear-to-r from-[#1A56DB] via-[#9333EA] to-[#2563EB] mb-2 ">
            {heading2}
          </h4>
          
          {description && (
             <p className="text-md md:text-lg lg:text-lg text-slate-900 max-w-2xl ">
               {description}
             </p>
          )}
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full mt-0">
          {heroCards?.map((card, index) => {
             const iconUrl = card.icons?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icons.url}` : null;
             
             // Get theme based on index
             const theme = CARD_THEMES[index % CARD_THEMES.length];

             return(
            <div 
              key={index} 
              className={`flex items-center gap-4 px-4 py-4 bg-white rounded-2xl border transition-transform hover:-translate-y-1  ${theme.borderColor} ${theme.shadow}`}
            >
             {iconUrl && (
              <div className="relative w-10 h-10 shrink-0">
                <Image
                    src={iconUrl}
                    alt={card.icons?.alternativeText || "icon"}
                    fill
                    className="object-contain"
                />
              </div>
              )}
              <div className="flex flex-col text-left">
                <h3 className={`text-base font-bold leading-tight ${theme.titleColor}`}>{card.title}</h3>
                <p className={`text-sm font-semibold ${theme.descColor}`}>{card.description}</p>
              </div>
            </div>
           )})}
        </div>

      </div>
    </section>
  );
}