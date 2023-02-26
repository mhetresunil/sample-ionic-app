import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastProvider } from '../../providers/toast/toast';
/*
  Generated class for the ErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorHandlerProvider {

  constructor(public http: HttpClient, 
    public toastProvider: ToastProvider) {
  }

  handleError(error) {
    // TO DO: hanlde errors based on error object

    this.toastProvider.presentToast('Something went wrong. Please try again');
  }
}
