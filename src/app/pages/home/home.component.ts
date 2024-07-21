import { Component } from '@angular/core';
import { AuthenticationButtonComponent } from '../../components/authentication-button/authentication-button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AuthenticationButtonComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
