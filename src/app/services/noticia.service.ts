import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {

  constructor() { 
  }

  get() {
    return fetch('./assets/data/noticias.json').then(res => res.json());
  }
}