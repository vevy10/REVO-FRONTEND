import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative mt-3" [ngClass]="width">
      <input
        [type]="type"
        [id]="id"
        [name]="name"
        [(ngModel)]="value"
        [required]="required"
        (blur)="validate()"
        (input)="validate()"
        [ngClass]="{
          'border-gray-300 focus:border-black focus:ring-2 focus:ring-red-200': !error,
          'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200': error
        }"
        class="peer w-full px-3.5 py-3 text-base font-light border rounded-xl outline-none bg-transparent transition-all duration-300"
      />
      <label
        [for]="id"
        class="absolute left-3.5 top-1/2 -translate-y-1/2 bg-[#f9fafb] text-gray-500 text-sm font-light px-1 transition-all duration-200
        peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-black
        peer-valid:-top-2.5 peer-valid:text-xs peer-valid:text-black"
      >
        {{ label }} <span *ngIf="required" class="text-red-500">*</span>
      </label>

      <!-- Message d'erreur -->
      <p *ngIf="error" class="text-red-500 text-xs mt-1 pl-1">{{ errorMessage }}</p>
    </div>
  `,
})
export class InputField {
  // Props personnalisables
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() width: string = 'w-full';
  @Input() required: boolean = false;

  value: string = '';
  error: boolean = false;
  errorMessage: string = '';

  validate() {
    if (this.required && !this.value.trim()) {
      this.error = true;
      this.errorMessage = `${this.label} est obligatoire.`;
      return;
    }

    // Validation email
    if (this.type === 'email' && this.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.value)) {
        this.error = true;
        this.errorMessage = `Adresse email invalide.`;
        return;
      }
    }

    this.error = false;
    this.errorMessage = '';
  }
}
