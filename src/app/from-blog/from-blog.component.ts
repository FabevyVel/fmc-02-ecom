import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-blog',
  templateUrl: './from-blog.component.html',
  styleUrls: ['./from-blog.component.css']
})
export class FromBlogComponent implements OnInit {

  constructor() { }
heading = "From The Blog";
blogItems = [
  {
    path : "assets/img/blog/xblog-1.jpg.pagespeed.ic.LxmSdcElIm.jpg",
    date : "May 4,2019",
    count : 5,
    link : "#",
    name : "Cooking tips make cooking simple",
    content : "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  },
  {
    path : "assets/img/blog/xblog-2.jpg.pagespeed.ic.BEPbl29gdJ.jpg",
    date : "May 4,2019",
    count : 5,
    link : "#",
    name : "6 ways to prepare breakfast for 30",
    content : "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  },
  {
    path : "assets/img/blog/xblog-3.jpg.pagespeed.ic.cmlGgG7W6t.jpg",
    date : "May 4,2019",
    count : 5,
    link : "#",
    name : "Visit the clean farm in the US",
    content : "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  }
]

  ngOnInit(): void {
  }

}
