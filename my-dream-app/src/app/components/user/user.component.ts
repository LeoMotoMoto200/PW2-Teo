import { Component, Input, Output, EventEmitter } from '@angular/core'; // 1. Importa 'Input'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // 2. Usa el decorador @Input() para marcar la propiedad 'nameUser' como una entrada.
  // Le damos un valor inicial vacío para que TypeScript esté contento.
  @Input() nameUser: string = '';
    // 2. Crea la propiedad de salida. Se llamará 'userClicked' y emitirá un string (el nombre del usuario).
  @Output() userClicked = new EventEmitter<string>();
    // 3. Crea un método que se ejecutará al hacer clic en el botón.
  onUserClick(): void {
    // 4. Usa el emisor para disparar el evento, enviando el nombre del usuario como "carga".
    this.userClicked.emit(this.nameUser);
  }
}