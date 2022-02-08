import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-horainves',
  templateUrl: './horainves.page.html',
  styleUrls: ['./horainves.page.scss'],
})
export class HorainvesPage implements OnInit {

  constructor(public alert:AlertController, 
              private router: Router) { }
  async abrirAlert(msg){
    const alert = await this.alert.create({
      header: 'Atenção',
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async abrirOpcoes(id) {
    this.router.navigateByUrl('pergnort/' + id);
  }

  ngOnInit() {
  }
}
