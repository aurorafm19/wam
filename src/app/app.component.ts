import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wam';
  defaultLanguage = 'es';

  constructor(
    private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');

  }

  ngOnInit() {
    this.initLanguage();
  }

  initLanguage() {
    this.translate.use(this.defaultLanguage).subscribe(
      () => console.log('using' + this.defaultLanguage),
      () => {}
    );
  }
}
