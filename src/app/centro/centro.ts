import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-centro',
  styleUrl: './centro.css',
  templateUrl: './centro.html',
})
export class Centro {
  public centro: string = "IES Playamar"
  public localidad: string = "Torremolinos"
  public familiasProfesionales: string[] = ["Informática y Comunicaciones", "Transporte y Mantenimiento de Vehículos"]
  public enlaceLogo: string = "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png"

  public cambiarCentro(): void {
    this.centro = "IES Jacaranda"
    this.localidad = "Churriana"
    this.familiasProfesionales = ["Hostelería y Turismo"]
    this.enlaceLogo = "https://iesjacaranda.com/wp-content/uploads/2026/07/Logo_Jacaranda-240x300.webp"
  }
  public get centroCapitalizado(): string{
    return this.centro.toUpperCase()
  }
}
