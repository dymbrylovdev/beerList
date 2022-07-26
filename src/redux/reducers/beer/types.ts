export interface IBeer {
    id: number;
    name: string;
    tagline: string;
    description: string;
    abv: number;
    food_pairing: string[];
    image_url: string;
}


export type BeerState = {
    beers: IBeer[] | [],
    loading: boolean,
    status: Status,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export type SerchParams = {
    currentPage: string;
    beer_name: string;
}