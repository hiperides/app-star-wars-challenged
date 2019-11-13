import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootNaves } from './interface/root-naves.interface';

@Injectable({
    providedIn: 'root'
})

export class NavesService {

    constructor(private http: HttpClient) {}

    public listarNaves(pagina: number): Observable<RootNaves> {
        const url_api = `https://swapi.co/api/starships/?format=json&page=${pagina}`
        return this.http.get<RootNaves>(url_api, { responseType: 'json' });
    }

    public pesquisaNaves(termo: string): Observable<RootNaves> {
        const url_api = `https://swapi.co/api/starships/?search=${termo}`
        return this.http.get<RootNaves>(url_api, { responseType: 'json' });
    }
}