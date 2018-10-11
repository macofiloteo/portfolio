
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    MatButtonModule, MatExpansionModule, MatCardModule, MatGridListModule, MatDialogModule, MatDividerModule, MatTabsModule
  ],
  exports: [
    MatButtonModule, MatExpansionModule, MatCardModule, MatGridListModule, MatDialogModule, MatDividerModule, MatTabsModule
  ] 
})
export class MaterialModule { }
