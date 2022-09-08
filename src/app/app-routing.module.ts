import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestaoAeronaveComponent } from './gestao-aeronave/gestao-aeronave.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([ {
    path: 'gestao-aeronave', component: GestaoAeronaveComponent}])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
