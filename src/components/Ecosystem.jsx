import Image from "next/image";

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

const Ecosystem = ({ title, description, ecosystem, ecoCards }) => {
  const imageUrl = ecosystem?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${ecosystem.url}` : null;

  return (
    <section className="py-2 bg-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-10">

             <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm">
                   <span className="text-indigo-600 text-lg">✨</span>
                   <span className="text-indigo-600 font-bold tracking-wide text-sm md:text-base">
                   AI-Powered Evolution
                   </span>
                   <span className="text-indigo-600 text-lg">✨</span>
                </div>
        
        {/* Header */}
        <div className="max-w-5xl space-y-4">
          <h2 className="bg-linear-to-r from-[#10B981] via-[#3b82f6] to-[#6366F1] bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-5xl">
            {title}
          </h2>
          {description && (
             <p className="text-lg text-slate-600 leading-relaxed ">
               {description}
             </p>
          )}
        </div>

        {/* Central Image */}
        {imageUrl && (
          <div className="relative w-full max-w-7xl mt-8">
            <Image
              src={imageUrl}
              alt={ecosystem.alternativeText || "Ecosystem Image"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        )}

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {ecoCards?.map((card, index) => {
            const iconUrl = card.icons?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icons.url}` : null;
            const theme = CARD_THEMES[index % CARD_THEMES.length];

            return (
              <div
                key={index}
                className={`flex items-center gap-4 px-6 py-4 bg-white rounded-3xl border transition-all hover:-translate-y-1 ${theme.borderColor} ${theme.shadow}`}
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
                  <h3 className={`text-base font-bold ${theme.titleColor}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm font-medium ${theme.descColor}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;