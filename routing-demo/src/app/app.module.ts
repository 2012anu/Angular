import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//instead of importing two components exteranally we imported at onec by routing export
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListsComponent } from './department-lists/department-lists.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
// checking badge
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListsComponent,
    DepartmentDetailComponent,
    PathNotFoundComponent, 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatBadgeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
