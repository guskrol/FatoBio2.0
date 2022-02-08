import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public categorias: Categoria[];

  constructor() { }
}