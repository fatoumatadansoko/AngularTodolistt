import { Component } from '@angular/core';//Component permet de définir un composant Angular.
import { CommonModule } from '@angular/common';//CommonModule fournit des directives courantes comme NgFor et NgIf.
import { FormsModule } from '@angular/forms';//FormsModule permet l'utilisation des directives de formulaire telles que ngModel.


//une interface Tache est définie. Une interface en TypeScript est une structure qui
// définit la forme d'un objet. Dans ce cas, chaque Tache a les propriétés 
//id, title, description et completed.
interface Tache {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-tache',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent {
  taches: Tache[] = [];
  newTache: Tache = { id: 0, title: '', description: '', completed: false };

  addTache(): void {
    if (this.newTache.title.trim()) {
      this.newTache.id = this.taches.length + 1;
      this.taches.push({ ...this.newTache });
      this.newTache = { id: 0, title: '', description: '', completed: false };
    }
  }

  toggleComplete(tache: Tache): void {
    tache.completed = !tache.completed;
  }

  get completedTaches(): Tache[] {
    return this.taches.filter(tache => tache.completed);
  }

  get incompleteTaches(): Tache[] {
    return this.taches.filter(tache => !tache.completed);
  }
}
