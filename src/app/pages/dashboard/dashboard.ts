import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex h-screen bg-gray-100 font-poppins">

      <!-- SIDEBAR -->
      <aside class="w-64 bg-white shadow-lg flex flex-col">
        <div class="px-6 py-4 text-2xl font-bold text-red-600">Mon Dashboard</div>
        <nav class="flex-1 px-4 py-2">
          <ul class="space-y-2">
            <li class="hover:bg-red-50 rounded-lg">
              <a href="#" class="flex items-center px-3 py-2 text-gray-700 font-medium">
                <span>Accueil</span>
              </a>
            </li>
            <li class="hover:bg-red-50 rounded-lg">
              <a href="#" class="flex items-center px-3 py-2 text-gray-700 font-medium">
                <span>Utilisateurs</span>
              </a>
            </li>
            <li class="hover:bg-red-50 rounded-lg">
              <a href="#" class="flex items-center px-3 py-2 text-gray-700 font-medium">
                <span>Ventes</span>
              </a>
            </li>
            <li class="hover:bg-red-50 rounded-lg">
              <a href="#" class="flex items-center px-3 py-2 text-gray-700 font-medium">
                <span>Paramètres</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- MAIN CONTENT -->
      <div class="flex-1 flex flex-col overflow-auto">

        <!-- HEADER -->
        <header class="flex justify-between items-center px-6 py-4 bg-white shadow-md">
          <h1 class="text-xl font-bold text-gray-800">Bienvenue, Admin</h1>
          <div class="flex items-center gap-4">
            <button class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Déconnexion</button>
          </div>
        </header>

        <!-- DASHBOARD CARDS -->
        <main class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl shadow p-4">
            <h2 class="text-gray-500 text-sm">Utilisateurs</h2>
            <p class="text-2xl font-bold text-gray-800">1,245</p>
          </div>
          <div class="bg-white rounded-xl shadow p-4">
            <h2 class="text-gray-500 text-sm">Ventes</h2>
            <p class="text-2xl font-bold text-gray-800">3,875</p>
          </div>
          <div class="bg-white rounded-xl shadow p-4">
            <h2 class="text-gray-500 text-sm">Revenus</h2>
            <p class="text-2xl font-bold text-gray-800">$12,450</p>
          </div>
          <div class="bg-white rounded-xl shadow p-4">
            <h2 class="text-gray-500 text-sm">Statut</h2>
            <p class="text-2xl font-bold text-gray-800">Actif</p>
          </div>
        </main>

        <!-- TABLEAU (OPTIONNEL) -->
        <section class="p-6">
          <div class="bg-white rounded-xl shadow p-4">
            <h2 class="text-gray-700 font-semibold mb-4">Dernières transactions</h2>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-4 py-2 text-gray-600">#ID</th>
                  <th class="px-4 py-2 text-gray-600">Client</th>
                  <th class="px-4 py-2 text-gray-600">Montant</th>
                  <th class="px-4 py-2 text-gray-600">Statut</th>
                  <th class="px-4 py-2 text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b hover:bg-gray-50 transition">
                  <td class="px-4 py-2">001</td>
                  <td class="px-4 py-2">Vahanjakoto</td>
                  <td class="px-4 py-2">$120</td>
                  <td class="px-4 py-2 text-green-600">Payé</td>
                  <td class="px-4 py-2">17/10/2025</td>
                </tr>
                <tr class="border-b hover:bg-gray-50 transition">
                  <td class="px-4 py-2">002</td>
                  <td class="px-4 py-2">Marie</td>
                  <td class="px-4 py-2">$250</td>
                  <td class="px-4 py-2 text-red-600">En attente</td>
                  <td class="px-4 py-2">16/10/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  `,
  styleUrl: './dashboard.css'
})
export class Dashboard {}
