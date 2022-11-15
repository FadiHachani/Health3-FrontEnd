import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlertController} from '@ionic/angular'
import { AuthService } from '../service/auth.service';
import { GestionService } from '../service/gestion.service';
import { FeedPage } from '../feed/feed.page';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {  
  postForm:FormGroup
  constructor(
    private fb:FormBuilder,
    public router: Router,
   private serv:AuthService,
   public alert: AlertController,
    private serv2:GestionService,
    private feed:FeedPage
    ) {
      this.postForm = this.fb.group({
        desc: ['',[Validators.required]],
        postPic: ['',[Validators.required]]
      })
      
   }

  ngOnInit() {
  }
  multiImage
  selectedM(event) {
    this.multiImage = event.target.files;

    console.log(this.multiImage)
  }
  createPost(){
    const formData = new FormData();
    for (let img of this.multiImage)
      formData.append('myFiles', img)
    console.log(formData)
    this.serv.createImg(formData).subscribe(res => {

     let obj={
      desc:this.postForm.value.desc,
      postPic: res[0]
     }
      

      this.serv.uploadUser(obj).subscribe(res=>{
        
          this.feed.tabPost.push(obj)
          console.log( this.feed.tabPost)
             this.router.navigate(['/tabs/feed'])
        
      })
    })
  
  }


}
