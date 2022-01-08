import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoCertificatesComponent } from './pages/listado-certificates/listado-certificates.component';
import { VerCertificateComponent } from './pages/ver-certificate/ver-certificate.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListadoCertificatesComponent
      },
      {
        path: ':id',
        component:  VerCertificateComponent
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CertificatesRoutingModule { }
