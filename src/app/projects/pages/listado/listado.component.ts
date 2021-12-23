import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redireccionar( url: string ) {
    window.open( url , '_blank')
  }

  responsiveCard(): string {
    if(screen.width <= 520) {
      return "width: 90% !important";
    }
    else {
      return "width: 360px !important";
    }
  }

}
