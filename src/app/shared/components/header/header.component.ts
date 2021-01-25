import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../../core/models/language-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languageList = [] as Language[];
  selectedLanguage = {} as Language;


  constructor(
    private trans: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.languageList = [
      { text: 'MAIN.HEADER.LAN_SELECTOR.ES', locale: 'es' },
      { text: 'MAIN.HEADER.LAN_SELECTOR.EN', locale: 'en' },
    ];
    this.selectedLanguage = this.languageList.find((lan: Language) => this.trans.currentLang === lan.locale) || {text: 'MAIN.HEADER.LAN_SELECTOR.ES', locale: 'es'} as Language;
  }

  onSetLanguage(event) {
    if (this.selectedLanguage.locale === event.value) {
      return;
    }
    this.selectedLanguage = this.languageList.find((language: Language) => language.locale === event.value) || {} as Language;
    this.trans.use(this.selectedLanguage.locale)
      .subscribe(
        () => {},
        () => { });
  }

  onNavToInProgress() {
    this.router.navigate(['in-progress']);
  }

  onNavToHome() {
    this.router.navigate(['home']);
  }
}
