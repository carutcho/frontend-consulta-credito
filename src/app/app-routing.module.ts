import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCreditoComponent } from './components/consulta-credito/consulta-credito.component';

const routes: Routes = [
  { path: '', component: ConsultaCreditoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
