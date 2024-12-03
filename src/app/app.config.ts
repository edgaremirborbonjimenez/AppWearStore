import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideAuth0({
      domain:"dev-f1mh2761yyar2skf.us.auth0.com",
      clientId:"V2FRhAmyH5EUwJR8hemWM7O4OmsTDMdq",
      authorizationParams:{
        redirect_uri:window.location.origin
      },
    })
  ]
};
