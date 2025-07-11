// src/app/home/home.component.ts

// 1. Importaciones correctas
import { Component, OnInit } from '@angular/core'; // <--- Importamos OnInit
import { CommonModule } from '@angular/common';
import { Data } from '../data'; // <--- Ruta correcta
import { Post } from '../Post';
import { UserComponent } from '../components/user/user.component';
import { FormsModule } from '@angular/forms'; // <-- 1. Importa FormsModule
import { title } from 'process';
import { SafePipe } from '../pipes/safe-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserComponent, FormsModule, SafePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// 2. Implementamos OnInit correctamente
export class HomeComponent implements OnInit {

  users: string[] = ['Ryan', 'Joe', 'Cameron', 'John'];

  // Propiedades (como las tenías antes)
  name: string = "Leonardo Juan José Baca Calsin";
  age: number = 18;
  email: string = "lbacac@unsa.edu.pe";
  webpage: string = "http://www.unsa.edu.pe";
  hobbies: string[];
  showHobbies: boolean = true;
  posts: Post[] = [];
  videos: any[] = [
    {
      title : "Avengers: Infinity War - Tráiler Oficial",
      id : "6ZfuNTqbHE8"
    },
    {
      title : "The incredible Hulk - Tráiler",
      id : "xbqNb2PFKKA"
    },
    {
      title : "Spider-Man: No Way Home - Tráiler Oficial",
      id : "JfVOs4VSpmA"
    }
  ];

  // 3. Constructor limpio y correcto
  constructor(private dataService: Data) {
    console.log("Constructor de Home funcionando...");
    this.hobbies = ["Futbol", "Baile", "Youtube"];
  }

  // 4. ngOnInit para la lógica asíncrona (es una mejor práctica)
  ngOnInit(): void {
    this.dataService.getData().subscribe( (datos: Post[]) => { // Le damos el tipo a 'datos'
      console.log(datos);
      this.posts = datos;
    });
  }

  // Métodos (como los tenías antes)
  toggleHobbies(): void {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby: HTMLInputElement): void {
    if (hobby.value.trim()) {
      this.hobbies.push(hobby.value.trim());
      hobby.value = '';
    }
    hobby.focus();
  }
  // Este método recibirá el nombre que el hijo emita.
onUserSelected(name: string): void {
  alert("El componente padre (Home) ha recibido un saludo de: " + name);
}

deleteUser(nameToDelete: string): void {
  // El método filter() de los arrays es perfecto para esto.
  // Crea un NUEVO array que contiene solo los elementos que cumplen la condición.
  // En este caso, nos quedamos con todos los usuarios cuyo nombre NO sea el que queremos borrar.
  this.users = this.users.filter(user => user !== nameToDelete);
  console.log(`Usuario ${nameToDelete} eliminado.`);
}
}