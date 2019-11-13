import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootPersonagens } from './interface/root-personagens.interface';

HttpClient
Injectable
Observable

@Injectable({
    providedIn: 'root'
})
export class PersonagensService {

    constructor(private http: HttpClient) { }

    public listarPersonagens(pagina: number): Observable<RootPersonagens> {
        const url_api = `https://swapi.co/api/people/?format=json&page=${pagina}`
        return this.http.get<RootPersonagens>(url_api, { withCredentials: false, responseType: 'json'})
    }

    public pesquisaPersonagens(termo: string): Observable<RootPersonagens> {
        const url_api = `https://swapi.co/api/people/?search=${termo}`
        return this.http.get<RootPersonagens>(url_api, { responseType: 'json' });
    }
}