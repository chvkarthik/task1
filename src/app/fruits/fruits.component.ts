import { Component, OnInit } from '@angular/core';

import data from '../../assets/data.json';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  itemList:{p_name:String, p_id:number; p_cost:number,p_availability:number, p_details:String, p_category:String}[]=data;
  // items=[
  //   {
  //     "p_name":"Apple",
  //     "p_id":1,
  //     "p_cost":30,
  //     "p_availability":1,
  //     "p_details":"Imported from Swiss",
  //     "p_category":"Premium"
  //   },

  //   {
  //     "p_name":"Mango",
  //     "p_id":2,
  //     "p_cost":50,
  //     "p_availability":1,
  //     "p_details":"Farmed at Selam",
  //     "p_category":"Tamilnadu"
  //   },

  //   {
  //     "p_name":"Bananna",
  //     "p_id":3,
  //     "p_cost":5,
  //     "p_availability":0
  //   },

  //   {
  //     "p_name":"Orange",
  //     "p_id":4,
  //     "p_cost":25,
  //     "p_availability":1,
  //     "p_details":"from Nagpur",
  //     "p_category":"Premium"
  //   }

  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
