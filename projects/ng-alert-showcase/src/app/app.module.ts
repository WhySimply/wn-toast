import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WnToastModule} from '../../../wn-toast/src/lib/wn-toast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WnToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
