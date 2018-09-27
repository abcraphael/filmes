import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Filme } from '../../modelo/filme';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FilmesServiceProvider } from '../../providers/filmes-service/filmes-service';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public filmes: Filme[];
  constructor(public navCtrl: NavController,
    private http: HttpClient,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private filmeService: FilmesServiceProvider) {
      let loading = this.loadCtrl.create({
        content: 'Carregando filmes'
      }); 
      loading.present();
      this.filmeService.lista().subscribe(

        (filmes) => {
          this.filmes = filmes;
          loading.dismiss();
        },(err:HttpErrorResponse) => {
            console.log(err);
            loading.dismiss();
            this.alertCtrl.create({
              title: 'Falha',
              subTitle: 'Não foi possível carregar',
              buttons: [
               {text: 'ok'}
              ]
            }).present();
        }    
      )
    }
    selecionaFilme(filme: Filme){
      this.navCtrl.push(DetalhesPage,{
        filmeSelecionado: filme
      });

    }
}
  
