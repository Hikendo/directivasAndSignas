import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirective } from './directives/shared.directive';



@NgModule({
  declarations: [
    SharedDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SharedDirective
  ]
})
export class SharedModule { }
