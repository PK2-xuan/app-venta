import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';
import { ListaComponent } from './components/lista/lista.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   //{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta vacía que redirige a '/home'
//  // { path: 'home', component: HomeComponent }, // Página de inicio
//   //{ path: 'login', component: LoginComponent },
//   { path: 'lista', component: ListaComponent, canActivate: [AuthGuard] },
//   { path: 'lista-producto/:id', component: ListaProductoComponent },
// ];


const routes: Routes = [


  { path: 'lista', component: ListaComponent},
  { path: 'lista-producto/:id', component: ListaProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
