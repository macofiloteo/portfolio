import { ObservableMedia } from "@angular/flex-layout";
import { map, startWith } from "rxjs/operators";

export class McoGridList{
    constructor(private observableMedia: ObservableMedia){
    }
    public responsive(grids : number[]) : any{
        const grid = new Map([
            ["xs", grids[0]],
            ["sm", grids[1]],
            ["md", grids[2]],
            ["lg", grids[3]],
            ["xl", grids[4]]
          ]);
        let start: number;
        grid.forEach((cols, mqAlias) => {
          if (this.observableMedia.isActive(mqAlias)) {
            start = cols;
          }
        });
        return this.observableMedia.asObservable().pipe(
          map(change => {
            return grid.get(change.mqAlias);
          }),
          startWith(start)
        )
    }
}

