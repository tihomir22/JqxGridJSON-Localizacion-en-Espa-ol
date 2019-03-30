import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MaincComponent } from './mainc/mainc.component';

import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ng/jqxgrid';



@NgModule({
  declarations: [MaincComponent,jqxGridComponent],
  imports: [
    CommonModule,
    MainmoduleRoutingModule
    
  ]
})
export class MainmoduleModule { }
