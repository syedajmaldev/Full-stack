import qs from "qs";

export async function getlandingPageData(locale) {
const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const query = qs.stringify({
    locale: locale,
    populate: {
      blocks: {
        on: {
          "blocks.hero": { 
            populate: {
              HeroImg: {
                fields: ["url", "alternativeText", "width", "height"]
              },
              heroCards: {
                populate: {
                  icons: {
                    fields: ["url", "alternativeText"]
                  }
                }
              }
            }
          },
          "blocks.pillars": {
            populate: {
              pillars: {
                fields: ["url", "alternativeText", "width", "height"]
              },
              pillarList: true
            }
          },
          "blocks.partnership": {
            populate: {
              PartnersLogos: {
                populate: {
                  Logos: true
                }
              }
            }
          },
          "blocks.ecosystem": {
            populate: {
              ecosystem: {
                fields: ["url", "alternativeText", "width", "height"]
              },
              ecoCards: {
                populate: {
                  icons: {
                    fields: ["url", "alternativeText"]
                  }
                }
              }
            }
          },
          "blocks.ethical-dev": {
            populate: {
              EthicalCards: {
                populate: {
                  icons: {
                    fields: ["url", "alternativeText"]
                  }
                }
              }
            }
          },
          "blocks.bussiness-transformation": {
            populate: {
              bussinessPlan: {
                fields: ["url"]
              },
              bussinessList: true
            }
          },
          "blocks.innovation": {
            populate: {
              innovationList: true
            }
          },
          "blocks.drive-ai": {
            populate: {
              AIcard: {
                populate: {
                  DriveAICTA: true
                }
              } 
            }
          }
        }
      }
    }
  }, { encodeValuesOnly: true });

  try {
    const url = `${baseUrl}/api/landing-page?${query}`;
    console.log("Fetching Strapi Data...");
    const res = await fetch(url, { cache: 'no-store' });
    
    if (!res.ok) {
        const errorText = await res.text();
        console.error("Strapi Error:", res.status, errorText);
        return { error: `HTTP ${res.status}: ${errorText.substring(0, 200)}...` };
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: `Network Error: ${error.message}` };
  }
}

