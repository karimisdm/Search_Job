import axios from "axios";

const url= "http://localhost:3000/jobs"

const fetchJobs = async()=>{
    const response = await axios.get(url);
    console.log(response.data);
};

fetchJobs();