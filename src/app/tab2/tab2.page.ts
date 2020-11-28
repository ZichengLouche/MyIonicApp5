import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private popoverController: PopoverController) { }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async presentPopover(ev: any) {
    let PopoverComponent = `
      <p class="title j-title">课时15：学习css到底是学习什么</p>
      <p class="content j-content" style="max-height: 201px;">学习css到底是学习什么</p>
    `;
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
