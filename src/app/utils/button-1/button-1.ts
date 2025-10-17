import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [ngClass]="buttonClasses"
      class="text-base font-light uppercase rounded-xl transition-transform duration-300 cursor-pointer"
    >
      {{ label }}
    </button>
  `
})
export class ButtonComponent {
  @Input() label: string = 'Bouton';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() colorFrom: string = 'red-600';
  @Input() colorTo: string = 'red-700';
  @Input() textColor: string = 'white';
  @Input() size: string = 'py-3 px-6';

  get buttonClasses(): string {
    return `
      bg-gradient-to-r from-${this.colorFrom} to-${this.colorTo} 
      text-${this.textColor} 
      ${this.size} 
      hover:scale-[1.02] hover:shadow-lg hover:shadow-${this.colorFrom}/40
    `;
  }
}
