import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'pl', 'ua']);
    translate.setDefaultLang('en');
  }
}
