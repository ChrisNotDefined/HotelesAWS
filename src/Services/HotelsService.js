import axios from 'axios';

export default class HotelsService {
  static endpoint = 'http://localhost:5000/api/v1/hotels';

  static getHotels() {
    return axios.get(HotelsService.endpoint);
  }

  static getHotelById(id) {
    return axios.get(`${HotelsService.endpoint}/${id}`);
  }
}