
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatButtonModule, MatExpansionModule, MatCardModule, MatGridListModule, MatDialogModule
  ],
  exports: [
    MatButtonModule, MatExpansionModule, MatCardModule, MatGridListModule, MatDialogModule
  ] 
})
export class MaterialModule { }
