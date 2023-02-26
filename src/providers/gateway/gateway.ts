import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GatewayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GatewayProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GatewayProvider Provider');
  }

  makeRequest(method, url, parameters: any) {
    const headersParams = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const httpHeaders = new HttpHeaders(headersParams);
    const body = method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ?
      parameters : null;
    const params = method.toLowerCase() === 'get' || method.toLowerCase() === 'delete' ?
      parameters : null;

    const options = {
      body,
      headers: httpHeaders,
      params
    };

    if (!method || !url) {
      throw new Error('method and url must be defined');
    }

    return this.http.request(method, url, options)
  }
}
