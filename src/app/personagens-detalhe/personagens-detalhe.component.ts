import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';
import { PersonagensDetalheService } from './personagens-detalhe.service';
import { Personagens } from '../shared/interface/personagens.interface';

@Component({
  selector: 'app-personagens-detalhe',
  templateUrl: './personagens-detalhe.component.html',
  styleUrls: ['./personagens-detalhe.component.css']
})
export class PersonagensDetalheComponent implements OnInit {

  public personagens: Personagens

  constructor(
    private route: ActivatedRoute,
    private personagensDetalheService: PersonagensDetalheService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.carregaDetalhePersonagens()
  }

  public carregaDetalhePersonagens(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.personagensDetalheService.carregaDetalhePersonagens(id).subscribe(
      (data) => {
        this.personagens = data;
        this.extrairPlanetaNatal(data.homeworld);
        this.extrairFilmes();
        this.extrairEspecies();
        this.extrairVeiculos();
      }
    );
  }

  private extrairPlanetaNatal(url: any): void {
    this.appService.extrair(url).subscribe(
      data => this.personagens.homeworld = data
    );
  }

  private extrairFilmes(): void {
    for (let i = 0; i < this.personagens.films.length; i++) {
      this.appService.extrair(this.personagens.films[i]).subscribe(
        data => this.personagens.films[i] = data.title
      );
    }
  }

  private extrairEspecies(): void {
    if (this.personagens.species.length > 0) {
      this.appService.extrair(this.personagens.species[0]).subscribe(
        data => this.personagens.species = data
      );
    }
  }

  private extrairVeiculos(): void {
    for (let i = 0; i < this.personagens.vehicles.length; i++) {
      this.appService.extrair(this.personagens.vehicles[i]).subscribe(
        data => this.personagens.vehicles[i] = data
      );
    }
  }

}
