import { Component, signal } from "@angular/core";
import { CharacterLisComponent } from "../../components/dragonball/character-lis/character-lis.component";
import { Character } from "../../interfaces/character.interface";
import { CharacterAddComponent } from "../../components/dragonball/character-lis/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterLisComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000}
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [... list, newCharacter]);
  }
}
