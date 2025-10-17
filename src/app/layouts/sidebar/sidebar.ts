import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col justify-between shadow-xl">
      <!-- Logo / Header -->
      <div class="p-6 flex items-center justify-center border-b border-gray-700">
        <span class="text-2xl font-bold">REVO</span>
      </div>

      <!-- Menu principal -->
      <nav class="flex-1 px-4 py-6 space-y-2">
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Tableau de bord</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Indexation</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Carburant</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Note de crédit</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Retour en cuve</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Mobile Money</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Cash</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Achat</a>
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Vente</a>
      </nav>

      <!-- Compte en bas -->
      <div class="px-4 py-6 border-t border-gray-700">
        <a href="#" class="block px-3 py-2 rounded hover:bg-gray-800">Compte</a>
      </div>
    </aside>
  `
})
export class SidebarComponent {}
