// frontend/src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// 1. Importamos nuestro servicio y la interfaz
import { Api, Tarea } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. CommonModule es necesario para poder usar *ngFor y *ngIf en el HTML
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'Frontend con Angular';

  // 3. Creamos una propiedad para guardar la lista de tareas que llegue de la API.
  // La inicializamos como un array vacío.
  tareas: Tarea[] = [];

  // 4. Inyección de Dependencias: Le pedimos a Angular que nos "inyecte"
  // una instancia de nuestro ApiService en el constructor.
  constructor(private apiService: Api) {}

  // 5. ngOnInit es el lugar perfecto para llamar a servicios.
  // Se ejecuta una vez que el componente está listo.
  ngOnInit(): void {
    // 6. Llamamos a la función del servicio. Esto nos devuelve un Observable.
    this.apiService.getTareas().subscribe({
      // 7. El método .subscribe() tiene un objeto con dos "canales":
      // 'next' se ejecuta si todo sale bien y recibe los datos.
      next: (data) => {
        this.tareas = data;
        console.log('Tareas recibidas desde Django:', this.tareas);
      },
      // 'error' se ejecuta si hay un problema en la comunicación.
      error: (err) => {
        console.error('Error al conectar con la API de Django:', err);
      }
    });
  }
}