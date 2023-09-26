import * as deckAPI from "./deck-api"

export async function getDecks() {
  try {
    const data = await deckAPI.index();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function createDeck(data) {
  try {
    const newDeck = await deckAPI.create(data);
    return newDeck;
  } catch (err) {
    throw err;
  }
}

export async function getDeck(id) {
  try {
    const foundDeck = await deckAPI.detail(id);
    return foundDeck;
  } catch (err) {
    throw err;
  }
}

export async function deleteDeck(id) {
  try {
    const deletedDeck = await deckAPI.destroy(id);
    return deletedDeck;
  } catch (err) {
    throw err;
  }
}

export async function updateDeck(id, data) {
  try {
    const updatedDeck = await deckAPI.update(id, data);
    return updatedDeck;
  } catch (err) {
    throw err;
  }
}