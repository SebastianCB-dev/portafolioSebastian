import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    GithubComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule,
    PrimeNgModule
  ]
})
export class GithubModule { }
