import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {

  constructor() { }
headingOne = "Latest Products";  
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
}
];
headingTwo = "Top Rated Products";
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
  }
]
  ngOnInit(): void {
  }

}
