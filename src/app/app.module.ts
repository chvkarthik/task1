import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { GroceryComponent } from './grocery/grocery.component';
import { DairyComponent } from './dairy/dairy.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { SingleitemComponent } from './singleitem/singleitem.component';

const appRoutes:Routes=[
  {path: 'Fruits', component:FruitsComponent},
  {path: 'Vegetables', component: VegetablesComponent},
  {path: 'Grocery', component: GroceryComponent},
  {path: 'Diary', component: DairyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    VegetablesComponent,
    GroceryComponent,
    DairyComponent,
    SingleitemComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
