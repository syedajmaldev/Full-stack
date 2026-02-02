import Image from "next/image";

const CARD_STYLES = [
  {
    bg: "bg-emerald-100/60",
    text: "text-emerald-900",
    iconBg: "bg-emerald-500",
    shadow: "shadow-emerald-100",
  },
  {
    bg: "bg-blue-100/60",
    text: "text-blue-900",
    iconBg: "bg-blue-500",
    shadow: "shadow-blue-100",
  },
  {
    bg: "bg-purple-100/60",
    text: "text-purple-900",
    iconBg: "bg-purple-500",
    shadow: "shadow-purple-100",
  },
  {
    bg: "bg-pink-100/60",
    text: "text-pink-900",
    iconBg: "bg-pink-500",
    shadow: "shadow-pink-100",
  }
];

const EthicalDev = ({ title, description, EthicalCards }) => {
  return (
    <section className="py-4 bg-white overflow-hidden relative">
      {/* Background decoration (optional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm mb-6">
            <span className="text-indigo-600 text-sm">✨</span>
            <span className="text-indigo-600 font-bold text-sm tracking-wide">
                Ethical AI Development
            </span>
            <span className="text-indigo-600 text-sm">✨</span>
        </div>

        {/* Title */}
        <h2 className="bg-linear-to-r from-[#10B981] to-[#4649f5] bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight max-w-6xl mb-6">
          {title || "Valopt commitment to Ethical AI development"}
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-600 text-center max-w-6xl mb-16 leading-tight">
          {description || "We believe that with great power comes great responsibility. Our AI systems are built on a foundation of ethics, transparency, and human values."}
        </p>

        {/* Cards Grid Container */}
        <div className="relative w-full max-w-4xl">
            
            {/* The Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {EthicalCards?.map((card, index) => {
                    const style = CARD_STYLES[index % CARD_STYLES.length];
                    const iconUrl = card.icons?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icons.url}` : null;

                    return (
                        <div 
                            key={index}
                            className={`flex flex-col items-center justify-center p-4 rounded-3xl ${style.bg} backdrop-blur-sm transition-transform hover:scale-[1.02] duration-300 min-h-[100px]`}
                        >
                           {iconUrl && (
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Image
                                    src={iconUrl}
                                    alt={card.title}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                           )}
                           

                            {/* Title */}
                            <h3 className={`text-xl font-bold ${style.text}`}>
                                {card.title}
                            </h3>
                            
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalDev;
