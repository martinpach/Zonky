import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatSelectModule,
    MatProgressBarModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
