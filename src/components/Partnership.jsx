import Image from "next/image";

const Partnership = ({ title, description, longpara, PartnersLogos }) => {
  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            
            {/* Pill/Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-8">
                <span className="text-blue-600 text-lg">✨</span>
                <span className="text-blue-600 font-bold tracking-wide text-sm md:text-base">
                    Winning Together
                </span>
                <span className="text-blue-600 text-lg">✨</span>
            </div>

            {/* Title */}
            <h2 className="bg-linear-to-r from-[#39b2ee] to-[#4649f5] bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-tight max-w-4xl mb-6">
                {title || "Strategic partnerships"}
            </h2>

            {/* Description / Subtitle */}
             <p className="text-lg md:text-xl text-slate-700">
                {description || "Powering your AI success with confidence"}
            </p>
        </div>

        {/* Partners Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-20 px-4">
            {(() => {
                // Flatten all logos from all repeatable components
                const allLogos = PartnersLogos?.flatMap(group => group.Logos || []) || [];

                if (allLogos.length > 0) {
                    return allLogos.map((logo, index) => {
                        const imageUrl = logo?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${logo.url}` : null;
                        
                        if (!imageUrl) return null;

                        return (
                            <div key={index} className="w-20 h-20 relative flex items-center justify-center hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                 <Image
                                    src={imageUrl}
                                    alt={logo.alternativeText || "Partner Logo"}
                                    width={40}
                                    height={40}
                                    className="object-contain max-h-full w-auto"
                                />
                            </div>
                        );
                    });
                } else {
                    return <div className="text-slate-400 italic">No partners found.</div>;
                }
            })()}
        </div>

        {/* Bottom Info Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12">
            <p className="text-md md:text-lg text-slate-600 text-center md:text-justify word-spacing-tight">
               {longpara}
            </p>
        </div>

      </div>
    </section>
  );
};

export default Partnership;
