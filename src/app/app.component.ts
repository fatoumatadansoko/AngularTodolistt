import { Component } from '@angular/core';
import { TacheComponent } from './components/tache/tache.component'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TacheComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';
}
