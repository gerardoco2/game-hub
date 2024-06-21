import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8360bf1f9b6f4ecea7b451a361eca982'
    }
})