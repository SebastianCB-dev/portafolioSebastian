import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GithubComponent,
        pathMatch: 'full'
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
export class GithubRoutingModule { }
