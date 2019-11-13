import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Planetas } from '../shared/interface/planetas.interface';
import { PlanetasDetalheService } from './planetas-detalhe.service';
import { AppService } from '../app.service';


@Component({
  selector: 'app-planetas-detalhe',
  templateUrl: './planetas-detalhe.component.html',
  styleUrls: ['./planetas-detalhe.component.css']
})
export class PlanetasDetalheComponent implements OnInit {

  public planetas: Planetas


  constructor(
    private route: ActivatedRoute,
    private planetasDetalheService: PlanetasDetalheService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.carregaDetalhePlanetas()
  }

  public carregaDetalhePlanetas(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.planetasDetalheService.carregaDetalhePlanetas(id).subscribe(
      (data) => {
        this.planetas = data;
        this.extrairPersonagens(data.residents);
        this.extrairFilmes();
      }
    );
  }

  private extrairPersonagens(url: any[]): void {
    for (let i = 0; i < this.planetas.residents.length; i++) {
      this.appService.extrair(url[i]).subscribe(
        data => this.planetas.residents[i] = data
      );
    }
  }

  private extrairFilmes(): void {
    for (let i = 0; i < this.planetas.films.length; i++) {
      this.appService.extrair(this.planetas.films[i]).subscribe(
        data => this.planetas.films[i] = data.title
      );
    }
  }

}
