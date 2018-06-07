import api from '../config/api';

export default {
  login: credentials => api.post('/login', credentials)
};
