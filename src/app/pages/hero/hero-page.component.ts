import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {

  name = signal<string>('Iroman');
  age = signal<number>(45);

  heroDescription = computed<string>(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Iroman');
    this.age.set(45);
  }

  changeAge(): void {
    this.age.set(60);
  }
}
