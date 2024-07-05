import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ModalInputComponent } from '../../../shared/components/modal-input/modal-input.component';
import { Filme } from '../filmes/filmes.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private dialog = inject(MatDialog);

  abrirModal(mensagem: string) {
    this.dialog.open(ModalComponent, {
      data: { mensagem, nome: 'Leandro' },
    });
  }

  abrirModalInput(mensagem: string) {
    this.dialog.open(ModalInputComponent, {
      data: { mensagem, nome: 'Leandro' },
    });
  }

  abrirNovoModalInput(filme: Filme): Observable<any> {
    const dialogRef = this.dialog.open(ModalInputComponent, {
      data: filme,
    });
    return dialogRef.afterClosed();
  }

  fecharTodosModais() {
    this.dialog.closeAll();
  }
}
