import { Component, Inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export interface DialogData {
  accuracy: number;
  time: number;
  wpm: number;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatButtonModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
