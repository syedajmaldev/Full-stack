import qs from 'qs';

export async function getGlobalData() {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const query = qs.stringify({
    populate: {
      header: {
        populate: {
          logo: { populate: "*" },
          Homelink: { populate: "*" },
          Product: { populate: "*" },
          services: { populate: "*" },
          Company: { populate: "*" },
          Button: { populate: "*" },
        },
      },
      footer: {
        populate: {
          Logo: { populate: "*" },
          social1: { populate: "*" },
        },
      },
    },
  }, {
    encodeValuesOnly: true, 
  });

  try {
    const res = await fetch(`${baseUrl}/api/global?${query}`);
    
    if (!res.ok) {
      console.error(`Fetch failed with status: ${res.status}`);
      return null;
    }
    
    const json = await res.json();
    return json.data; 
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
}