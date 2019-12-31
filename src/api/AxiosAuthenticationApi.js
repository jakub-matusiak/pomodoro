import axios from "axios";

const BASE_URL = 'http://localhost:4000';
const AxiosAuthenticationAPI = {
    login: async function(credentials) {
        const response = await axios.post(`${BASE_URL}/login`, credentials);
        const result = await response.data;
        return result;
    }
}

export default AxiosAuthenticationAPI;