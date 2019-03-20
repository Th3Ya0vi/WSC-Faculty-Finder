
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { File } from '@ionic-native/file/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx'
import { FileTransfer } from '@ionic-native/file-transfer/ngx'
import { DocumentViewer } from '@ionic-native/document-viewer/ngx'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, Ng2SearchPipeModule],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
