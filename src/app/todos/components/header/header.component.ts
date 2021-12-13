import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text: string = '';

  changeText(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    this.text = target.value;
  }

  addTodo(): void {
    console.log('addTodo', this.text);
    this.todoService.addTodo(this.text);
    this.text = '';
  }

  constructor(private todoService: TodosService) {
    this.todoService.todos$.subscribe((todos) => {
      console.log('todos', todos);
    });
  }

  ngOnInit(): void {
  }

}
