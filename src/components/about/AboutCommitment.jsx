import Image from "next/image";

export default function AboutCommitment({ title, description1, description2, description3, btnText, imgSlider }) {
    
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 mb-4">{title}</h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mb-8"></div>
        </div>
        
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
             {/* Text Content */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                {description1 && <p>{description1}</p>}
                {description2 && <p>{description2}</p>}
                {description3 && <p>{description3}</p>}
                
                {btnText && (
                    <button className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      {btnText}
                    </button>
                )}
            </div>
            
            {/* Image Slider / Grid */}
            <div className="grid grid-cols-2 gap-4">
                {imgSlider?.map((img, index) => {
                     const imgUrl = img.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}` : null;
                     if (!imgUrl) return null;
                     
                     // Make the first image span full width or use a masonry layout
                     const isLarge = index === 0 && imgSlider.length % 2 !== 0; 
                     
                     return (
                        <div key={index} className={`relative overflow-hidden rounded-xl shadow-lg ${isLarge ? 'col-span-2 aspect-2/1' : 'aspect-square'}`}>
                           <Image
                             src={imgUrl}
                             alt={img.alternativeText || `Commitment Image ${index + 1}`}
                             fill
                             className="object-cover hover:scale-105 transition-transform duration-500"
                           />
                        </div>
                     )
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
