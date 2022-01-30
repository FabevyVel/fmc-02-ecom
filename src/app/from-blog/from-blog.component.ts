import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-blog',
  templateUrl: './from-blog.component.html',
  styleUrls: ['./from-blog.component.css']
})
export class FromBlogComponent implements OnInit {

  blogTitles = [
    {
      title: "From The Blogs"
    }
  ]

  brdr= ["blog__item__pic", "brdr"];

  isControl = true;
  paddControl = {
    blog__item__text: this.isControl
  }
  

  blogItems = [
    {
      blogImg: "assets/img/blog/xblog-1.jpg.pagespeed.ic.LxmSdcElIm.jpg",
      calendar: "May 4,2019",
      comment: 5,
      blogTitle: "Cooking tips make cooking simple",
      blogTxt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
    },
    {
      blogImg: "assets/img/blog/xblog-2.jpg.pagespeed.ic.BEPbl29gdJ.jpg",
      calendar: "May 4,2019",
      comment: 5,
      blogTitle: "6 ways to prepare breakfast for 30",
      blogTxt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
    },
    {
      blogImg: "assets/img/blog/xblog-3.jpg.pagespeed.ic.cmlGgG7W6t.jpg",
      calendar: "May 4,2019",
      comment: 5,
      blogTitle: "Visit the clean farm in the US",
      blogTxt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
