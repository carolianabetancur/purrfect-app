import { useQuery } from "@tanstack/react-query";
import { getCatBreeds } from "./catApi";
import { QUERY_KEYS } from "./constants";

export const useCatBreeds = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.CAT_BREEDS],
		queryFn: getCatBreeds,
		retry: 2,
		staleTime: 5 * 60 * 1000,
		refetchOnWindowFocus: false,
	});
};
