import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PersonagensDetalheComponent } from './personagens-detalhe.component';
import { PersonagensDetalheService } from './personagens-detalhe.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PersonagensDetalheComponent],
    exports: [PersonagensDetalheComponent],
    providers: [PersonagensDetalheService]
})
export class PersonagensDetalheModule { }
