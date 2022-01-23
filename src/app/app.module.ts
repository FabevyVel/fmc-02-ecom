import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { BannerComponent } from './banner/banner.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { FromBlogComponent } from './from-blog/from-blog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedComponent,
    BannerComponent,
    LatestProductComponent,
    FromBlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
