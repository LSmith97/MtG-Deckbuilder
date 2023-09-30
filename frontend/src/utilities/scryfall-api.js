const BASE_URL = "https://api.scryfall.com/cards/search?"

export async function search(query) {
    let url = BASE_URL
    if (query.query) url += `q=${query.query}`
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