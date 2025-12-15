import { catApiClient } from "./axiosConfig";
import { API_ENDPOINTS } from "./constants";
import type { CatBreed } from "./types";

export const getCatBreeds = async (): Promise<CatBreed[]> => {
	const response = await catApiClient.get<CatBreed[]>(API_ENDPOINTS.BREEDS);
	return response.data;
};
