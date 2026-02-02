import Image from "next/image";

const BusinessTransformation = ({ title, description, bussinessList, bussinessPlan }) => {
  return (
    <section className="py-6 md:py-12 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="bg-linear-to-r from-[#10B981] to-[#1f23f4] bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {title || "Start Your Business Transformation Today"}
          </h2>
          <p className="text-slate-500 text-xl">
            {description || "Get Started in 4 Simple Steps"}
          </p>
        </div>

        {/* Steps Visualization */}
        <div className="flex flex-col items-center  w-full max-w-6xl mx-auto">
          
          {/* Top Image */}
          {bussinessPlan?.url && (
            <div className="relative w-full max-w-3xl h-[150px] md:h-[250px] lg:h-[300px] mb-8">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${bussinessPlan.url}`}
                    alt={bussinessPlan.alternativeText || "Process Flow"}
                    fill
                    className="object-contain"
                    priority
                  />
            </div>
          )}

          {/* Steps Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {bussinessList?.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                 {/* Number Badge */}
                 <div className="mb-4 p-4 rounded-full bg-white shadow-sm border border-slate-100 w-16 h-16 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {index + 1}
                 </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 max-w-[200px] mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BusinessTransformation;
