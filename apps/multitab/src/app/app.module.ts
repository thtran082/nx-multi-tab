import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers';
import { HttpClientModule } from '@angular/common/http';
import { CoreShellMainModule } from '@core-shell';

const MODULES: any[] = [BrowserModule, RouterModule, HttpClientModule, CoreShellMainModule];

const PROVIDERS: any[] = [
  // something
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
