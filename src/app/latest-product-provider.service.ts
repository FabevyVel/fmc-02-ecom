import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LatestProductProviderService {
  latestProductImages =[
    { 
    path : "assets/img/latest-product/xlp-1.jpg.pagespeed.ic.LGjna46RhG.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  { 
    path : "assets/img/latest-product/xlp-2.jpg.pagespeed.ic.A6ypl4JLGO.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  { 
    path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  { 
    path : "assets/img/latest-product/xlp-1.jpg.pagespeed.ic.LGjna46RhG.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  { 
    path : "assets/img/latest-product/xlp-2.jpg.pagespeed.ic.A6ypl4JLGO.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  { 
    path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  }
  ];
  topRatedProducts =[
    {
      path : "assets/img/latest-product/xlp-1.jpg.pagespeed.ic.LGjna46RhG.jpg",
      heading : "Crab Pool Security",
      price : "$30.00"
    },
    {
      path : "assets/img/latest-product/xlp-2.jpg.pagespeed.ic.A6ypl4JLGO.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
    },
    {
      path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
    },
    {
      path : "assets/img/latest-product/xlp-1.jpg.pagespeed.ic.LGjna46RhG.jpg",
      heading : "Crab Pool Security",
      price : "$30.00"
    },
    {
      path : "assets/img/latest-product/xlp-2.jpg.pagespeed.ic.A6ypl4JLGO.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
    },
    {
      path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
    }
  ];
  reviewProducts = [ {
    path : "assets/img/latest-product/xlp-1.jpg.pagespeed.ic.LGjna46RhG.jpg",
    heading : "Crab Pool Security",
    price : "$30.00"
  },
  {
    path : "assets/img/latest-product/xlp-2.jpg.pagespeed.ic.A6ypl4JLGO.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  {
    path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  {
    path : "assets/img/latest-product/xlp-1.jpg.pagespeed.ic.LGjna46RhG.jpg",
    heading : "Crab Pool Security",
    price : "$30.00"
  },
  {
    path : "assets/img/latest-product/xlp-2.jpg.pagespeed.ic.A6ypl4JLGO.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  },
  {
    path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
  heading : "Crab Pool Security",
  price : "$30.00"
  }
  ];
  constructor(private http:HttpClient) { }
  postLatestLink (latestProductImages){
    console.log('post latestProductImages');
    this.http.post('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/latestProduct.json', latestProductImages).subscribe(response =>{
      console.log(response);
    });
    console.log('post latestProductImages ends');
  }
  
  postRatedLink(topRatedProducts){
    console.log('post rated products');
    this.http.post('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/ratedProducts.json',topRatedProducts).subscribe(response =>{
      console.log(response);
    });
    console.log('post rated products ends');
  }

  postReviewLink(reviewProducts){
    console.log('post review products');
    this.http.post('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/reviewProducts.json',reviewProducts).subscribe(response =>{
      console.log(response);
    });
    console.log('post review products ends');
  }
  getLatestInfo(){
    return this.http.get('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/latestProduct.json');

  }
  getRatedInfo(){
return this.http.get('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/ratedProducts.json');
  }
  getReviewInfo(){
    return this.http.get('https://fmc02-angular-default-rtdb.asia-southeast1.firebasedatabase.app/reviewProducts.json');

  }
}
