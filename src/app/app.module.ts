import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';
import { PlanningPage } from '../pages/planning/planning';
import { PaymentPage } from '../pages/payment/payment';
import { HubPage } from '../pages/hub/hub';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        PlanningPage,
        TimelinePage,
        PaymentPage,
        HubPage,
        SearchPipe,
        SortPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp, {
            iconMode: 'md',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            pageTransition: 'md-transition',
            mode: 'md'
        }),
        IonicStorageModule.forRoot(),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        PlanningPage,
        TimelinePage,
        PaymentPage,
        HubPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ConferenceData,
        UserData,
    RestApiProvider,
    ]
})
export class AppModule { }
