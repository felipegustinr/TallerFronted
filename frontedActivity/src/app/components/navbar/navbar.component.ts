import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
}
