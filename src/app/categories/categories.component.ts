import { Component, OnInit } from '@angular/core';
import { CatProviderService } from '../cat-provider.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CatProviderService]
})
export class CategoriesComponent implements OnInit {

  constructor(private catProviderService : CatProviderService) { }
  categories;
  ngOnInit(): void {
    let categories =  {
      path : "./../../assets/img/categories/cat-1.jpg",
    link : "#",
    name :"Fresh Fruit"
  }
  this.catProviderService.postCatLink(categories);
    this.catProviderService.getCatInfo().subscribe(res=>{
this.categories = res;
console.log(this.categories);
    });
  }

}
