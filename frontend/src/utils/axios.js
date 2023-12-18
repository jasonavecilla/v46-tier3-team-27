import axios from "axios";
//let url = `https://v46-tier3-team-27-production.up.railway.app`;
 let url = `http://localhost:8000`;
export const customFetch = axios.create({
  baseURL: `${url}/api/v1/`,
});
