import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html'
})
export class PaginacaoComponent {

  @Input() public isPagination;
  @Input() public rootObjeto;
  @Output() public listarObjetos = new EventEmitter<number>();
  @Input() public paginaAtual;
  @Input() public numbersPagination;

  constructor() { }

  listar(pagina: number) {
    this.listarObjetos.emit(pagina);
  }

}
