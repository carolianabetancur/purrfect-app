export interface CatBreed {
	id: string;
	name: string;
	origin: string;
	temperament: string;
	description: string;
	life_span: string;
	intelligence: number;
	adaptability: number;
	energy_level: number;
	affection_level: number;
	dog_friendly: number;
	image?: {
		url: string;
	};
}
