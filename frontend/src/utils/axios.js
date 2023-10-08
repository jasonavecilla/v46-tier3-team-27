import axios from "axios";

export const customFetch = axios.create({
  baseURL: `https://v46-tier3-team-27-production.up.railway.app/api/v1/`,
});
