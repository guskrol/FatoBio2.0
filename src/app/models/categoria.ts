import { Noticia } from '../models/noticia';

export class Categoria {
    id: number;
    nome: string;
    noticias: Noticia[];
    acertos: number = 0;
    erros: number = 0;
  
    constructor() {}
  }
