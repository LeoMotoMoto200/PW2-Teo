import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './Post'; // Importamos nuestro molde

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor(private httpClient: HttpClient) {
    console.log("Servicio funcionando... ");
   }

   getData(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
   }
}
