import { Component, OnInit, Injectable } from '@angular/core';
import { GestionService } from '../service/gestion.service';
import { AuthService } from '../service/auth.service';
import { interval } from 'rxjs';

interface User{
  nom:string,
  profile_pic:Array<string> 
  _id:string
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  nom:User
  profile:User;
  image:string

  tabPost=[]
  constructor(private serv:GestionService,
    private servi:AuthService) { }

  ngOnInit() {
    this.servi.currentUser().subscribe(res=>{
      console.log(res.resultat)
      this.profile=res.resultat
      console.log(this.profile)
      this.image=this.profile.profile_pic[0]
    })
    this.serv.getAllpost().subscribe(res=>{
     
      this.tabPost=res.resultat
     })
    const obs=interval(3000)
    obs.subscribe(res=>{
      this.serv.getAllpost().subscribe(res=>{
     
        this.tabPost=res.resultat
       })
    })

   
  }

}

