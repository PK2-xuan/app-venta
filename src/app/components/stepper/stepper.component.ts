import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators,  FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { CarritoService } from "src/app/service/carrito.service";
import { MatDialogRef } from '@angular/material/dialog';
import { ReniecService } from 'src/app/service/reniec.service';

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

  dni: string = ''
  nombre: string = ''
  apellidoPaterno: string = ''
  apellidoMaterno: string = ''
  successRequest: boolean = false
  cargando: boolean = false
  mensajeApi: string = ''

  productosCarrito: any[] = [];

  constructor(
    private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<StepperComponent>, 
    private carritoService: CarritoService, public reniecService: ReniecService) {  }

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

  validarDatos(): any {
    // pasar al siguiente matStepperNext

    this.nombre = ''
    this.apellidoPaterno = ''
    this.apellidoMaterno = ''
    this.successRequest = false
    this.cargando = true
    this.mensajeApi = ''

    this.reniecService.getDatosReniec(this.dni).subscribe({
      next: (data: any) => {
        let { nombres, apellidoPaterno, apellidoMaterno, success } = data 
        this.nombre = nombres
        this.apellidoPaterno = apellidoPaterno
        this.apellidoMaterno = apellidoMaterno
        this.successRequest = success
        this.cargando = false
        this.mensajeApi = success ? 'Datos encontrados' : 'Datos no encontrados, el cliente es menor de edad'

        // pasar al siguiente matStepperNext
        this.secondFormGroup.controls['nombre'].setValue(nombres);
        this.secondFormGroup.controls['apellido'].setValue(apellidoPaterno);
        this.secondFormGroup.controls['materno'].setValue(apellidoMaterno);
        
      },
      error: (error: any) => {
        console.log('error', error);
        this.cargando = false
        this.mensajeApi = 'Error al consultar la API'
      }
    })
  }
 
  
}
