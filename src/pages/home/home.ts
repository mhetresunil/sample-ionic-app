import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppConstants } from '../../enums/app-urls';

import { PostProvider } from '../../providers/post/post';
import { ToastProvider } from '../../providers/toast/toast';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
import { UtilProvider } from '../../providers/util/util';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts = [];
  searchText = '';

  constructor(public navCtrl: NavController,
    public postProvider: PostProvider,
    public errorHandlerProvider: ErrorHandlerProvider,
    public toastProvider: ToastProvider,
    public utilProvider: UtilProvider) {
    this.getPosts();
  }

  getPosts() {
    this.posts = [];
    const loader = this.utilProvider.getLoader();
    this.utilProvider.show(loader);
    this.postProvider.getPosts()
      .subscribe((result: any) => {
        this.utilProvider.hide(loader);

        if (result.length) {
          this.posts = result || [];
        } else {
          this.toastProvider.presentToast(AppConstants.POST_LIST_NOT_AVAILABLE);
        }
      }, error => {
        this.utilProvider.hide(loader);
        this.errorHandlerProvider.handleError(error);
      });
  }

  handleRefresh(event) {
    this.getPosts();
    event.complete();
  }
}
