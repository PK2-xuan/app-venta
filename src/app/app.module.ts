import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ListaComponent } from './components/lista/lista.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './components/stepper/stepper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CarritoComponent,
    ListaProductoComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule,
    AppRoutingModule,

    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
