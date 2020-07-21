import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AglDsComponentLibraryModule } from '@aglenergy/design-system/dist/angular/agl-ds-component-library-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AglDsComponentLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
