import { NgModule } from '@angular/core';
import { AutoInputComponent } from './auto-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AutoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AutoInputComponent]
})
export class AutoInputModule { }
