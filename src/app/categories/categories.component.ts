import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  categories = [
    {
    link : "#",
    name :"Fresh Fruit"
  },
  {
    link : "#",
    name :"Dried Fruit"
  },
  {
    link : "#",
    name :"Vegetables"

  },
  {
    link : "#",
    name :"drink fruits"

  }
  ]
  ngOnInit(): void {
  }

}
