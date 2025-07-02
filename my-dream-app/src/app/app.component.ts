import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email : string;
  webpage : string;
  hobbies : string[];

  constructor() {
    console.log("Constructor working... ");
    this.name = "Carlo Jose Luis";
    this.email = "ccorrales@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol", "Programacion", "Netflix"];
  }

  toggleHobbies() {
    this.showhobbies = !this.showhobbies;
  }

  newHobby(hobby: HTMLInputElement) {
    if (hobby.value.trim()) { // .trim() para evitar hobbies vacíos
        this.hobbies.push(hobby.value.trim());
        hobby.value = '';
    }
    hobby.focus();
    return false;
  }

  showhobbies() {
    return true;
  }
}