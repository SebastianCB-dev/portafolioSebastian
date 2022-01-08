import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileGitHub } from '../interfaces/profile.interface';
import { RepositoriosGitHub } from '../interfaces/repositorios.interface';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private _apiUrl = 'https://api.github.com/users/SebastianCB-dev';

  constructor(
    private http: HttpClient
  ) { }

  traerDatos(): Observable<ProfileGitHub> {
    return this.http.get<ProfileGitHub>(this._apiUrl);
  }
  
  traerRepositorio( url: string ): Observable<RepositoriosGitHub[]> {
    return this.http.get<RepositoriosGitHub[]>( url );
  }

  traerLenguajes( url: string ) {
    return this.http.get( url );
  }

}
