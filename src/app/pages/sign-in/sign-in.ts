import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputField } from '../../utils/input-field/input-field';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, InputField],
  template: `
    <main class="flex flex-col items-center justify-center min-h-screen font-poppins text-gray-900 bg-gradient-to-br from-gray-50 to-gray-200">
      <!-- HEADER -->
      <section class="flex items-center justify-center gap-5 mb-10">
        <div class="w-16 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-red-600"></div>
        <img src="logo-black.png" alt="logo" class="w-32 drop-shadow-md" />
        <div class="w-16 h-1.5 rounded-full bg-gradient-to-r from-gray-700 to-black"></div>
      </section>

      <!-- FORM -->
      <form class="flex flex-col w-80 gap-6">
        <app-input-field
          type="email"
          id="email"
          name="email"
          label="Adresse email"
          [required]="true">
        </app-input-field>

        <app-input-field
          type="password"
          id="password"
          name="password"
          label="Mot de passe"
          [required]="true">
        </app-input-field>

        <button
          type="submit"
          class="bg-gradient-to-r from-red-600 to-red-700 text-white text-base font-light uppercase py-3 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-400/40"
        >
          Se connecter
        </button>

        <p class="text-center text-sm font-light text-gray-600">
          Pas encore de compte ?
          <a href="/sign-up" class="text-red-600 hover:text-red-700 transition-colors">S'inscrire</a>
        </p>
      </form>
    </main>
  `
})
export class SignIn {}
