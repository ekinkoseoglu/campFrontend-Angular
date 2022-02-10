import { Component } from '@angular/core'; // Using ....

@Component({
  // [Component] attribute
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // public class AppComponent {....}
  title: string = 'northwin"d';
  user: string = 'Ekin Köseoğlu';
}
