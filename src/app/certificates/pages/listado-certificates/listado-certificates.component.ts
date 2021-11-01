import { Component, OnInit } from '@angular/core';
import { CertificadoItem } from '../../interfaces/certificado.interface';

@Component({
  selector: 'app-listado-certificates',
  templateUrl: './listado-certificates.component.html',
  styleUrls: ['./listado-certificates.component.css']
})
export class ListadoCertificatesComponent implements OnInit {

  constructor() { }

  menuItem: CertificadoItem[] = [
    {
      router: 'HTML',
      srcImage: 'HTML',
      title: 'HTML5',
      iconClass: 'pi pi-google'
    },
    {
      router: 'CSS',
      srcImage: 'CSS',
      title: 'CSS3',
    },
    {
      router: 'JavaScript',
      srcImage: 'JavaScript',
      title: 'JavaScript',
    },
    {
      router: 'RxJs',
      srcImage: 'RxJs',
      title: 'RxJs',
    },
    {
      router: 'Angular',
      srcImage: 'Angular',
      title: 'Angular',
    },
    {
      router: 'GitHub',
      srcImage: 'GitHub',
      title: 'GitHub',
    },
    {
      router: 'LinuxI',
      srcImage: 'LinuxI',
      title: 'Linux',
    },
    {
      router: 'CompetenciasDigitales',
      srcImage: 'CompetenciasDigitales',
      title: 'Competencias Digitales',
      iconClass: 'pi pi-google'
    }
  
  ]

  ngOnInit(): void {
  }

}
