import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewCardComponent } from 'src/app/components/new-card/new-card.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css'],
})
export class ViewBoardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  newCard() {
    this.dialog.open(NewCardComponent, { width: '500px' });
  }
}
