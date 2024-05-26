import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

//obtenemos el mismo resultado y es mas atractivo visualmente
  private fb= inject(FormBuilder)
//asi lo hemos trabajado hasta ahora
  //constructor(private fb: FormBuilder){}

    public color:string='green';

    public myForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
    });
    changeColor(){
      this.color= '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    }


}
