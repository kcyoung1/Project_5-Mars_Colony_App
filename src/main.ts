import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { Project5AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(Project5AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
