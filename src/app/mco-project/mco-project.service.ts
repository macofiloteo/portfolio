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
        demoLink: "www.example.com",
        githubLink: "www.github.com/example.com",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        images: ["/static/test_project.png", "/static/test2.png", "/static/test_project.png"]
      },
      {
        name:"Project 2",
        demoLink: "www.example.com",
        githubLink: "www.github.com/example.com",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        images: ["/static/test_project.png", "/static/test2.png", "/static/test_project.png"]
      },
      {
        name:"Project 3",
        demoLink: "www.example.com",
        githubLink: "www.github.com/example.com",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        images: ["/static/test_project.png", "/static/test2.png", "/static/test_project.png"]
      }]
  }

  public getAll() : Observable<McoProject[]>{
    return new Observable<McoProject[]>((subscriber: Subscriber<McoProject[]>) => subscriber.next(this.dump));
  }
}

