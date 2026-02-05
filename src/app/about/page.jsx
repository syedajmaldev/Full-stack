import { getAboutData } from "@/lib/about";
import AboutHero from "@/components/about/AboutHero";
import AboutCommitment from "@/components/about/AboutCommitment";
import AboutValues from "@/components/about/AboutValues";
import AboutApproach from "@/components/about/AboutApproach";
import AboutPartner from "@/components/about/AboutPartner";
import AboutTeam from "@/components/about/AboutTeam";

export default async function AboutPage() {
  const data = await getAboutData();

    if (data?.error) {
    return (
      <div className="p-10 text-center text-red-600">
        <h2 className="text-xl font-bold">Error Loading Content</h2>
        <p>{data.error}</p>
        <p className="text-sm text-gray-500 mt-2">Check console for details.</p>
      </div>
    );
  }

   if (!data || !data.aboutBlocks) {
    return <div className="p-10 text-center">No content found. (Data is null or blocks missing)</div>;
  }

  return (
    <main className="font-sans antialiased text-slate-900 w-full">
      {/* Dynamic Blocks */}
      {data.aboutBlocks.map((block, index) => {
        switch (block.__component) {
          case "about.about-hero":
            return <AboutHero key={index} {...block} />;
          case "about.commitment":
            return <AboutCommitment key={index} {...block} />;
          case "about.values":
            return <AboutValues key={index} {...block} />;
          case "about.approach":
            return <AboutApproach key={index} {...block} />;
          case "about.partners":
            return <AboutPartner key={index} {...block} />;
          case "about.team":
            return <AboutTeam key={index} {...block} />;
          default:
            return null;
        }
      })}
    </main>
  );
}

