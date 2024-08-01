import axios from "axios";
import { BASE_URL } from "../../config";

export class CountryAPI {
  static async fetchRegion(region) {
    const response = await axios.get(`${BASE_URL}/${region}`);
    return response.data;
  }
}
