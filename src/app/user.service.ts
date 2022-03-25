import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http'
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBaseUrl = "http://localhost:9003/user";
  private noteBaseUrl = "http://localhost:9003/note";


  constructor(private httpClient: HttpClient) { }

  getData(url: string, token:string): any {
    return this.httpClient.get<User[]>(`${this.noteBaseUrl + url}`, {headers: {'token':token }});
  }

  postRequest(body: any, url: String) {
    return this.httpClient.post(`${this.userBaseUrl + url}`, body);
  }

  postNote(body: any, token: string, url: String) {
    return this.httpClient.post(`${this.noteBaseUrl + url}`, body, {headers: {'token':token } } );
  }

  trashArchieveNote(id:string, url: string, token: string) {
    return this.httpClient.put(`${this.noteBaseUrl + url +"/" +id}`, null, {headers: {'token':token }});
  }

  delete(id:string, url: string, token: string){
    return this.httpClient.delete(`${this.noteBaseUrl + url+"/" + id}`, {headers: {'token':token }})
  }

  pin(id:string,url:string, token:string) {
    return this.httpClient.put(`${this.noteBaseUrl + url+"/" + id}`, null, {headers: {'token':token }} )
  }

  forgotPass(email:string) {
    return this.httpClient.get(`${this.userBaseUrl + "/forgetPassword"}`, {params:{'email':email}});
  }

  resetPass(body:any, token:string) {
    return this.httpClient.put(`${this.userBaseUrl+"/changePassword"}`, body , {params:{'token':token}});
  }

  searchNotes(key:string, token:string) {
    return this.httpClient.get(`${this.noteBaseUrl + "/searchnote"}`,{params:{'key':key} , headers: {'token':token }});
  }

  editNote(id:string, body:any) {
    return this.httpClient.put(`${this.noteBaseUrl + "/updateNote/" +id}`,body);
  }
}
