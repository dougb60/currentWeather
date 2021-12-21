import axios from 'axios';
import { api_constants } from '../constants';

const api = axios.create({
  baseURL: api_constants.base_url,
});

export default api;
