import { Component, input, Signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-lis',
  imports: [],
  templateUrl: './character-lis.component.html',
})
export class CharacterLisComponent {

  listName = input.required<string>();
  characters = input.required<Character[]>();

}
