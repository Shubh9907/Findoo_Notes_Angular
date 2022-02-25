import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http'
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  getData(url: string): any {
    return this.httpClient.get<User[]>(`${this.baseUrl + url}`);
  }

  postRequest(body: any, url: String) {
    return this.httpClient.post(`${this.baseUrl + url}`, body);
  }

  postNote(body: any, token: string, url: String) {
    return this.httpClient.post(`${this.baseUrl + url}`, body, {headers: {'token':token } } );
  }

  trashArchieveNote(id:number, url: string, token: string) {
    return this.httpClient.put(`${this.baseUrl + url +"/" +id}`, null, {headers: {'token':token }});
  }

  delete(id:number, url: string, token: string){
    return this.httpClient.delete(`${this.baseUrl + url+"/" + id}`, {headers: {'token':token }})
  }
}
