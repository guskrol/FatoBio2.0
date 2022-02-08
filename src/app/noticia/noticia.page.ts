import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Categoria } from '../models/categoria';
import { Noticia } from '../models/noticia';
import { CategoriaService } from '../services/categoria.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
  public categoria: Categoria;
  public noticia: Noticia;
  public showFeedback: boolean = false;
  public showResultado: boolean = false;
  public showDicaBio: boolean = false;
  
  public acertos: number = 0;
  public erros: number = 0;

  private idCat: number;
  private i: number = 0;

  constructor(private route: ActivatedRoute,
              public alert: AlertController,
              private router: Router,
              private categoriaService: CategoriaService,
              public user: UserService) { }


  ngOnInit() {
  }

  async abrirAlert(){
    const alert = await this.alert.create({
      cssClass: 'alert-class',
      header: 'Instruções',
      message: 'Leia atentamente as notícias. Preencha as opções de acordo com suas observações sobre a notícia. Siga as instruções do botão “Dica Bio”,  e caminhe de forma investigativa para a construção da sua hipótese sobre a veracidade ou não da notícia.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async abrirAlert2(){
    const alert = await this.alert.create({
      cssClass: 'alert-class',
      header: 'Alert2',
      subHeader: 'Subtitle2',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

  }

  ionViewWillEnter() {
    this.idCat = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData();
  }

  loadData(){
    if (this.idCat != null){
      this.categoriaService.list().then(data => {
        const categorias:Categoria[] = (data as []);
        this.user.categorias = categorias;
        this.categoria = categorias[this.idCat];
        if (this.categoria != null) {
          this.categoria.acertos = 0;
          this.categoria.erros = 0;
          this.noticia = this.categoria.noticias[this.i++];
        }
      });  
    }
  }

  validarNoticia(resposta) {
    if (resposta == this.noticia.resposta) {
      this.categoria.acertos++;
    } else {
      this.categoria.erros++;
    }
    this.showFeedback = true;
  }

  exibirDicaBio() {
    this.showDicaBio = !this.showDicaBio;
  }

  getProxima() {
    if (this.categoria.noticias != null){
      if (this.i < this.categoria.noticias.length) {
        this.showFeedback = false;
        this.noticia = this.categoria.noticias[this.i++];
      } else {
        this.noticia = null;
        this.showFeedback = false;
        this.showResultado = true;
        this.acertos = this.categoria.acertos;
        this.erros = this.categoria.erros;
      }
    }
  }

  goCategorias() {
    this.router.navigateByUrl('/');
  }
}


export class SlideExample {
  
  slideOpts = {
    initialSlide: 0,
    speed: 2000
  }
}

