import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginacaoModule } from '../shared/paginacao/paginacao.module';
import { PlanetasComponent } from './planetas.component';
import { PlanetasService } from './planetas.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PaginacaoModule
    ],
    declarations: [PlanetasComponent],
    exports: [PlanetasComponent],
    providers: [PlanetasService]
})

export class PlanetasModule {}