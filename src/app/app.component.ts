import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public myCustomIcon = "/assets/shapes.svg";

  public appPages = [
    { title: 'Voltar ao jogo', url: '/', icon: 'mail', src: '/assets/img/voltarjogo.svg' },
    { title: 'Sobre o jogo', url: '/about', icon: 'paper-plane', src: '/assets/img/sobrejogo.svg' },
    //{ title: 'Site OMS', url: '/about', icon: 'heart', src: '/assets/img/web.svg' },
    { title: 'Aplicação em aula', url:'/application', icon: 'custom-ensino', src: '/assets/img/aula.svg' },
    { title: 'Hora da investigação', url: '/horainves', icon: 'hora-inves', src: '/assets/img/horainves.svg' },
    { title: 'Reiniciar o jogo', url: '/', icon: 'refresh-outline', src: '/assets/img/refresh.svg'},


    //{ title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
//public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  //constructor() {}
}
