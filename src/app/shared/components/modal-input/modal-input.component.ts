import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalService } from '../../../core/services/modal/modal.service';
import { MatButton } from '@angular/material/button';
import { FilmesService } from '../../../core/services/filmes/filmes.service';

@Component({
  selector: 'app-modal-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
  ],
  templateUrl: './modal-input.component.html',
  styleUrl: './modal-input.component.scss',
})
export class ModalInputComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<ModalInputComponent>);
  data = inject(MAT_DIALOG_DATA);
  modalService = inject(ModalService);
  ngOnInit(): void {
    console.log(this.data);
  }

  fecharModal() {
    this.dialogRef.close();
  }
}
