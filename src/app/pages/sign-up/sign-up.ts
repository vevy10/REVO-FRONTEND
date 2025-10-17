import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputField } from '../../utils/input-field/input-field';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, InputField],
  template: `
    <main class="flex flex-col items-center justify-center min-h-screen font-poppins text-gray-900 bg-gradient-to-br from-gray-50 to-gray-200">
      <!-- HEADER -->
      <section class="flex items-center justify-center gap-5 mb-10">
        <div class="w-16 h-1.5 rounded-full bg-gradient-to-r from-gray-700 to-black"></div>
        <img src="logo-black.png" alt="logo" class="w-32 drop-shadow-md" />
        <div class="w-16 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-red-600"></div>
      </section>

      <!-- FORMULAIRE -->
      <form class="flex flex-col w-80 gap-6">
        <app-input-field
          type="text"
          id="name"
          name="name"
          label="Nom"
          [required]="true">
        </app-input-field>

        <app-input-field
          type="text"
          id="manager"
          name="manager"
          label="Manager"
          [required]="true">
        </app-input-field>

        <app-input-field
          type="text"
          id="adress"
          name="adress"
          label="Adresse"
          [required]="true">
        </app-input-field>

        <app-input-field
          type="tel"
          id="phone"
          name="phone"
          label="Téléphone"
          [required]="true">
        </app-input-field>

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

        <app-input-field
          type="text"
          id="nif"
          name="nif"
          label="NIF"
          [required]="true">
        </app-input-field>

        <app-input-field
          type="text"
          id="stat"
          name="stat"
          label="STAT"
          [required]="true">
        </app-input-field>

        <!-- BOUTON INSCRIPTION -->
        <button
          type="submit"
          class="bg-gradient-to-r from-red-600 to-red-700 text-white text-base font-light uppercase py-3 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-400/40"
        >
          Créer un compte
        </button>

        <!-- LIEN VERS LOGIN -->
        <p class="text-center text-sm font-light text-gray-600">
          Vous avez déjà un compte ?
          <a href="/sign-in" class="text-red-600 hover:text-red-700 transition-colors">Se connecter</a>
        </p>
      </form>
    </main>
  `,
  styleUrl: './sign-up.css'
})
export class SignUp {}
