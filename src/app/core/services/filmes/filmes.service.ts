import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Filme = {
  filme: string;
};

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  private filmesObservable = new BehaviorSubject<Filme[]>([
    {
      filme: 'Avatar',
    },
    {
      filme: 'Um lugar silencioso',
    },
  ]);
  listaFilmes$ = this.filmesObservable.asObservable();

  addNovoFilme(filme: Filme) {
    const oldValues = this.filmesObservable.getValue();
    this.filmesObservable.next([...oldValues, filme]);
  }
}
