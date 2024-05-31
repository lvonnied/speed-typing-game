import { Component, Inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MAT_DIALOG_DATA, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  accuracy: number;
  time: number;
  wpm: number;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatButtonModule, CommonModule, MatIconModule, MatDialogActions, MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
