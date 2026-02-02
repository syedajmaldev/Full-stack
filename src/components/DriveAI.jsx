import Link from "next/link";

const DriveAI = ({ title, description, AIcard }) => {
  const cta = AIcard?.DriveAICTA;

  return (
    <section className="py-10 md:py-4 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
            {title || "Drive better AI with your trusted partner"}
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-5xl mx-auto">
            {description || "We help businesses work better by empowering them with proven data, technology, and AI solutions."}
          </p>
        </div>

        {/* Central Card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-4xl shadow-xl p-2 md:p-6 lg:p-10 max-w-xl w-full text-center border border-slate-100">
            
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 leading-tight">
              {AIcard?.title || "Every Optimized Future Begins With a Conversation"}
            </h3>

            <div className="space-y-2 mb-8">
              <p className="text-slate-500 text-lg font-medium">
                {AIcard?.desc1 || "Your challenges. Our solutions."}
              </p>
              <p className="text-slate-600 text-lg">
                {AIcard?.desc2 || "Ready to Unlock Your Potential?"}
              </p>
            </div>

            {cta ? (
              <Link 
                href={cta.href || "#"}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                {cta.label || "Say Hello"}
              </Link>
            ) : (
               <button className="bg-blue-500  hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                  Say Hello
               </button>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default DriveAI;
