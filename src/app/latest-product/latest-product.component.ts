import { Component, OnInit } from '@angular/core';
import { LatestProductProviderService } from '../latest-product-provider.service';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css'],
  providers: [LatestProductProviderService]
})
export class LatestProductComponent implements OnInit {

  constructor(private latestProductProviderService : LatestProductProviderService) { }
headingOne = "Latest Products";  
latestProductImages;
headingTwo = "Top Rated Products";
topRatedProducts;
headingThree = "Review Products";
reviewProducts;

  ngOnInit(): void {
let latestProductImages ={ 
  path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
heading : "Crab Pool Security",
price : "$30.00"
}
let topRatedProducts={
  path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
heading : "Crab Pool Security",
price : "$30.00"
}
let reviewProducts= 
{
  path : "assets/img/latest-product/xlp-3.jpg.pagespeed.ic.mf_XcdZ7zd.jpg",
heading : "Crab Pool Security",
price : "$30.00"
}
    this.latestProductProviderService.postLatestLink(latestProductImages);
    this.latestProductProviderService.getLatestInfo().subscribe(res=>{
this.latestProductImages = res;
console.log(this.latestProductImages);
    });    
  
  this.latestProductProviderService.postRatedLink(topRatedProducts);
  this.latestProductProviderService.getRatedInfo().subscribe(res=>{
    this.topRatedProducts = res;
    console.log(this.topRatedProducts);
  });
  this.latestProductProviderService.postReviewLink(reviewProducts);
  this.latestProductProviderService.getReviewInfo().subscribe(res=>{
    this.reviewProducts = res;
    console.log(this.reviewProducts);
  });

}
}