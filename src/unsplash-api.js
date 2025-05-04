const ACCESS_KEY = "ni9BeekXpWUUUgTZqC5c_oo9g4R1cBh_P0kWDVQxd_I";

export async function fetchImagesFromUnsplash(query, page = 1) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}
