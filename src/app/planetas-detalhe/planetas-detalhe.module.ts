import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PlanetasDetalheComponent } from './planetas-detalhe.component';
import { PlanetasDetalheService } from './planetas-detalhe.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PlanetasDetalheComponent],
    exports: [PlanetasDetalheComponent],
    providers: [PlanetasDetalheService]
})
export class PlanetasDetalheModule {}

