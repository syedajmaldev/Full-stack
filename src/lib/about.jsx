import qs from "qs";

export async function getAboutData() {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  
  const query = qs.stringify({
    populate: "*"
  }, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseUrl}/api/about-page?${query}`);
    if (!res.ok) {
      return null;
    }
    const json = await res.json();
    return json.data; 
  } catch (error) {
    console.error("Error fetching contact page:", error);
    return null;
  }
}