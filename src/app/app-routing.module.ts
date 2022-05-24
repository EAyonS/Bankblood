import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateListComponent } from './Components/certificate-list/certificate-list.component';
import { ComoComponent } from './Components/como/como.component';
import { DonatorsComponent } from './Components/donators/donators.component';
import { DondeComponent } from './Components/donde/donde.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { PacientComponent } from './Components/pacient/pacient.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegdonantComponent } from './Components/regdonant/regdonant.component';
import { RegisterComponent } from './Components/register/register.component';
import { StadisticComponent } from './Components/stadistic/stadistic.component';
import { AddCertificateComponent } from './Components/add-certificate/add-certificate.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: 'certificate-list', component: CertificateListComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'donde', component: DondeComponent},
  {path: 'como', component: ComoComponent},
  {path: 'register', component: RegisterComponent, /*canActivate: [AuthGuard]*/},
  {path: 'pacient', component: PacientComponent},
  {path: 'donators', component: DonatorsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'stadistic', component: StadisticComponent},
  {path: 'regdonant', component: RegdonantComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'addcertificate', component: AddCertificateComponent},
  {path: 'certificatelist', component: CertificateListComponent},
  {path: 'login', loadChildren: () => import('../app/auth/auth.module').then((m) => m.AuthModule), }
  //{path: '**', component: 404PageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
