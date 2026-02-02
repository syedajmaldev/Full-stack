import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Ecosystem from "@/components/Ecosystem";
import Partnership from "@/components/Partnership";
import EthicalDev from "@/components/EthicalDev";
import BusinessTransformation from "@/components/BusinessTransformation";
import Innovation from "@/components/Innovation";
import DriveAI from "@/components/DriveAI";
import { getlandingPageData } from "@/lib/landingPage";

export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams?.lang || "en";
  const data = await getlandingPageData(lang);

  if (data?.error) {
    return (
      <div className="p-10 text-center text-red-600">
        <h2 className="text-xl font-bold">Error Loading Content</h2>
        <p>{data.error}</p>
        <p className="text-sm text-gray-500 mt-2">Check console for details.</p>
      </div>
    );
  }

  if (!data || !data.blocks) {
    return <div className="p-10 text-center">No content found. (Data is null or blocks missing)</div>;
  }

  return (
    <main>
      {data.blocks.map((block, index) => {
        switch (block.__component) {
          case "blocks.hero":
            return <Hero key={index} {...block} />;

          case "blocks.pillars":
            return <Pillars key={index} {...block} />;

          case "blocks.ecosystem":
            return <Ecosystem key={index} {...block} />;

          case "blocks.partnership":
            return <Partnership key={index} {...block} />;

          case "blocks.ethical-dev":
            return <EthicalDev key={index} {...block} />;

          case "blocks.bussiness-transformation":
            return <BusinessTransformation key={index} {...block} />;

          case "blocks.innovation":
            return <Innovation key={index} {...block} />;

          case "blocks.drive-ai":
            return <DriveAI key={index} {...block} />; 

          default:
            return null;
        }
      })}
   
    </main>
  );
}