import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReniecService {

  token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN1YW5fYzFAb3V0bG9vay5jb20ifQ.IyJPBPJmR7OGTKyPQfSD2lmnFZN7_13Zfgbzqs0kuBY'

  constructor(public http: HttpClient) { }

  getDatosReniec(dni: string) {
    let url = 'https://dniruc.apisperu.com/api/v1/dni/' + dni + '?token=' + this.token

    return this.http.get(url)
  }
}
