import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { GestionService } from '../service/gestion.service';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
interface User{
  nom:string,
  email:string,
  profile_pic:Array<string>
  user_name:string,
  _id:string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  nom:User
  profile:User;
  image:string

  tabpro=[]
  tabPh=[
{nom:"Ibn Sin Pharmacy",lat:34.419957,lng:8.788322,
desc:" Mohammed Khadouna Avenue Gafsa 2100 Gafsa",

num:"Phone Number : 76 220 999",

temp:"Opening Time :  06:00–20:00"

}]
tabPh2=[
{nom:"Night Pharmacy",lat:34.419953,lng:8.787909}

  ]
  constructor(private serv:AuthService,
    private serv2:GestionService,
    private router:Router,
    private localNotifications: LocalNotifications

    ) { }

  ngOnInit() {
    
    this.serv.currentUser().subscribe(res=>{
      console.log(res.resultat)
      this.profile=res.resultat
      console.log(this.profile)
      this.image=this.profile.profile_pic[0]
    })
    
  }
  gopharmacie(p){
    console.log(p)
    this.serv2.changeph(p)
    this.router.navigate(['/tabs/profile/detailPharmacie'])
  }
  logout(){
    this.serv.logOut()
  }
 
}
