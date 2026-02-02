import Image from "next/image";

const Pillars = ({ title, description, pillars , pillarList }) => {
  const imageUrl = pillars?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${pillars.url}` : null;

  return (
    <section className="py-10 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-4">
                
                {/* Success Strategy Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm">
                   <span className="text-indigo-600 text-lg">✨</span>
                   <span className="text-indigo-600 font-bold tracking-wide text-sm md:text-base">
                     Success Strategy
                   </span>
                   <span className="text-indigo-600 text-lg">✨</span>
                </div>

                {/* Heading */}
                <h1 className="bg-linear-to-r from-[#0089D0] to-[#6366F1] bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-4xl">
                    {title}
                </h1>
                
                {/* Description */}
                {description && (
                  <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed">
                    {description}
                  </p>
                )}

                {/* Centered Image */}
                <div className="relative w-full max-w-3xl mt-2 flex justify-center">
                    {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={pillars.alternativeText || "Valopt Pillars"}
                          width={400}
                          height={400}
                          priority
                        />
                    ) : (
                        // Fallback placeholder
                        <div className="w-[400px] h-[400px] bg-slate-50 flex items-center justify-center rounded-full">
                            <span className="text-slate-400">Pillars Image</span>
                        </div>
                    )}
                </div>

            </div>

            {/* Pillar List */}
            <div className="flex flex-col items-center text-center space-y-6 mt-8 max-w-4xl mx-auto">
                {pillarList?.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="text-lg md:text-xl font-bold text-slate-600 mb-1 ">
                          {item.title}
                        </h3>
                        <p className="text-md md:text-lg text-slate-500 leading-relaxed font-medium">
                          {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Pillars;