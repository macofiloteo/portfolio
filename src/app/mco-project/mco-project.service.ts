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
        name: "Project 1",
        demoLink: "www.zamboangacity.gov.ph:84",
        githubLink: null,
        tags: ["ASP.net", "MVC 5", "Angular 6", "Web API 2", "Javascript","C#"],
        description: "Proprietary system made for the City Government of Zamboanga to manage ZamboCards and government services that are given to the people of Zamboanga City.",
        images: ["/static/zambocard1.png", "/static/zambocard2.png", "/static/zambocard3.png", "/static/zambocard4.png", "/static/zambocard5.png", "/static/zambocard6.png"]
      },
      {
        name:"Project 2",
        demoLink: "www.example.com",
        githubLink: "www.github.com/example.com",
        tags: ["Django", "GeoNode", "GeoServer", "GIS", "Python"],
        description:"A map that shows gps coordinates with photos of restaurants, hotels, barangay halls, and tourist spots in Zamboanga City. Can be easily expanded to other establishment as long as geospatial data is supplied. The gps coordinates came from the intranet GIS (Geospatial Information System) web portal of the organization that was customized and deployed by me too. Sadly, I will not be able to include the source code of that project since it host sensitive data. The intranet project is base on GeoNode (you can simply look it up on Google).",
        images: ["/static/zambophotomap1.png", "/static/zambophotomap2.png"]
      },
      {
        name:"Project 3",
        demoLink: null,
        githubLink: "https://github.com/macofiloteo/screserve",
        tags: ["Django", "Python"],
        description: "Simple reservation system for the Sta. Cruz Island, the pink beach in Zamboanga City.",
        images: ["/static/sc1.png", "/static/sc2.png", "/static/sc3.png", "/static/sc4.png", "/static/sc5.png", ]
      }]
  }

  public getAll() : Observable<McoProject[]>{
    return new Observable<McoProject[]>((subscriber: Subscriber<McoProject[]>) => subscriber.next(this.dump));
  }
}

