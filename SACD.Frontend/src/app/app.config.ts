import { ApplicationConfig } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { MyCustomPaginatorIntl } from '@core/internationalization/paginator-intl.model';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl },
  ],
};
