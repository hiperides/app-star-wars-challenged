import { Naves } from 'src/app/shared/interface/naves.interface';


export interface RootNaves {
    count: number;
    next: string;
    previous: any;
    results: Naves[];
}