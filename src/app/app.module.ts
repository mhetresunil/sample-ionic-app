import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostProvider } from '../providers/post/post';
import { GatewayProvider } from '../providers/gateway/gateway';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';
import { ToastProvider } from '../providers/toast/toast';
import { PipesModule } from '../pipes/pipes.module';
import { UtilProvider } from '../providers/util/util';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PostProvider,
    GatewayProvider,
    ErrorHandlerProvider,
    ToastProvider,
    UtilProvider
  ]
})
export class AppModule { }
