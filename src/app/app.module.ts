import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DragListComponent } from './drag-list/drag-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailsComponent,
    DragListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule,
    MatExpansionModule,
    MaterialModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
