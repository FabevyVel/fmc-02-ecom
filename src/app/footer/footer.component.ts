import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footContact = [
    {
      img: "assets/img/xlogo.png.pagespeed.ic.ap5icp--OT.png",
      link: "index-2.html",
      address: "Address: 60-49 Road 11378 New York",
      phone: "Phone: +65 11.188.888",
      email: "Email",
      emailId: "https://preview.colorlib.com/cdn-cgi/l/email-protection",
      emailTxt: "[email&#160;protected]",
    }
  ];
  footUsefultitle: "Useful Links";
  footUsefulInfos = [
    {     
      widget1: "About Us",
      widget1Link: "#",
      widget2: "About Our Shop",
      widget2Link: "#",
      widget3: "Secure Shopping",
      widget3Link: "#",
      widget4: "Delivery infomation",
      widget4Link: "#",
      widget5: "Privacy Policy",
      widget5Link: "#",
      widget6: "Our Sitemap",
      widget6Link: "#",
    },
    {      
      widget1: "Who We Are",
      widget1Link: "#",
      widget2: "Our Services",
      widget2Link: "#",
      widget3: "Projects",
      widget3Link: "#",
      widget4: "Contact",
      widget4Link: "#",
      widget5: "Innovation",
      widget5Link: "#",
      widget6: "Testimonials",
      widget6Link: "#",
    }
  ]

footWidget = [{
  widgetTitle: "Join Our Newsletter Now",
  widgetTxt: "Get E-mail updates about our latest shop and special offers.",
  widgetBtn: "Subscribe",  
}]
footLogo = "assets/img/xlogo.png.pagespeed.ic.ap5icp--OT.png"
  constructor() { }

  ngOnInit(): void {
  }

}
