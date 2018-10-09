import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/operators';
import { McoGridList } from './mco-helpers/responsive-grid.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'app';
  matGridNumber: Observable<number>;
  grid : McoGridList;
  constructor(private observableMedia: ObservableMedia){
    this.grid = new McoGridList(observableMedia);
  }
  ngOnInit(){
    this.matGridNumber = this.grid.responsive([1,1,2,2,3]);
  }
}

