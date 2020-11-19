import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomGridComponent } from './custom-grid/custom-grid.component';



@NgModule({
  declarations: [CustomGridComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomGridComponent
  ]
})
export class SharedModule { }
