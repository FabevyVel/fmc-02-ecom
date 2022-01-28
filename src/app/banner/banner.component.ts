import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  
      pathLeft = "assets/img/banner/xbanner-1.jpg.pagespeed.ic.-NRyTdVwji.jpg";
      pathRight = "assets/img/banner/banner-2.jpg";
   

  ngOnInit(): void {
  }

}
