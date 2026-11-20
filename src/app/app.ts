import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

import { Centro } from './centro/centro';

@Component({
  imports: [RouterOutlet, Centro, ContadorModule, HeroesModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //protected readonly title = signal('02-bases');
  public title: string = "Jose Alberto Soto"
  public contador: number = 10
  public cantidad: number = 4

  incrementarPor(): void {
    this.contador += this.cantidad
  }
  decrementarPor(): void {
    this.contador -= this.cantidad
  }
  reset(): void {
    this.contador = 10
  }
}
