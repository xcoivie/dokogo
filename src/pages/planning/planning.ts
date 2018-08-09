import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

//import { Storage } from '@ionic/storage';

@Component({
    selector: 'planning-tutorial',
    templateUrl: 'planning.html'
})

export class PlanningPage {
    countries: string[];
    errorMessage: string;
    descending: boolean = false;
    order: number;
    column: string = 'name';
    showSkip = true;

    @ViewChild('slides') slides: Slides;

    constructor(
        public navCtrl: NavController,
        public menu: MenuController,
        public rest: RestApiProvider
        // public storage: Storage
    ) { }

    sort(){
         this.descending = !this.descending;
         this.order = this.descending ? 1 : -1;
    }
      

    startApp() {
        // this.navCtrl.push(TabsPage).then(() => {
        //     this.storage.set('hasSeenTutorial', 'true');
        // })
    }

    onSlideChangeStart(slider: Slides) {
        this.showSkip = !slider.isEnd();
    }

    ionViewWillEnter() {
        this.slides.update();
    }

    ionViewDidEnter() {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    }

    ionViewDidLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }

    ionViewDidLoad() {
        this.getCountries();
      }
      

    getCountries() {
        this.rest.getCountries()
           .subscribe(
             countries => this.countries = countries,
             error =>  this.errorMessage = <any>error);
      }

    public open(event, c) {
    event.stopPropagation();
    alert('Open ' + c);
    }
    
}
