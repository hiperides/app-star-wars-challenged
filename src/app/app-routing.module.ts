import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetasComponent } from './planetas/planetas.component';
import { HomeComponent } from './home/home.component';
import { NavesComponent } from './naves/naves.component';
import { NavesDetalheComponent } from './naves-detalhe/naves-detalhe.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagensDetalheComponent } from './personagens-detalhe/personagens-detalhe.component';
import { PlanetasDetalheComponent } from './planetas-detalhe/planetas-detalhe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'naves', component: NavesComponent},
  {path: 'naves/:id', component: NavesDetalheComponent },
  {path: 'personagens', component: PersonagensComponent},
  {path: 'personagens/:id', component: PersonagensDetalheComponent },
  {path: 'planetas', component: PlanetasComponent},
  {path: 'planetas/:id', component: PlanetasDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
