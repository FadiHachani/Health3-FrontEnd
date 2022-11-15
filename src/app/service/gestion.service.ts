import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { map } from 'rxjs/operators';
import { RequestOptions ,Headers} from '@angular/http';
import {Router} from'@angular/router'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionService {

  detailph:any;
rm=new BehaviorSubject([])
 datachange=this.rm.asObservable()
  constructor(private http:Http) { }
  optionHeader() : RequestOptions{
    let token=localStorage.getItem('x-token');
    let headers=new Headers();
    headers.append('x-token',token);
    let options=new RequestOptions({ headers :headers});
    return options
  }

  getAllpost(){
    return this.http.get('http://172.20.10.5:3000/post/allPost',this.optionHeader())
    .pipe(map(res=> {return res.json()}))

  }
  getAllReminder(){
    return this.http.get('http://172.20.10.5:3000/reminder/allReminder',this.optionHeader())
    .pipe(map(res=> {
      
      
      return res.json()}))

  }
  newReminder(body){
    return this.http.post('http://172.20.10.5:3000/reminder/newReminder',body,this.optionHeader())
    .pipe(map(res=> {
      
      return res.json()

    }))

  }
  setReminder(body){
    return this.http.put('http://172.20.10.5:3000/reminder/setReminder/'+body._id,body,this.optionHeader())
    .pipe(map(res=> {
      
      return res.json()

    }))

  }
  changeph(p){
    this.detailph=p
  }
  
}
