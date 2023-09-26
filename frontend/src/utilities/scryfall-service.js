import * as scryApi from "./scryfall-api"

export async function searchCard(query) {
    try {
      const foundDeck = await scryApi.search(query);
      return foundDeck;
    } catch (err) {
      throw err;
    }
  }