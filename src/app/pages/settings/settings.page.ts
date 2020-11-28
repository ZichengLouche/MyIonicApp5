import { Component, OnInit } from '@angular/core';
import { ModalController, IonNav, Platform, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  p = 'test SettingsPage params';

  constructor(private modalController: ModalController, private nav: IonNav, private platform: Platform, private navParams: NavParams) { }

  ngOnInit() {
    this.canGoBack();
  }

  goBack() {
    this.nav.pop();
  }

  canGoBack() {
    this.nav.canGoBack().then((res) => {
      console.log(`CourseLessonComponent nav canGoBack -> ${res}`);
    });

    this.nav.getByIndex(0).then((res) => {
      console.log(`CourseLessonComponent nav getByIndex -> ${res}`);
    });
    
    this.nav.getActive().then((res) => {
      console.log(`CourseLessonComponent nav getByIndex -> ${res}`);
    });
  }

}
