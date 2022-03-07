import { Component } from '@angular/core';
// 3-7 information about my component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-App';
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
