import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss']
})
export class SpendComponent implements OnInit {

  public spendItems:any = [
  {id: 1, imgPath:'', title:'Проїзд комфортабельним мікроавтобусом;', description:''},
  {id: 2, imgPath:'', title:'Офіційний дозвіл на перебування в зоні відчуження;', description:''},
  {id: 3, imgPath:'', title:'Супровід професійних гідів;', description:''},
  {id: 4, imgPath:'', title:'Фотозвіт туру;', description:''},
  {id: 5, imgPath:'', title:'Страховий поліс на переїзд та перебування в ЧЗВ;', description:''},
  {id: 6, imgPath:'', title:'Супровід групи;', description:''},
  {id: 7, imgPath:'', title:'Дозиметричний контроль.;', description:''}
];

  constructor() { }

  ngOnInit(): void {
  }

  public addItem() {
    this.spendItems.push({});
  }

  public delItem(id: number) {
    this.spendItems = this.spendItems.filter((a:any) => a.id != id)
  }
}

