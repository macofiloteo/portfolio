import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ImageDialogComponent{

  images : string[];
  index : number;
  currentImage : string;
  constructor(public dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.images = data.images;
    this.index = data.index;
    this.currentImage = this.images[this.index];
   }
  onNoClick(): void {
    this.dialogRef.close();
  }
  navigate(direction : string){
    if(direction == "left"){
      this.index--;
      if(this.index < 0){
        this.index = this.images.length - 1;
      }
    }
    else{
      this.index++;
      if(this.index > this.images.length - 1 ){
        this.index = 0;
      }
    }
    this.currentImage = this.images[this.index];
  }
}
