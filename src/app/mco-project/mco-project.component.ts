import { Component, OnInit } from '@angular/core';
import { McoProjectService } from './mco-project.service';
import { McoProject } from './mco-project.model';
import { ImageDialogComponent } from '../mco-dialogs/image-dialog/image-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'mco-project',
  templateUrl: './mco-project.component.html',
  styleUrls: ['./mco-project.component.scss']
})
export class McoProjectComponent implements OnInit {

  constructor(private _mcoProjectService : McoProjectService, public dialog: MatDialog) { }
  projects : McoProject[]; 
  ngOnInit() {
    this._mcoProjectService.getAll().subscribe( data => this.projects = data);
  }

  openDialog(images, index): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      images: images,
      index: index
    };
    dialogConfig.width = '80%';

    const dialogRef = this.dialog.open(ImageDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
