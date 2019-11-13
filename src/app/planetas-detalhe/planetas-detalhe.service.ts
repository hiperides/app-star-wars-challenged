import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planetas } from '../shared/interface/planetas.interface';

@Injectable({
    providedIn: 'root'
})
export class PlanetasDetalheService {

    constructor(private http: HttpClient) {}

    public carregaDetalhePlanetas(id: number): Observable<Planetas>{
        const url_api = `https://swapi.co/api/planets/${id}/?format=json`
        return this.http.get<Planetas>(url_api, { responseType: 'json'})
    }
}