import axios from "axios";
import { BASE_URL } from "../../config";

export class CountryAPI {
  static async fetchRegion(region) {
    const response = await axios.get(`${BASE_URL}/region/${region}`);
    return response.data;
  }

  static async searchCountry(region) {
    const response = await axios.get(`${BASE_URL}/translation/${region}`);
    return response.data;
  }
  

}
