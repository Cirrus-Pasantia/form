import { Component } from '@angular/core';
import {dispatcher} from '@cirrusit/flux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formProject';
  name = 'GG';

  sendName(name) {
    console.log('sended name', name);
    window.localStorage.setItem('name', name);
    console.log(dispatcher);
    dispatcher.dispatch({
      type: 'SEND_NAME',
      data: name
    });
  }
}
