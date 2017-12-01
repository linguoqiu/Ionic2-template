import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//prividers
import { FormValidators } from '../providers/common/form-validators.service';
import { GlobalData } from "../providers/common/global-data";
import { Helper } from "../providers/common/helper.service";
import { Utils } from "../providers/common/utils.service";
import { StorageService } from "../providers/common/storage.service";
import { HttpService } from "../providers/common/http.service";
import { NativeService } from "../providers/common/native.service";

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: '',
            tabsHideOnSubPages: true,
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            pageTransition: 'ios-transition',
            mode: 'ios'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        FormValidators,
        GlobalData,
        Helper,
        Utils,
        StorageService,
        HttpService,
        NativeService
    ]
})
export class AppModule { }
