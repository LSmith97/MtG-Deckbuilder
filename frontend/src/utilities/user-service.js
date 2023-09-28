import * as userApi from "./user-api"

export async function getUser(id) {
    try {
      const foundUser = await userApi.detail(id);
      return foundUser;
    } catch (err) {
      throw err;
    }
  }