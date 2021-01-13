import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(
    public translate: TranslateService, 
    public breakpointObserver: BreakpointObserver
    ) {
      translate.addLangs(['en', 'ru', 'pl', 'ua']);
      translate.setDefaultLang('en');
    }

    public isSmallScreen!: any;

    ngOnInit(): void {
      this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    }

    switchLang(lang: string) {
    this.translate.use(lang);
  }

}
