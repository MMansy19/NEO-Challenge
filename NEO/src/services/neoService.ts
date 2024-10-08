const API_KEY = "DEMO_KEY";
const NEO_API_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;

export const fetchNEOData = async () => {
  const response = await fetch(NEO_API_URL);
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error("failed to fetch data");
  }
  return data;
};
