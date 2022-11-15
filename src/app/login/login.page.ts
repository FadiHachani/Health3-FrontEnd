import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup
  constructor(private fb:FormBuilder,
    public router: Router,
   private serv:AuthService,
   public alert: AlertController) {

    this.loginForm=this.fb.group({

      user_name:['',[Validators.required]],
      password:['',[Validators.required]],

    })
    }

  ngOnInit() {
   if(this.serv.islogged())
   {this.router.navigate(['/tabs'])}
  }
login(){
   
if(this.loginForm.valid){
  this.serv.loginUser(this.loginForm.value).subscribe(res=>{
    if(res.status){
localStorage.setItem('x-token',res.resultat)

      this.router.navigate(['/tabs'])
    }else{
      this.showalert("Error!",res.message)
    }
  },err=>{
    alert(err)
  })
}else{
  this.showalert("Error!","fill all info")
}

     
  }
  async showalert(title: string, content: string){
    const alert = await this.alert.create({
      header: title,
      message: content,
      buttons: ['OK']
  
    })
    await alert.present()
  }
}
