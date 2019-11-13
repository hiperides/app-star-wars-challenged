import { Personagens } from 'src/app/shared/interface/personagens.interface';

export interface RootPersonagens {
    count: number;
    next: any;
    previous: string;
    results: Personagens[];
}