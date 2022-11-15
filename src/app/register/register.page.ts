import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlertController} from '@ionic/angular'
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  registerForm:FormGroup
  constructor(
    private fb:FormBuilder,
    public router: Router,
   private serv:AuthService,
   public alert: AlertController
    
    
    ) {

      this.registerForm = this.fb.group({
        nom: ['',[Validators.required]],
        email: ['',[Validators.required]],
        user_name: ['',[Validators.required]],
        password: ['',[Validators.required]],
        cpassword: ['',[Validators.required]],

        profile_pic: ['',[Validators.required]]
      })
     }

  ngOnInit() {
  }
  multiImage
  selectedM(event) {
    this.multiImage = event.target.files;

    console.log(this.multiImage)
  }

 register(){
    if(this.registerForm.value.password !== this.registerForm.value.cpassword){
      this.showalert("Error!","passwords don't match")
      return console.error("passwords don't match")
    }
    const formData = new FormData();
    for (let img of this.multiImage)
      formData.append('myFiles', img)
    console.log(formData)
    this.serv.createImg(formData).subscribe(res => {

     let obj={
      nom:this.registerForm.value.nom,
      email: this.registerForm.value.email,
      user_name: this.registerForm.value.user_name,
      password: this.registerForm.value.password,

      profile_pic: res
     }
      

      this.serv.registerUser(obj).subscribe(res=>{
        if(res.status){
          this.router.navigate(['login'])
        }
      })
    })
    
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
