import { Component, OnInit } from '@angular/core';
import { CertificadoItem } from '../../interfaces/certificado.interface';

@Component({
  selector: 'app-listado-certificates',
  templateUrl: './listado-certificates.component.html',
  styleUrls: ['./listado-certificates.component.css']
})
export class ListadoCertificatesComponent implements OnInit {

  constructor() {
    
  }

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
      router: 'TypeScript',
      srcImage: 'TypeScript',
      title: 'TypeScript',
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
      title: 'Git-Hub',
    },
    {
      router: 'LinuxI',
      srcImage: 'LinuxI',
      title: 'Linux',
    },
    {
      router: 'CompetenciasDigitales',
      srcImage: 'CompetenciasDigitales',
      title: 'Digital literacy',
      iconClass: 'pi pi-google'
    },
    {
      router: 'ComercioElectronicoMercadoLibre',
      srcImage: 'ComercioElectronicoMercadoLibre',
      title: 'e-Commerce'
    }
  
  ]

  ngOnInit(): void {
  }

}
