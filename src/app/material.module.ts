
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule, MatExpansionModule, MatCardModule, MatGridListModule, MatDialogModule, MatDividerModule, MatTabsModule, MatFormFieldModule, MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule, MatExpansionModule, MatCardModule, MatGridListModule, MatDialogModule, MatDividerModule, MatTabsModule, MatFormFieldModule, MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
