import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email : string;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean = true;

  constructor() {
    console.log("Constructor working... ");
    this.name = "Carlo Jose Luis";
    this.email = "ccorrales@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol", "Programacion", "Netflix"];
    this.showHobbies = true;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby: any) {
    if (hobby.value.trim()) { // .trim() para evitar hobbies vacíos
        this.hobbies.push(hobby.value.trim());
        hobby.value = '';
    }
    hobby.focus();
    return false;
  }
}