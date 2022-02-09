import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatProviderService {
  categories = [
    {
      path : "./../../assets/img/categories/cat-1.jpg",
    link : "#",
    name :"Fresh Fruit"
  },
  {
    path : "./../../assets/img/categories/cat-2.jpg",
    link : "#",
    name :"Dried Fruit"
  },
  {
    path : "./../../assets/img/categories/cat-3.jpg",
    link : "#",
    name :"Vegetables"

  },
  {
    path : "./../../assets/img/categories/cat-4.jpg",
    link : "#",
    name :"drink fruits"

  }
  ]
  constructor(private http:HttpClient) { }

  postCatLink (categories){
    console.log('post categories');
    this.http.post('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json', categories).subscribe(response =>{
      console.log(response);
    });
    console.log('post categories ends');
  }
  getCatInfo(){
    return this.http.get('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json');
  }
}
