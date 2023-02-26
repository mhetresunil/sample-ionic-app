import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(public toastController: ToastController) {
    console.log('Hello ToastProvider Provider');
  }

  async presentToast(message, timeout?: number) {
    const toast = await this.toastController.create({
      message,
      duration: timeout || 2000,
      position: 'top'
    });
    toast.present();
  }
}
