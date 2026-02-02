import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import { getGlobalData } from '@/lib/global';

export default async function Navbar() {
  const data = await getGlobalData();
  
  if (!data.header) return null;

  const { header } = data;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  // Extracting nested items from your query structure
  const logoUrl = header.logo?.url ? `${baseUrl}${header.logo.url}` : null;
  const navItems = [
    ...(header.Homelink ? [header.Homelink] : []),
    ...(header.Product ? [header.Product] : []),
    ...(header.services ? [header.services] : []),
    ...(header.Company ? [header.Company] : [])
  
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
       
          <div className="shrink-0">
            {logoUrl ? (
              <Image src={logoUrl} alt="Logo" className="h-auto w-[150px]" width={200} height={200} />
            ) : (
              <span className="font-bold text-xl text-indigo-600">Valopt</span>
            )}
          </div>
       
          <div className="hidden md:flex flex-1 items-center justify-center space-x-15  ">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href || "#"} 
                className="text-slate-700 hover:text-indigo-600 font-semibold transition-colors "
              >
                {item.Label1} 
              </Link>
            ))}
          </div>

          <div className="hidden md:flex shrink-0">
            <LanguageSelector />
          </div>

        </div>
      </div>
    </nav>
  );
}