import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: false,
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {
  public nombreHeroes: string[] = ["Goku", "Piccolo", "Vegeta", "Gohan", "Trunks"]

  public borrarUltimoHeroe(): void {

  }
}
