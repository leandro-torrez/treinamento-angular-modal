import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalService } from '../../../core/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<ModalComponent>);
  data = inject(MAT_DIALOG_DATA);

  modalService = inject(ModalService);

  ngOnInit(): void {
    console.log('data', this.data);
  }

  fecharModal() {
    this.dialogRef.close();
  }
}
