import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'certificates',
    loadChildren: () => import('./certificates/certificates.module').then( m => m.CertificatesModule )
  },
  {
    path: 'tecnologias',
    loadChildren: () => import('./tech/tech.module').then( m => m.TechModule )
  },
  {
    path: 'github',
    loadChildren: () => import('./github/github.module').then( m => m.GithubModule )
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsModule )
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[ 
    RouterModule
  ]
})
export class AppRouterModule { }
