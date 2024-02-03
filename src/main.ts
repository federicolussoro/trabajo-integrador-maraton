import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {HttpClientModule} from "@angular/common/http";

bootstrapApplication(AppComponent, {providers: [provideRouter(routes), {provide: 'appConfig', useValue: appConfig}]})
  .catch((err) => console.error(err));
