export default function Footer({ footerData }) {
  if (!footerData) return null;

  const { Logo, description, Copyrights, policy_label, policy_link, social1 } = footerData;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <footer className="bg-black border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            {Logo?.url && (
              <img 
                src={`${baseUrl}${Logo.url}`} 
                alt="Valopt Logo" 
                className="h-10 mb-6" 
              />
            )}
            <p className="text-white max-w-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">{Copyrights}</p>
          <div className="flex items-center gap-4">
             {social1?.map((social, index) => {
                const icon = social.socialLogo;
                return (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                     {icon?.url ? (
                      <img 
                        src={`${baseUrl}${icon.url}`} 
                        alt={social.label || "Social"} 
                        className="h-6 w-6" 
                      />
                    ) : (
                      "LinkedIn" 
                    )}
                  </a>
                );
              })}
            <a 
              href={policy_link} 
              className="text-sm text-white hover:text-indigo-600"
            >
              {policy_label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}