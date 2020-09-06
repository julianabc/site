import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CadastroComponent} from './pages/cadastro/cadastro.component';
import {ContatoComponent} from './pages/contato/contato.component';
import {ParticipantesComponent} from './pages/participantes/participantes.component';
import {ServicosComponent} from './pages/servicos/servicos.component';
import {SobreComponent} from './pages/sobre/sobre.component';
import {VoluntariosComponent} from './pages/voluntarios/voluntarios.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'participantes', component: ParticipantesComponent },
  { path: '', component: ServicosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'voluntarios', component: VoluntariosComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
