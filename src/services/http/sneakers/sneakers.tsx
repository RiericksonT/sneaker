import axios from "axios";
import { instance } from "./../axios/config";

export const SneaKersService = {
  getSneakers: async () => {
    const response = await axios
      .get(`${instance.defaults.baseURL}/sneakers`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
    return response;
  },
};
