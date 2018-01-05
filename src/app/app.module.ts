import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DjApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    DjApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(DjApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DjApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
