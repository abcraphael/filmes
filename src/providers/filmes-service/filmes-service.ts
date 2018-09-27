import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../../modelo/filme';

/*
  Generated class for the FilmesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmesServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FilmesServiceProvider Provider');
  }
  lista(){
    return this.http.get<Filme[]>('http://www.oraphael.com.br/json/filmes.json')
  }
}
