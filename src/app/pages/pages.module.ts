import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';

//pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';

//moludes
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [HomeComponent, DetailsComponent, Page404Component],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
