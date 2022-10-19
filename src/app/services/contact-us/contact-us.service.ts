import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_CONSTANT } from 'src/app/core/constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  contactUs(payload:any){
    return this.http.post(API_CONSTANT.emailUrl,payload, { responseType: 'text' })
    .pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }else{
            return null;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
