import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { TextComponent } from './text/text.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TextComponent,
    MenuComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
