import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionService } from '../service/gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})


export class ReminderPage implements OnInit {
formReminder:FormGroup
tabReminder=[]
tabR=[]

  submitted: boolean;
  constructor(private  fb :FormBuilder,
    private serv:GestionService,
    private router:Router) { 
this.formReminder=this.fb.group({
  medName:['',[Validators.required,Validators.minLength(2)]],
  medType:['',[Validators.required]],
  medDose:['',[Validators.required]],
  remindTime:['',[Validators.required]],
  startTime:['',[Validators.required]],
 
})

  }

  ngOnInit(){
    this.serv.getAllReminder().subscribe(res=>{
      this.tabReminder=res.resultat
      console.log(this.tabReminder)
    })
    this.submitted=false
  }

  get form(){return this.formReminder.controls}
  confirmer(){
    
   if(this.formReminder.valid){
    this.serv.newReminder(this.formReminder.value).subscribe(res=>{
      this.tabReminder.push(this.formReminder.value)
      this.serv.rm.next(this.tabReminder)

      this.serv.datachange.subscribe(x=>{
       this.tabR=x

      })
      console.log(this.tabReminder)
      this.tabR.push(res.resultat)
this.serv.rm.next(this.tabR)
this.router.navigate(['/tabs/medminders'])
    })
   }else console.log("not sent")
  }
  customPopoverOptions: any = {
    header: 'Remind me every',
   
  };
  
}
