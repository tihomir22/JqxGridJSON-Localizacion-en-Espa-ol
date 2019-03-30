import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincComponent } from './mainc/mainc.component';

const routes: Routes = [
  {path:'',component:MaincComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
