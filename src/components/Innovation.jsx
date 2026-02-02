import { Sparkles, ArrowRight } from "lucide-react";

const Innovation = ({ title, description, innovationList }) => {
  return (
    <section className="py-4 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Top Badge */}
       <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-blue-100 shadow-[0_2px_10px_-2px_rgba(59,28,250,0.1)] mb-8">
            <Sparkles className="w-4 h-4 text-[#3b1cfa]" />
            <span className="text-[#3b1cfa] font-bold text-sm tracking-wide">
                Strategic Modernization
            </span>
            <Sparkles className="w-4 h-4 text-[#3b1cfa]" />
        </div>

        {/* Title */}
        <h2 className="bg-linear-to-r from-[#10B981] to-[#1f23f4] bg-clip-text text-transparent text-2xl md:text-4xl font-bold text-center max-w-5xl mb-2 leading-tight">
          {title || ""}
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-800 text-center max-w-3xl mb-16 font-medium">
          {description || "Empowering clients with sustainable success"}
        </p>

        {/* List Container */}
        <div className="w-full max-w-xl flex flex-col gap-2  ">
            {innovationList?.map((item, index) => (
                <div 
                    key={index}
                    className="group relative flex items-center justify-between p-4 md:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-slate-50 cursor-pointer shadow-lg"
                >
                    <div className="flex items-center gap-6 ">
                        {/* Icon */}
                        <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-300 bg-transparent group-hover:bg-[#3b1cfa] group-hover:text-white text-slate-400">
                             <Sparkles className="w-5 h-5 md:w-7 md:h-7" />
                        </div>
                        
                        {/* Text */}
                        <span className="text-md md:text-lg font-semibold text-slate-800 group-hover:text-black transition-colors">
                            {item.title}
                        </span>
                    </div>

                    {/* Arrow (Visible on Hover) */}
                    <ArrowRight className="w-6 h-6 text-slate-800 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Innovation;
