import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/service/gestion.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-detail-pharmacie',
  templateUrl: './detail-pharmacie.component.html',
  styleUrls: ['./detail-pharmacie.component.scss'],
})
export class DetailPharmacieComponent implements OnInit {


  pharmacie: any;
  public lat = 34.419957;
  public lng = 8.78;
   
  public origin: any;
  public destination: any;
  latitude=35
  longitude=11

  tabPh=[
    {nom:"Ibn Sin Pharmacy",lat:34.419957,lng:8.788322,
    desc:"Avenue Mohammed Khadouna Gafsa 2100 Gafsa",
    
    num:"Phone Number : 76 220 999",
    
    temp:"Open Time :  06:00–20:00"
    
    }]
    tabPh2=[
      {nom:"Night Pharmacy",lat:34.419953,lng:8.787909}
      
        ]
  
  constructor(private serv:GestionService) { }

 
   
  ngOnInit() {
    
    this.pharmacie=this.serv.detailph
console.log(this.pharmacie)
const obs=interval(5000)
obs.subscribe(x=>{
  this.setCurrentPosition()
})
this.getDirection(this.pharmacie);
  }
   
  getDirection(ph) {
    this.origin = { lat: this.latitude, lng: this.longitude };
    this.destination = { lat: ph.lat, lng: ph.lng};
   
  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }
}
