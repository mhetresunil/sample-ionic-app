import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(public http: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController) {
  }

  getLoader() {
    return this.loadingController.create({
      content: 'Please wait...',
      showBackdrop: false
    });
  }

  async show(loader) {
    await loader.present();
  }

  hide(laoder) {
    laoder.dismiss();
  }
}
