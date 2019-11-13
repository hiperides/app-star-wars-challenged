import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Naves } from '../shared/interface/naves.interface';

@Injectable({
    providedIn: 'root'
})

export class NavesDetalheService {

    constructor(private http: HttpClient) {}

    public carregaDetalheNaves(id: number): Observable<Naves>{
        const url_api = `https://swapi.co/api/starships/${id}/?format=json`
        return this.http.get<Naves>(url_api, { responseType: 'json'})
    }
}

