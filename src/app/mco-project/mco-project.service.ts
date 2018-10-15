import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { McoProject } from "./mco-project.model";
import { Observable, Subscriber } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()

export class McoProjectService{
  private dump: McoProject[];
  constructor(private http: HttpClient) {
    this.dump =
      [{
        name: "I Love ZamboCard",
        demoLink: "www.zamboangacity.gov.ph:84",
        githubLink: null,
        tags: ["ASP.net", "MVC 5", "Angular 6", "Web API 2", "Javascript","C#"],
        description: "Proprietary system made for the City Government of Zamboanga to manage ZamboCards and government services that are given to the people of Zamboanga City.",
        images: ["static/zambocard1.png", "static/zambocard2.png", "static/zambocard3.png", "static/zambocard4.png", "static/zambocard5.png", "static/zambocard6.png"]
      },
      {
        name:"Zambo PhotoMap",
        demoLink: "www.example.com",
        githubLink: "www.github.com/example.com",
        tags: ["Django", "GeoNode", "GeoServer", "GIS", "Python"],
        description:"A map that shows gps coordinates with photos of restaurants, hotels, barangay halls, and tourist spots in Zamboanga City. An extension of a much larger project where shapefiles are uploaded (kinda like a portal for GIS data). Sadly, I will not be able to include the source code of that project since it host sensitive data.",
        images: ["static/zambophotomap1.png", "static/zambophotomap2.png"]
      },
      {
        name:"Pink Sand Reservation",
        demoLink: null,
        githubLink: "https://github.com/macofiloteo/screserve",
        tags: ["Django", "Python"],
        description: "Simple reservation system for the Sta. Cruz Island, the pink beach in Zamboanga City.",
        images: ["static/sc1.png", "static/sc2.png", "static/sc3.png", "static/sc4.png", "static/sc5.png", ]
      }]
  }

  public getAll() : Observable<McoProject[]>{
    return new Observable<McoProject[]>((subscriber: Subscriber<McoProject[]>) => subscriber.next(this.dump));
  }
}
