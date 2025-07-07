import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { forumPost } from './app';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  //constructor() {}
    private readonly apiUrl = environment.api;
    private http = inject(HttpClient);
    private jsonHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    getForums():Observable<forumPost[]>{
      return this.http.get<forumPost[]>(`${this.apiUrl}`,{

      }).pipe(
        map((raw) => raw.reverse())
      );
    }
   
}
