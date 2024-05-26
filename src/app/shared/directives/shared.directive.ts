import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class SharedDirective implements OnInit{
  private htmlElem?: ElementRef<HTMLElement>;
  private _color:string='red';
  private _errors?: ValidationErrors | null;
  @Input() set color(value: string){
    this._color=value;
    this.setColor();
  }
  @Input() set errors(value: ValidationErrors | null | undefined){

    this._errors=value;
    this.setErrorMessage();
  }

  constructor(private elem: ElementRef<HTMLElement>) {
    this.htmlElem= elem;
    this.htmlElem.nativeElement.innerHTML='La directiva te manda saludos'

  }
  ngOnInit(): void {
    console.log('ngOnit de la directiva')
  }
  setColor():void{
    if (!this.htmlElem) return;
    this.htmlElem!.nativeElement.style.color=this._color;
  }
  setErrorMessage():void{
    if (!this.htmlElem) return;
    if (!this._errors) {
      this.htmlElem.nativeElement.innerHTML='Success!'
      return;
    }
    const errors=Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElem.nativeElement.innerHTML='Required!'

    }

    if (errors.includes('minlength')) {
      this.htmlElem.nativeElement.innerHTML=' - El minimo es de 6 caracteres!'

    }

    if (errors.includes('email')) {
      this.htmlElem.nativeElement.innerHTML=' - Debe ser un email!'

    }

  }
}
