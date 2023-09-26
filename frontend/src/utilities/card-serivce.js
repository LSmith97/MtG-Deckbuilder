import * as cardAPI from "./card-api"

export async function createCard(data) {
  try {
    const newCard = await ClipboardAPI.create(data);
    return newCard;
  } catch (err) {
    throw err;
  }
}