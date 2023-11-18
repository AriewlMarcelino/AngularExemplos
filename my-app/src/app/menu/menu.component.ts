import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent
implements OnInit,
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewInit,
           AfterViewChecked,
           OnDestroy

{

  quantidade : number = 0;

  constructor() { }

  adicionar(){
    this.quantidade += 1;
  }

  decrementar(){
    this.quantidade -=1;
  }

  // checked --> content --> view

  ngOnInit(): void {
    console.log(`ngOnInit`)
  }
  ngDoCheck():void{
    console.log(`ngDoCheck`)
  }
  ngAfterContentChecked():void{
    console.log(`AfterContentChecked`)
  }
  //Quando o primeiro conteudo é inciado;
  ngAfterContentInit():void{
    console.log(`AfterContentInit`)
  }

  //Depois da incialização;
  ngAfterViewInit():void{
    console.log(`AfterViewInit`)
  }

  //após alguma alteração, verfica o conteudo.
  ngAfterViewChecked():void{
    console.log(`AfterViewChecked`)
  }

  //após alguma alteração, verfica o conteudo.
  ngOnDestroy():void{
    console.log(`GoodBye My friend !`)
  }

}
