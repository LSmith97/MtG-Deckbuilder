const BASE_URL = "https://api.scryfall.com/cards/named?fuzzy="

export async function search(query) {
    const url = BASE_URL + query;
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