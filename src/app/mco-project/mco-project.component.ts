import { Component, OnInit } from '@angular/core';
import { McoProjectService } from './mco-project.service';
import { McoProject } from './mco-project.model';
import { ImageDialogComponent } from '../mco-dialogs/image-dialog/image-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ObservableMedia } from '@angular/flex-layout';
import { McoGridList } from '../mco-helpers/responsive-grid.helper';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'mco-project',
  templateUrl: './mco-project.component.html',
  styleUrls: ['./mco-project.component.scss']
})
export class McoProjectComponent implements OnInit {
  matGridNumber: Observable<number>;
  grid: McoGridList;
  constructor(private _mcoProjectService : McoProjectService, public dialog: MatDialog, private observableMedia: ObservableMedia) { 
    this.grid = new McoGridList(observableMedia);
  }
  projects : McoProject[]; 
  ngOnInit() {
    this._mcoProjectService.getAll().subscribe( data => this.projects = data);
    this.matGridNumber = this.grid.responsive([1,1,1,1,1]);
  }

  openDialog(images, index): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      images: images,
      index: index
    };
    dialogConfig.width = '80%';
    const dialogRef = this.dialog.open(ImageDialogComponent, dialogConfig);
  }

}
