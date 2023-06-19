import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from "src/app/service/local-storage.service";

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  constructor(private localStorageService: LocalStorageService) {
    // Aquí puedes acceder a los métodos del localStorageService
  }

  carritoActualizado: Subject<any[]> = new Subject<any[]>(); // Subject para notificar actualizaciones del carrito

  productos: any[] = []; // Arreglo que contiene los productos del carrito

  agregarProducto(producto: any) {
    const productoExistente = this.productos.find(
      (p) => p.nombre === producto.nombre
    ); // Verifica si el producto ya existe en el carrito

    if (productoExistente) {
      productoExistente.cantidad += 1; // Incrementa la cantidad si el producto ya existe
    } else {
      producto.cantidad = 1; // Establece la cantidad en 1 para un nuevo producto
      this.productos.push(producto); // Agrega el producto al carrito
    }

    this.carritoActualizado.next(this.productos); // Notifica la actualización del carrito a los suscriptores
    this.localStorageService.guardarCarrito(this.productos); // Guarda el carrito en el almacenamiento local
  }

  obtenerProductos() {
    const carrito = this.localStorageService.obtenerCarrito();

    if (carrito.length > 0) {
      this.productos = carrito;
    }

    return this.productos;
  }

  vaciarCarrito() {
    this.productos.splice(0, this.productos.length); // Elimina todos los elementos del arreglo de productos
    this.carritoActualizado.next(this.productos); // Notifica la actualización del carrito a los suscriptores
    this.localStorageService.guardarCarrito(this.productos); // Guarda el carrito vacío en el almacenamiento local
  }

  productoYaExiste(producto: any): boolean {
    return this.productos.some((item) => item.id === producto.id); // Verifica si un producto ya existe en el carrito
  }
}
