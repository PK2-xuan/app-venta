import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { Credentials } from 'src/app/model/pruebita';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  // getContactos(): Observable<Contacto[]> {
  //   return this.httpClient.get<Contacto[]>(
  //     'http://localhost:8080/api/contactos'
  //   );
  // }

  login(creds: Credentials) {
    return this.httpClient
      .post('http://localhost:8080/login', creds, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const headers = response.headers;
          const bearerToken = headers.get('Authorization')!;
          const token = bearerToken.replace('Bearer ', '');

          localStorage.setItem('token', token);

          return body;
        })
      );
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
