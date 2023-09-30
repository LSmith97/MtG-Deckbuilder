const BASE_URL = "https://api.scryfall.com/cards/search?";

export async function search(query) {
  let url = BASE_URL;

  url += `q=${query.query}`;

  for (const key in query.filterParams) {
    url += `+${key}%3D${query.filterParams[key]}`
  }

  const res = await fetch(url, {
    method: "GET",
  });
  if (res.ok) {
    return res.json();
  } else {
    console.log(res);
    throw new Error(res.statusText);
  }
}
