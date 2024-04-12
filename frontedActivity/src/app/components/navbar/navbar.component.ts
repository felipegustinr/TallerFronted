import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LoginComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
}
