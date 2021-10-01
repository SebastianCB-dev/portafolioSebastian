import { Component, OnInit } from '@angular/core';
import { delay, switchMap } from 'rxjs/operators';
import { ProfileGitHub } from './interfaces/profile.interface';
import { RepositoriosGitHub } from './interfaces/repositorios.interface';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  profile!: ProfileGitHub;
  repositorios!: RepositoriosGitHub[];
  lenguajes: any[] = []; 
  constructor(
    private ghService: GithubService
  ) { }

  ngOnInit(): void {
    this.ghService.traerDatos().pipe(
      delay(3000)
    ).subscribe( profile => {
      this.profile = profile
    } );

    //!  TODO: Refactorizar

    this.ghService.traerDatos().pipe(
      switchMap( data => this.ghService.traerRepositorio(data.repos_url) ),
      delay(3000)
    ).subscribe( repos => {
      this.repositorios = repos;      
      this.repositorios?.forEach( repo => this.ghService.traerLenguajes( repo.languages_url ).subscribe( l => this.lenguajes.push(l) ) )
    })

    

  }

  redirectToGithub() {
    window.open('https://github.com/SebastianCB-dev','_blank')
  }

}
