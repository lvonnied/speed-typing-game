import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SentencesService } from '../_services/sentences.service';
import { StatisticsService } from '../_services/statistics.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  private readonly TYPING_TIME = 30;

  userInput = '';
  map: { char: string; color: string }[] = [];
  time = this.TYPING_TIME;
  started = false;

  // ? Maybe this can be done differently
  interval: any = null;

  constructor(
    public dialog: MatDialog,
    private sentencesService: SentencesService,
    private statisticsService: StatisticsService) {
    this.initializeObjectArray(sentencesService.GetRandomSentence());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '300px',
      data: {
        accuracy: this.statisticsService.calculateAccuracy(this.userInput, this.map),
        time: this.time,
        wpm: this.statisticsService.calculateWPM(this.userInput, this.TYPING_TIME - this.time),
      },
    })

    dialogRef.afterClosed().subscribe(() => {
      this.time = this.TYPING_TIME;
      this.initializeObjectArray(this.sentencesService.GetRandomSentence());
      this.userInput = '';
      this.started = false;
    });
  }

  initializeObjectArray(text: string): void {
    this.map = text.split('').map((char) => ({
      char,
      color: 'black',
    }));
  }

  compareInput(): void {
    if (!this.started) {
      this.started = true;
      this.setInterval();
    } else if (this.map.length === this.userInput.length) {
      this.resetGame(this.interval);
    }
    for (let i = 0; i < this.map.length; i++) {
      if (this.userInput[i] === undefined) {
        this.map[i].color = 'black';
      } else if (this.userInput[i] === this.map[i].char) {
        this.map[i].color = 'green';
      } else {
        this.map[i].color = 'red';
      }
    }
  }

  setInterval(): void {
    this.interval = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        this.resetGame(this.interval);
      }
    }, 1000);
  }

  private resetGame(interval: any) {
    clearInterval(interval);
    this.openDialog();
  }
}
