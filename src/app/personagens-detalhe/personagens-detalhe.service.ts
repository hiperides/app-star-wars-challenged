import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Personagens } from '../shared/interface/personagens.interface';

@Injectable({
    providedIn: 'root'
})

export class PersonagensDetalheService {

    constructor(private http: HttpClient) {}

    public carregaDetalhePersonagens(id: number): Observable<Personagens>{
        const url_api = `https://swapi.co/api/people/${id}/?format=json`
        return this.http.get<Personagens>(url_api, { responseType: 'json' })
    }
}