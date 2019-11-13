import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { RootPersonagens } from './interface/root-personagens.interface';
import { PersonagensService } from './personagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit, OnDestroy {

  public rootPersonagens: RootPersonagens;
  public subscription: Subscription;
  public paginaAtual: number;
  public isPagination: boolean;
  public numbersPagination: Array<number>;

  public personagens: Observable<RootPersonagens>

  constructor(private personagensService: PersonagensService) { }

  ngOnInit() {
    this.listarPersonagens(1)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  public listarPersonagens(pagina: number): void {
    this.subscription = this.personagensService.listarPersonagens(pagina).subscribe(
      (data) => {
        this.rootPersonagens = data;
        this.extrairId();
        this.isPagination = data.count > 14;
        if (this.isPagination) {
          this.criaArray(Math.ceil(data.count / 14));
          this.paginaAtual = pagina;
        }
      }
    );
  }

  public pesquisarPersonagens(termoDaBusca: string): void {
    this.personagens = this.personagensService.pesquisaPersonagens(termoDaBusca)

    this.personagens.subscribe((personagens: RootPersonagens) => console.log(personagens.results))
  }

  private extrairId(): void {
    for (let i = 0; i < this.rootPersonagens.results.length; i++) {
      const id = +this.rootPersonagens.results[i].url.replace(/[^0-9]/g, '');
      this.rootPersonagens.results[i].id = id;
    }
  }

  private criaArray(value): void {
    this.numbersPagination = [];
    for (let i = 1; i <= value; i++) {
        this.numbersPagination.push(i);
      }
  }

}
