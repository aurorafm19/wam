import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/main/', suffix: '.json' },
    { prefix: './assets/i18n/step1/', suffix: '.json' },
    { prefix: './assets/i18n/step2/', suffix: '.json' },
    { prefix: './assets/i18n/result/', suffix: '.json' },
    { prefix: './assets/i18n/in-progress/', suffix: '.json' }
  ]);
}
@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ],

      }
    })
  ],
  exports: [
    TranslateModule
  ],
})
export class CoreModule { }
