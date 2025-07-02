import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post'; // Importamos nuestro molde

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log("Servicio funcionando... ");
   }

   getData() {
    return this.httpClient.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
   }
}
