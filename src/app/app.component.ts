import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserType } from '../types';
import { NgIf } from '@angular/common';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'initial-project';

  name: string = 'Igor';
  age: number = 24;
  city: string = 'Kyiv';

  counter: number = 0;

  user: UserType = {
    email: 'email@gmail.com',
    password: 'password',
  };

  isUserAdmin: boolean = false;

  names: Array<string> = ['Mark', 'Igor', 'Olena', 'Oleg'];

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }

  add10() {
    this.counter += 10;
  }

  minus10() {
    this.counter -= 10;
  }

  reset() {
    this.counter = 0;
  }

  changeUserName() {
    const randomName = this.names[Math.floor(Math.random() * this.names.length)];
    this.name = randomName;
  }

  setUserAdmin() {
    this.isUserAdmin = !this.isUserAdmin;
  }
}
