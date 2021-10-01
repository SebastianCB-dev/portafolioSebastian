import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

import  *  as  data  from  '../../json/certificados.json';
import { Certificado } from '../../interfaces/certificado.interface';

@Component({
  selector: 'app-ver-certificate',
  templateUrl: './ver-certificate.component.html',
  styleUrls: ['./ver-certificate.component.css']
})
export class VerCertificateComponent implements OnInit {

  certificates:  Certificado[]  = (data  as  any).default;
  certificadoActivo!: Certificado;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck('id')
    )
    .subscribe( id => {
      const  validateCertificate: Certificado | undefined = this.certificates.find( c => c.id_web === id );
      if( !validateCertificate ) {
        this.router.navigate(['404']);
      }
      
      this.certificadoActivo = this.getCertificado(id)[0];
      
    } );
  }

  getCertificado( id: string ): Certificado[] {
    return this.certificates.filter( certificado => certificado.id_web === id );
  }

}
