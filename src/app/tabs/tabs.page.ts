import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
user;
  constructor(private serv:AuthService) { }

  ngOnInit() {
    this.serv.currentUser().subscribe(res=>{
      this.user=res.resultat
    })
  }

}
