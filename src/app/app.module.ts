import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PaginacaoModule } from './shared/paginacao/paginacao.module';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppService } from './app.service';
import { NavesModule } from './naves/naves.module';
import { NavesDetalheModule } from './naves-detalhe/naves-detalhe.module';
import { PersonagensModule } from './personagens/personagens.module';
import { PersonagensDetalheModule } from './personagens-detalhe/personagens-detalhe.module';
import { PlanetasModule } from './planetas/planetas.module';
import { PlanetasDetalheModule } from './planetas-detalhe/planetas-detalhe.module';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PaginacaoModule,
    NavesModule,
    NavesDetalheModule,
    PersonagensModule,
    PersonagensDetalheModule,
    PlanetasModule,
    PlanetasDetalheModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
