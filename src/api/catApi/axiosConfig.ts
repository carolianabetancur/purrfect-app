import { CAT_API_KEY } from "@env";
import axios from "axios";

const CAT_API_BASE_URL = "https://api.thecatapi.com/v1";

export const catApiClient = axios.create({
	baseURL: CAT_API_BASE_URL,
	headers: {
		"x-api-key": CAT_API_KEY,
	},
});
