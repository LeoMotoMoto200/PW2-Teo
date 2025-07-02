import { Component, Input } from '@angular/core'; // 1. Importa 'Input'
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
}