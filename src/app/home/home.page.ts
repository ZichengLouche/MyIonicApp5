import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonRouterOutlet, IonNav } from '@ionic/angular';
import { ModalBaseComponent } from '../components/modal-base/modal-base.component';
import { ModalContentPage } from '../pages/modal-content/modal-content.page';
import { SettingsPage } from '../pages/settings/settings.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedItem: any = JSON.stringify({name: "home.page.ts default"});
  rootPage = ModalContentPage;
  @ViewChild("ionSubNav", { static: true }) nav: IonNav;
  courseId: any = 1004713057;
  showBackButton: boolean = true;

  constructor(private modalController: ModalController, private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    setTimeout(() => {
      this.selectedItem = {
        "lessonNumber": "1",
        "lessonId": "1049608891",
        "lessonName": "课程简介",
        "lessonDuration": "07:48",
      };

      this.selectedItem = JSON.stringify(this.selectedItem);
      this.nav.setRoot(this.rootPage, { lesson: this.selectedItem, toggleBackButton: this.toggleBackButton }); 

    }, 5000);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalBaseComponent,
      componentProps: { rootPage: ModalContentPage, }
    });

    await modal.present();

  }

  toggleBackButton = () => {
    this.showBackButton = !this.showBackButton;
    console.log(`toggleBackButton:${JSON.stringify(this.showBackButton)}`);
  }

}
