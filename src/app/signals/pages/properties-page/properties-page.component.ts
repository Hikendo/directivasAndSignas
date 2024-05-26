import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { UserData } from '../../interfaces/user';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy{


  public user= signal<UserData>({
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  });

  public fullName= computed(()=> `${this.user().first_name} ${this.user().last_name}`)

  //efectos en signals
  public userChangedEffect=effect(
    ()=>{
      console.log('userChangedEffect trigered on update name '+ this.user().first_name)
    }
  );

  ngOnDestroy(): void {
  //destruimos el fecto manualmente, aunque esto se realiza por si solo la mayoria de las veces
  this.userChangedEffect.destroy()
  }

  onFieldUpdate(field: keyof UserData , value: string){
    /*
    this.user.set({
      ...this.user(),
      [field]:value
    })
    */
   this.user.update( current =>{
      switch(field){

        case 'id':
          current.id=Number(value)
          break;
        case 'email':
          current.email=value;
          break;
        case 'first_name':
          current.first_name=value;
          break;
        case 'last_name':
          current.last_name=value;
          break;
        case 'avatar':
          current.avatar=value;
          break;
      }
      //Las mutaciones in situ ya no funcionan en update signal
    return {...current};
   })
  }
}
