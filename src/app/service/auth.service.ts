import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { map } from 'rxjs/operators';
import { RequestOptions ,Headers} from '@angular/http';
import {Router} from'@angular/router'
import {JwtHelper, tokenNotExpired} from 'angular2-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  postUser(obj: { desc: any; postPic: any; }) {
    throw new Error("Method not implemented.");
  }
  decoded: any;
  optionHeader() : RequestOptions{
    let token=localStorage.getItem('x-token');
    let headers=new Headers();
    headers.append('x-token',token);
    let options=new RequestOptions({ headers :headers});
    return options
  }
  constructor(private http:Http,private router:Router) { }


  loginUser(formlogin){
return this.http.post('http://172.20.10.5:3000/user/authUser',formlogin).pipe(map(res=>{
  return res.json()
}))
  }
  registerUser(formregister){
    return this.http.post('http://172.20.10.5:3000/user/newUser',formregister).pipe(map(res=>{
      return res.json()
    }))
      }

      createImg(image){
        return this.http.post('http://172.20.10.5:3000/user/upload',image).pipe(map(res=>{
          return res.json()
        }))
          }

          currentUser(){
            return this.http.get('http://172.20.10.5:3000/user/CurrentUser',this.optionHeader())
            .pipe(map(res=>{
              return res.json()
            }))
              }

              
              
              
              
              logOut(){
                localStorage.removeItem('x-token');
                this.router.navigate(['']);
              }
              uploadUser(formpost){
                return this.http.post('http://172.20.10.5:3000/post/newPost',formpost,this.optionHeader())
                .pipe(map(res=>{
                  return res.json()
                }))
                  }


                  islogged(){
  
                    let token=localStorage.getItem('x-token');
                    console.log(tokenNotExpired(token))
                    if(!token)
                    return false;
                    
                    let jwtHelper=new JwtHelper();
                    let expirationdate=jwtHelper.getTokenExpirationDate(token);
                    let isExpiredToken=jwtHelper.isTokenExpired(token)
                       console.log("date"+ expirationdate);
                       console.log("isexpired"+ isExpiredToken);
                       return !isExpiredToken;
                  }      
}
