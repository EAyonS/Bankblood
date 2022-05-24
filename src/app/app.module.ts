import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import {AngularFireModule} from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilelistComponent } from './Components/filelist/filelist.component';
import { AddCertificateComponent } from './Components/add-certificate/add-certificate.component';
import { CertificateDetailsComponent } from './Components/certificate-details/certificate-details.component';
import { CertificateListComponent } from './Components/certificate-list/certificate-list.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { DondeComponent } from './Components/donde/donde.component';
import { ComoComponent } from './Components/como/como.component';
import { RegisterComponent } from './Components/register/register.component';
import { PacientComponent } from './Components/pacient/pacient.component';
import { DonatorsComponent } from './Components/donators/donators.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { StadisticComponent } from './Components/stadistic/stadistic.component';
import { RegdonantComponent } from './Components/regdonant/regdonant.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { ReghospitalComponent } from './Components/reghospital/reghospital.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FilelistComponent,
    AddCertificateComponent,
    CertificateDetailsComponent,
    CertificateListComponent,
    InicioComponent,
    DondeComponent,
    ComoComponent,
    RegisterComponent,
    PacientComponent,
    DonatorsComponent,
    ProfileComponent,
    StadisticComponent,
    RegdonantComponent,
    NotificationsComponent,
    ReghospitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
  ],
  providers: [AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
