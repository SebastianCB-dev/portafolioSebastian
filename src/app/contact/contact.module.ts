import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule, 
    PrimeNgModule   
  ]
})
export class ContactModule { }
