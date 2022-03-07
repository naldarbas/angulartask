import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  // any that mean object form any type
  todo: any;

  constructor() {
   }
  ngOnInit(): void {
  }

}
