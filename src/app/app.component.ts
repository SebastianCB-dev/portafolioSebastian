import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(
    private primeNgConf: PrimeNGConfig
  ){}

  ngOnInit() {
      this.primeNgConf.ripple = true;
  }

}
