import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {
    let data = localStorage.getItem('boards');
    if (data != null) {
      this.boards = JSON.parse(data);
    }
  }

  public boards: Array<any> = [];

  public createBoard(title: string) {
    let newBoard = { title, cards: [] };
    this.boards.push(newBoard);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }
}

let board = {
  title: '',
  cards: [{ title: '', checkList: ['task1', 'task2'], status: [true, false] }],
};
