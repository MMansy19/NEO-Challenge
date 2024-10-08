const API_KEY = "DEMO_KEY";
const NEO_API_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;

export const fetchNEOData = async () => {
  try {
    const response = await fetch(NEO_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    return data.near_earth_objects;
  } catch (error) {
    console.error("Error fetching NEO data:", error);
    throw error;
  }
};
