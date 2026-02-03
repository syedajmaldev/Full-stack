
export default function AboutValues({ title, description, valuesList }) {
  // We'll extract the first letter of each value title to form the big acronym (S-M-A-R-T)
  // If the data doesn't match perfectly, it will just show whatever letters are there.
  
  return (
    <section className="bg-sky-50 py-16 lg:py-24 overflow-hidden relative">
        {/* Background Pattern Dots - Optional subtle texture */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #0e7490 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
            
            {/* Header Content */}
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
                 {/* Pill */}
                 <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-blue-600 font-semibold text-xs tracking-wider uppercase">What Drives Us</span>
                 </div>

                 <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-cyan-600">
                    {title || "Our Values"}
                 </h2>
                 
                 {description && (
                    <p className="max-w-3xl text-slate-500 text-lg md:text-xl leading-relaxed">
                        {description}
                    </p>
                 )}
            </div>

            {/* Values Stack */}
            <div className="max-w-5xl mx-auto flex flex-col space-y-12">
                {valuesList?.map((item, index) => {
                    // Extract first letter
                    const letter = item.title ? item.title.charAt(0).toUpperCase() : (index + 1);
                    
                    return (
                        <div key={index} className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
                            
                            {/* Big Letter Column */}
                            <div className="shrink-0 relative">
                                <span className="block text-8xl md:text-9xl font-extrabold text-cyan-500/90 leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-cyan-400">
                                    {letter}
                                </span>
                            </div>

                            {/* Connecting Line (Only visible on MD+) */}
                            <div className="hidden md:block h-px w-24 bg-slate-300 relative top-2"></div>

                            {/* Content Column */}
                            <div className="flex-1 space-y-2 pt-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-600 group-hover:text-slate-800 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    );
                })}
            </div>

        </div>
    </section>
  );
}
