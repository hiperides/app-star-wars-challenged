import { Planetas } from './planetas.interface';
import { Naves } from './naves.interface';

export interface Personagens {
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: Planetas;
    films: string[];
    species: string[];
    vehicles: any[];
    starships: Naves[];
    created: Date;
    edited: Date;
    url: string;
}