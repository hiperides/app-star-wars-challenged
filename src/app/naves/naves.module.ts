import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavesComponent } from './naves.component';
import { NavesService } from './naves.service';
import { PaginacaoModule } from '../shared/paginacao/paginacao.module';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      PaginacaoModule
    ],
    declarations: [NavesComponent],
    exports: [NavesComponent],
    providers: [NavesService]
  })
  export class NavesModule { }