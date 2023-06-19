import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators,  FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { CarritoService } from "src/app/service/carrito.service";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class StepperComponent{

  productosCarrito: any[] = [];

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<StepperComponent>, private carritoService: CarritoService) {  }

  ngOnInit() {
    this.carritoService.carritoActualizado.subscribe((productos) => {
      this.productosCarrito = productos;
    });
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
      nombre: ['', Validators.required], 
      apellido: ['', Validators.required],
      materno: ['', Validators.required],
      edad: ['', Validators.required]
  });

  cerrarStepper() {
    this.carritoService.vaciarCarrito();
    this.dialogRef.close();
  }
 
  // cerrarStepper(stepper: MatStepper) {
  //   stepper.selectedIndex = -1; // Establece el índice en un valor fuera del rango de los pasos disponibles
  // }

  //   dni!: string;
  // ngOnInit() { this.dni = ''; }
  // finalizar(){}
}
