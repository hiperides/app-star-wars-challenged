import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RootPlanetas } from './interface/root-planetas.interface';

@Injectable({
    providedIn: 'root'
})

export class PlanetasService {

    constructor(private http: HttpClient) {}

    public listarPlanetas(pagina: number): Observable<RootPlanetas>{
        const url_api = `https://swapi.co/api/planets/?page=${pagina}&format=json`
        return this.http.get<RootPlanetas>(url_api, { responseType: 'json'})
    }

    public pesquisaPlanetas(termo: string): Observable<RootPlanetas> {
        const url_api = `https://swapi.co/api/planets/?search=${termo}`
        return this.http.get<RootPlanetas>(url_api, { responseType: 'json' });
    }
}