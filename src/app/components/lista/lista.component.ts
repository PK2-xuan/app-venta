import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  constructor(private router: Router) {}

  licores = [
    {
      id: 1,
      nombre: 'WHISKY',
      imagen: 'assets/img/licor-1.jpg',
      descripcion: 'CANTIDAD 10',
    },
    {
      id: 2,
      nombre: 'VODKA',
      imagen: 'assets/img/licor-2.jpg',
      descripcion: 'CANTIDAD 12',
    },
    {
      id: 3,
      nombre: 'RON',
      imagen: 'assets/img/licor-3.jpg',
      descripcion: 'CANTIDAD 8',
    },
    {
      id: 4,
      nombre: 'VINO',
      imagen: 'assets/img/licor-4.jpg',
      descripcion: 'CANTIDAD 4',
    },
    {
      id: 5,
      nombre: 'CHAMPAGNE',
      imagen: 'assets/img/licor-5.jpg',
      descripcion: 'CANTIDAD 4',
    },
  ];

  navigateToListaProducto(id: number) {
    this.router.navigate(['/lista-producto', id]);
  }
  
}
