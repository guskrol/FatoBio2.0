import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private toast: ToastController) { }

  public async createMessage(message: string) {
    const toast = await this.toast.create({
      message,
      position: 'bottom',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
