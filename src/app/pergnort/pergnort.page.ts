import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pergnort',
  templateUrl: './pergnort.page.html',
  styleUrls: ['./pergnort.page.scss'],
})
export class PergnortPage implements OnInit {
  public opcao = 0;
  constructor(private route: ActivatedRoute) { }
  

  ngOnInit() {
    
    this.opcao = Number(this.route.snapshot.paramMap.get('id'));
  }  
}

  