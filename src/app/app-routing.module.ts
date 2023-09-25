import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { RecuperarPasswordComponent} from './components/recuperar-password/recuperar-password.component';
import { P404Component } from './components/p404/p404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';


const routes: Routes = [

  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path:'login', component: LoginComponent},
  { path:'registrar-usuario', component: RegistrarUsuarioComponent},
  { path:'verificar-correo', component: VerificarCorreoComponent},
  { path:'recuperar-password', component: RecuperarPasswordComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'**', component: P404Component}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
