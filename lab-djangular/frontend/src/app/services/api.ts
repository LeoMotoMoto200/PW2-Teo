import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarea {
  id : number;
  titulo : string;
  completada : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = 'http://127.0.0.1:8000/api/tareas/';

  constructor(private http : HttpClient) { }

  getTareas() : Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
