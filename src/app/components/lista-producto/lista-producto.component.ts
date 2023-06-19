import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
})
export class ListaProductoComponent {

  constructor(private carritoService: CarritoService) { }

  agregarAlCarrito(producto: any) {
    if (!this.carritoService.productoYaExiste(producto)) {
      this.carritoService.agregarProducto(producto);
    }
  }
  

  listaLicores: any[] = [
    {
      id:1,
      nombre: 'WHISKY',
      imagen: 'assets/img/img-licor-1.jpg',
      descripcion: 'CANTIDAD 10',
      cantidad: 1, 
      precio: 150.00,
    },
    {
      id:2,
      nombre: 'WHISKY SOMETHING',
      imagen: 'assets/img/img-licor-2.jpg',
      descripcion: 'CANTIDAD 10',
      cantidad: 1,
      precio: 100.00,
    },
    {
      id:3,
      nombre: 'WHISKY SWING',
      imagen: 'assets/img/img-licor-3.jpg',
      descripcion: 'CANTIDAD 10',
      cantidad: 1, 
      precio: 70.00,
    },
    {
      id:4,
      nombre: 'WHISKY BLACK LABEL',
      imagen: 'assets/img/img-licor-4.jpg',
      descripcion: 'CANTIDAD 10',
      cantidad: 1, 
      precio: 259.90,
    },
    {
      id:5,
      nombre: 'WHISKY ROYAL SOLUTE',
      imagen: 'assets/img/img-licor-5.jpg',
      descripcion: 'CANTIDAD 10',
      cantidad: 1,
      precio: 1050.99, 
    },
  ];
}
