import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CarsPage } from '../pages/cars/cars';
import { ContactPage } from '../pages/contact/contact';
import { SimkredPage } from '../pages/simkred/simkred';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Halaman Utama', component: HomePage, icon: 'home'},
      { title: 'Stok Mobil', component: CarsPage, icon: 'car'},
      { title: 'Hubungi Kami', component: ContactPage, icon: 'call'},
      { title: 'Simulasi Kredit', component: SimkredPage, icon: 'calculator'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  title = 'angular 4 with jquery';
  toggleTitle() {
    $('.title').slideToggle();
  }
}
