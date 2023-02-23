import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css'],
})
export class NewBoardComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<NewBoardComponent>) {}
  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
}
