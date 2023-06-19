import { Component, OnInit, ComponentFactoryResolver} from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StepperComponent } from 'src/app/components/stepper/stepper.component'; // Importa el componente del modal
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productos: any[] = [];
  subtotal: number = 0;
  igv: number = 0;
  total: number = 0;

  constructor(
    private carritoService: CarritoService,
    private localStorageService: LocalStorageService, // Corregido: Utiliza el nombre correcto del servicio
    private router: Router,
    private resolver: ComponentFactoryResolver,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productos = this.carritoService.obtenerProductos(); // Obtiene los productos del servicio de carrito
    this.calcularTotal(); // Calcula el subtotal, IGV y total del carrito

    this.carritoService.carritoActualizado.subscribe((productos: any[]) => {
      this.productos = productos; // Actualiza los productos cuando se modifica el carrito
      this.calcularTotal(); // Vuelve a calcular el subtotal, IGV y total del carrito
    });
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1); // Elimina un producto del carrito según su índice

    if (this.productos.length === 0) {
      this.subtotal = 0;
      this.igv = 0;
      this.total = 0;
    } else {
      this.calcularTotal(); // Recalcula el subtotal, IGV y total del carrito si aún hay productos
    }
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito(); // Vacía el carrito llamando al método correspondiente del servicio
    this.subtotal = 0;
    this.igv = 0;
    this.total = 0;
  }

  calcularTotal() {
    this.subtotal = this.productos.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    ); // Calcula el subtotal sumando el precio de cada producto por su cantidad
    this.igv = this.subtotal * 0.18; // Calcula el IGV aplicando el porcentaje correspondiente
    this.total = this.subtotal + this.igv; // Calcula el total sumando el subtotal y el IGV
  }

  incrementarCantidad(producto: any) {
    if (!producto.cantidad) {
      producto.cantidad = 1; // Inicializa la cantidad en 1 si no está definida
    } else {
      producto.cantidad++; // Incrementa la cantidad si ya está definida
    }
    this.calcularTotal(); // Recalcula el subtotal, IGV y total del carrito
  }

  decrementarCantidad(producto: any) {
    if (producto.cantidad && producto.cantidad > 1) {
      producto.cantidad--; // Decrementa la cantidad si es mayor a 1
      this.calcularTotal(); // Recalcula el subtotal, IGV y total del carrito
    }
  }

  openComponentDialog(): void {
    const dialogRef = this.dialog.open(StepperComponent, {
      disableClose: false,
    }); // Abre el diálogo del componente Stepper
  }
}