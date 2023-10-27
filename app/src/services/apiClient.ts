import { setupAPIClient } from "./api";
import { SerializeError } from "./errors/SerializeError";

export const api = setupAPIClient();

export const search = async (subject: string) => {
  try {
    const { data } = await api.post(`/search`, { subject });

    return data;
  } catch (error) {
    throw new SerializeError("[ERROR WHILE SEARCH]", error);
  }
};
