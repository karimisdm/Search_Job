import axios from "axios";


const getJobs = async()=>{
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const response = await axios.get(`${baseUrl}/jobs`);
    return response.data;
}

export default getJobs;