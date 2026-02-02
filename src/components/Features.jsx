
export default function Features({ feature_title, feature_desc, featuressss }) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <section className="py-20 bg-white md:py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header - Center Aligned */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            {feature_title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
            {feature_desc}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuressss?.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-8 p-3 w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl text-blue-600">
                 {item.feature_image ? (
                   <img
                     src={`${baseUrl}${item.feature_image.url}`} 
                     alt={item.feature_title}
                     className="w-8 h-8 object-contain"
                   />
                 ) : (
                   // Fallback generic icon if no image
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M12 2v20M2 12h20" />
                   </svg>
                 )}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.feature_title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-8 grow">
                {item.feature_desc}
              </p>

              {/* Link */}
              <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors mt-auto group-hover:gap-2">
                Learn More 
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}