import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app  Vissai Kaludhai!';

  getClick(){
    console.log('hello');
    alert(10);
  }
}
