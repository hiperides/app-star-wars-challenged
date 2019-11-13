import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';
import { NavesDetalheService } from './naves-detalhe.service';
import { Naves } from '../shared/interface/naves.interface';

@Component({
  selector: 'app-naves-detalhe',
  templateUrl: './naves-detalhe.component.html',
  styleUrls: ['./naves-detalhe.component.css']
})
export class NavesDetalheComponent implements OnInit {

  public naves: Naves

  constructor(
    private route: ActivatedRoute,
    private navesDetalheService: NavesDetalheService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.carregaDetalheNaves();
  }

  public carregaDetalheNaves(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.navesDetalheService.carregaDetalheNaves(id).subscribe(
      (data) => {
        this.naves = data;
        this.extrairFilmes();
        this.extrairPersonagens(data.pilots);
      }
    );
  }

  private extrairPersonagens(url: any[]): void {
    for (let i = 0; i < this.naves.pilots.length; i++) {
      this.appService.extrair(url[i]).subscribe(
        data => this.naves.pilots[i] = data
      );
    }
  }

  private extrairFilmes(): void {
    for (let i = 0; i < this.naves.films.length; i++) {
      this.appService.extrair(this.naves.films[i]).subscribe(
        data => this.naves.films[i] = data.title
      );
    }
  }

  

}
