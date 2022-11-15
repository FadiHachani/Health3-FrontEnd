import { Component, OnInit } from '@angular/core';
import { GestionService } from '../service/gestion.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { interval } from 'rxjs';
import { element } from 'protractor';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medminders',
  templateUrl: './medminders.page.html',
  styleUrls: ['./medminders.page.scss'],
})
export class MedmindersPage implements OnInit {
  tabReminder=[]
  submitted: boolean;
  constructor(private serv:GestionService,
    private localNotifications: LocalNotifications,
    public alert: AlertController) { }
    obs = interval(10000)

  ngOnInit() {
    this.serv.getAllReminder().subscribe(res=>{
      console.log(res)
      
      this.serv.rm.next(res.resultat)
      console.log(this.tabReminder)
    })
    this.submitted=false
    this.serv.datachange.subscribe(x=>{
      console.log(x)
      this.tabReminder=x
    })

    this.obs.subscribe(int=>{
      this.serv.datachange.subscribe(x=>{
        console.log(x)
        this.tabReminder=x
      })
     let  isAndroid=false
      this.tabReminder.forEach(el=>{
        if(el.remindTime == el.next){
          this.showalert("Medicine Time",el.medName)
          this.localNotifications.schedule([{
            id: 1,
            text: 'Multi ILocalNotification 1',
            sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
            
           },{
            
            title: el.medName,
            text: "type"+el.medType +" your dose" +el.medDose,
            icon: 'http://example.com/icon.png'
         }]);
          el.next=0
          this.serv.setReminder(el)
        }
        else {
          let obj=el
          obj.next=obj.next+1;
          console.log(el.next)
          this.serv.setReminder(obj).subscribe(ess=>{
            console.log(ess)
          })

        }
      })
     
    })

  }

  sendM(){
    let  isAndroid=false
     this.localNotifications.schedule({
       id: 1,
       text: 'Single ILocalNotification',
       sound: isAndroid ? 'file://assets/audio/sms.mp3': 'file://beep.caf',
       data: { secret: "key" }
     });
     
   }
   async showalert(title: string, content: string){
    const alert = await this.alert.create({
      header: title,
      message: content,
      buttons: ['OK']
  
    })
    await alert.present()
  }

aff(p){
let diff=p.remindTime - p.next
return diff
}

}
