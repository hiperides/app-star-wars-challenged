import { Planetas } from 'src/app/shared/interface/planetas.interface';

export interface RootPlanetas {
    count: number;
    next: string;
    previous: any;
    results: Planetas[];
}