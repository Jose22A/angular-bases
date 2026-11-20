import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: "contador.html"
})

export class ContadorComponent {
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
