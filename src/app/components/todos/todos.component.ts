import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [
    {
      id: 1,
      task: 'First Task',
      completed: false,
    },
    {
      id: 2,
      task: 'Sec Task',
      completed: false,
    },
    {
      id: 3,
      task: 'Therd Task',
      completed: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
