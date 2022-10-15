import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestaoFibonacciComponent } from './gestao-fibonacci/gestao-fibonacci.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([ {
    path: 'gestao-fibonacci', component: GestaoFibonacciComponent}])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
