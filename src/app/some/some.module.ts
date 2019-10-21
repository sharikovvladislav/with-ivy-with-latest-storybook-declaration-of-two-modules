import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { DirectiveDirective } from './directive.directive';



@NgModule({
  declarations: [ComponentComponent, DirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [ ComponentComponent ]
})
export class SomeModule { }
