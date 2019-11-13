import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { RootPlanetas } from './interface/root-planetas.interface';
import { PlanetasService } from './planetas.service';


@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit, OnDestroy {

  public rootPlanetas: RootPlanetas;
  public subscription: Subscription;
  public paginaAtual: number;
  public isPagination: boolean;
  public numbersPagination: Array<number>;

  public planetas: Observable<RootPlanetas>

  constructor(private planetasService: PlanetasService) { }

  ngOnInit() {
    this.listarPlanetas(1)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  public listarPlanetas(pagina: number): void {
    this.subscription = this.planetasService.listarPlanetas(pagina).subscribe(
      (data) => {
        this.rootPlanetas = data;
        this.extrairId();
        this.isPagination = data.count > 10;
        if (this.isPagination) {
          this.criaArray(Math.ceil(data.count / 10));
          this.paginaAtual = pagina;
        }
      }
    );
  }

  public pesquisarPlanetas(termoDaBusca: string): void {
    this.planetas = this.planetasService.pesquisaPlanetas(termoDaBusca)

    this.planetas.subscribe((planetas: RootPlanetas) => console.log(planetas.results))
  }

  private criaArray(value): void {
    this.numbersPagination = [];
    for (let i = 1; i <= value; i++) {
        this.numbersPagination.push(i);
      }
  }

  private extrairId(): void {
    for (let i = 0; i < this.rootPlanetas.results.length; i++) {
      const id = +this.rootPlanetas.results[i].url.replace(/[^0-9]/g, '');
      this.rootPlanetas.results[i].id = id;
    }
  }

}
