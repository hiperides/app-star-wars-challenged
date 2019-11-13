import { Personagens } from './personagens.interface';

export interface Planetas {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: Personagens[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}