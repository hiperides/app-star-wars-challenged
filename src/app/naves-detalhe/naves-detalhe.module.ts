import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NavesDetalheComponent } from './naves-detalhe.component';
import { NavesDetalheService } from './naves-detalhe.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NavesDetalheComponent],
    exports: [NavesDetalheComponent],
    providers: [NavesDetalheService]
})

export class NavesDetalheModule {}