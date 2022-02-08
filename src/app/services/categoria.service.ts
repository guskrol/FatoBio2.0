import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public categoriaSelecionada = null;

  constructor() { }

  list() {
    return fetch('./assets/data/noticias.json').then(res => res.json());
  }
}
