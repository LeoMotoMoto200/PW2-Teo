// src/app/home/home.component.ts

// 1. Importaciones correctas
import { Component, OnInit } from '@angular/core'; // <--- Importamos OnInit
import { CommonModule } from '@angular/common';
import { Data } from '../data'; // <--- Ruta correcta
import { Post } from '../Post';
import { UserComponent } from '../components/user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// 2. Implementamos OnInit correctamente
export class HomeComponent implements OnInit {

  users: string[] = ['Ryan', 'Joe', 'Cameron', 'John'];

  // Propiedades (como las tenías antes)
  name: string = "Carlo Jose Luis";
  email: string = "ccorrales@unsa.edu.pe";
  webpage: string = "http://www.unsa.edu.pe";
  hobbies: string[] = ["Fútbol", "Programación", "Netflix"];
  showHobbies: boolean = true;
  posts: Post[] = [];

  // 3. Constructor limpio y correcto
  constructor(private dataService: Data) {
    console.log("Constructor de Home funcionando...");
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
}