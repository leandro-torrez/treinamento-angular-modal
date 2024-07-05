import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ModalService } from './core/services/modal/modal.service';
import { FilmesService } from './core/services/filmes/filmes.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private modalService = inject(ModalService);
  private filmesService = inject(FilmesService);
  listaFilmes$ = this.filmesService.listaFilmes$;
  title = 'angular-material';

  abrirModal() {
    this.modalService.abrirModal(
      'É assim que se faz um modal basico no angular material'
    );
  }

  abrirModalInput() {
    this.modalService.abrirModalInput(
      'É assim que se faz um modal basico no angular material'
    );
  }

  abrirNovoModalInput() {
    this.modalService.abrirNovoModalInput({ filme: '' }).subscribe((result) => {
      console.log('result', result);
      this.filmesService.addNovoFilme({ filme: result });
    });
  }
}
