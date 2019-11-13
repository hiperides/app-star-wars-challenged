import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootNaves } from './interface/root-naves.interface';
import { Subscription, Observable } from 'rxjs';
import { NavesService } from './naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit, OnDestroy {

  public rootNaves: RootNaves;
  public subscription: Subscription;
  public paginaAtual: number;
  public isPagination: boolean;
  public numbersPagination: Array<number>;

  public naves: Observable<RootNaves>

  constructor(private navesService: NavesService) { }

  ngOnInit() {
    this.listarNaves(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public listarNaves(pagina: number): void {
    this.subscription = this.navesService.listarNaves(pagina).subscribe(
      (data) => {
        this.rootNaves = data;
        this.extrairId();
        this.isPagination = data.count > 10;
        if (this.isPagination) {
          this.criaArray(Math.ceil(data.count / 10));
          this.paginaAtual = pagina;
        }
      }
    );
  }

  public pesquisarNaves(termoDaBusca: string): void {
    this.naves = this.navesService.pesquisaNaves(termoDaBusca)

    this.naves.subscribe((naves: RootNaves) => console.log(naves.results))
  }

  private extrairId(): void {
    for (let i = 0; i < this.rootNaves.results.length; i++) {
      const id = +this.rootNaves.results[i].url.replace(/[^0-9]/g, '');
      this.rootNaves.results[i].id = id;
    }
  }

  private criaArray(value): void {
    this.numbersPagination = [];
    for (let i = 1; i <= value; i++) {
      this.numbersPagination.push(i);
    }
  }

}
