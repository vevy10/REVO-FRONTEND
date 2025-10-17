import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<h1 class="text-3xl font-bold text-blue-600">Hello Tailwind 🚀</h1>
`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
