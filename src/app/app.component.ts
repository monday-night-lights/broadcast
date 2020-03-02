import { Component } from '@angular/core';
import { FileService } from './services/file-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FileService]
})
export class AppComponent {
  title = 'broadcast';
}
