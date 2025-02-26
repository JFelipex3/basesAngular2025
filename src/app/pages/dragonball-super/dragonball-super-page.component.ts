import { Component, inject } from "@angular/core";
import { CharacterLisComponent } from "../../components/dragonball/character-lis/character-lis.component";
import { CharacterAddComponent } from "../../components/dragonball/character-lis/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";

@Component({
  selector: 'dragonball-super-page',
  imports: [CharacterLisComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
