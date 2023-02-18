import axios from "axios";
// Setting up base Url for fetching data
const Axios = axios.create({
    // baseURL: "https://myworkoutfriend-backend-production.up.railway.app/api/v1/",
    baseURL: "https://api.myworkoutfriend.in/api/v1/",
    // baseURL: "http://localhost:9000/api/v1/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${typeof window !== 'undefined' && localStorage.getItem('token')}`,
    },
});
export default Axios;