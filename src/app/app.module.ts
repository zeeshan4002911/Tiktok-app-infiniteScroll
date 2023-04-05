import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReelsService } from './services/reels.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [AppComponent, ViewComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [ReelsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
