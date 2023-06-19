import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageKey = 'carrito';

  constructor() { } 

  guardarCarrito(productos: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(productos));
  }

  obtenerCarrito(): any[] {
    const carrito = localStorage.getItem(this.storageKey);
    return carrito ? JSON.parse(carrito) : [];
  }
}
