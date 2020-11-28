import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ModalController, IonNav, Platform, NavParams } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {
  level = 0;
  nextPage = ModalContentPage;
  settingsPage = SettingsPage;
  selectedItem: any = {};
  @Input()
  lesson: any = JSON.stringify({name: "modal-content.page default"});
  toggleBackButton: Function;
  JSON:JSON = JSON;

  constructor(private modalController: ModalController, private nav: IonNav, private platform: Platform, private navParams: NavParams) {
    this.platform.backButton.subscribeWithPriority(101, async () => {
      let canGoBack = await this.nav.canGoBack();
      if (canGoBack) {
        this.nav.pop();
      } else {
        await this.modalController.dismiss();
      }
      return;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }

  ngOnInit() {
    let level = this.navParams.get('level');
    console.log(`accept level variable by navParams: ${ level } <=> accept level variable by member variable: ${ this.level }`);

    // this.canGoBack();
  }

  ngAfterViewInit(): void {
    this.toggleBackButton();
    setTimeout(this.toggleBackButton(), 0);
    setTimeout(this.toggleBackButton, 0);
    setTimeout(this.canGoBack.bind(this), 0);
    this.canGoBack();
  }

  goForward() {
    this.nav.push(this.nextPage, { level: this.level + 1 });
  }

  goRoot() {
    this.nav.popToRoot();
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

    this.nav.getByIndex(1).then((res) => {
      console.log(`CourseLessonComponent nav getByIndex -> ${res}`);
    });
    
    this.nav.getActive().then((res) => {
      console.log(`CourseLessonComponent nav getByIndex -> ${res}`);
    });
  }

  close() {
    this.modalController.dismiss();
  }

}
