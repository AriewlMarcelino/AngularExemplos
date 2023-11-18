import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() name : string = '';

  constructor(){
    console.log(`Constructor ${this.name}`)
  }

  //Ele é um evento que sempre vai ser execultado assim que nosso componente iniciar;
  ngOnInit(): void {
    console.log(`OnInit ${this.name}`)
  }
  //Esta propriedade ela é execultada assim que algum dado é alterado sendo assim chamando o OnChange;
  ngOnChanges(): void{
    console.log(`OnChange ${this.name}`)
  }

}
