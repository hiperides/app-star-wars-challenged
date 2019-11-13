import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PersonagensComponent } from './personagens.component';
import { PaginacaoModule } from '../shared/paginacao/paginacao.module';
import { PersonagensService } from './personagens.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PaginacaoModule
    ],
    declarations: [PersonagensComponent],
    exports: [PersonagensComponent],
    providers: [PersonagensService]
})

export class PersonagensModule {}