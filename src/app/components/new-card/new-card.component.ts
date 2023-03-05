import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css'],
})
export class NewCardComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<NewCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  title: string = '';
  tasksLoop: any = [false];
  tasks: Array<string> = [];

  addTask() {
    this.tasks.push('');
    this.tasksLoop.push(false);
  }
  deleteTask(idx: any) {
    this.tasks.splice(idx, 1);
    this.tasksLoop.splice(idx, 1);
  }

  close() {
    this.dialogRef.close();
  }

  create() {}
}
