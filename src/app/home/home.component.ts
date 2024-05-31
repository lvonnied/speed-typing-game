import { Component } from '@angular/core';
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
  time: number = this.TYPING_TIME;
  started: boolean = false;
  marginLeft: number = 50;

  interval: any = null;

  constructor(
    public dialog: MatDialog,
    private sentencesService: SentencesService,
    private statisticsService: StatisticsService) {
  }

  async ngOnInit(): Promise<void> {
    const sentence = await this.sentencesService.GetRandomSentence();
    this.initializeObjectArray(sentence);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '300px',
      data: {
        accuracy: this.statisticsService.calculateAccuracy(this.userInput, this.map),
        time: this.time,
        wpm: this.statisticsService.calculateWPM(this.userInput, this.time),
      },
    });

    dialogRef.afterClosed().subscribe(async () => {
      this.time = this.TYPING_TIME;
      const sentence = await this.sentencesService.GetRandomSentence();
      this.initializeObjectArray(sentence);
      this.userInput = '';
      this.started = false;
    });
  }

  initializeObjectArray(text: string): void {
    this.map = text.split('').map((char) => ({
      char,
      color: 'black',
    }));
    this.marginLeft = 50;
  }

  compareInput(): void {
    if (!this.started) {
      this.started = true;
      this.setInterval();
    } else if (this.map.length === this.userInput.length) {
      this.resetGame(this.interval);
    }

    // Calculate the margin left
    const proportion = this.userInput.length / this.map.length;
    const adjustmentFactor = 182;
    this.marginLeft = 50 - proportion * adjustmentFactor;

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
