import axios from "axios";
import { instance } from "./../axios/config";

export const SneaKersService = {
  getSneakers: async () => {
    try {
      const response = await axios.get(`${instance.defaults.baseURL}/sneakers`);
      return response.data;
    } catch (error) {
      throw new Error("Error getting sneakers");
    }
  },
};
