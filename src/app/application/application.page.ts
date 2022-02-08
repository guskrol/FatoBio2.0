import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class SlideExample {
  
  slideOpts = {
    initialSlide: 0,
    speed: 2000
  }
}