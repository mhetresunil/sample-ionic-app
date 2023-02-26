import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GatewayProvider } from '../gateway/gateway';
import { AppConstants } from '../../enums/app-urls';
/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  constructor(public http: HttpClient,
    private gatewayProvider: GatewayProvider) {
  }

  getPosts() {
    const url = `${AppConstants.BASE_URL}/posts`;

    return this.gatewayProvider.makeRequest('GET', url, {});
  }
}
