import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './services/services.component';
import { TypesComponent } from './types/types.component';
import { ProviderAst } from '@angular/compiler';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/todo/todo.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    ComponentsComponent,
    TodosComponent,
    HeaderComponent,
    ServicesComponent,
    TypesComponent,
    MainComponent,
    TodoComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]

})
export class TodosModule { }
