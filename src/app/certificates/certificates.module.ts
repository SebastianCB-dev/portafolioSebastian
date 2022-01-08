import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { ListadoCertificatesComponent } from './pages/listado-certificates/listado-certificates.component';
import { VerCertificateComponent } from './pages/ver-certificate/ver-certificate.component';
import { ImagenPipePipe } from './pipes/imagen-pipe.pipe';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ListadoCertificatesComponent,
    VerCertificateComponent,
    ImagenPipePipe
  ],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    PrimeNgModule
  ]
})
export class CertificatesModule { }
