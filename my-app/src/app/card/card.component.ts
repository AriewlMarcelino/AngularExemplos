import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos:string[] = [];
  style:string = 'disable';

  menuType : string = 'user';
  constructor(){
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'fonte',
    ]
  }

  adicionar(){
    this.produtos.push('product');
  }
  remover(){
    this.produtos.pop()
  }

  removerPorClick(index:number){
    this.produtos.splice(index, 1)
  }

  change(){
    if(this.style === 'disable'){
      this.style = 'enable'
    }else{
      this.style = 'disable'
    }
  }


}
