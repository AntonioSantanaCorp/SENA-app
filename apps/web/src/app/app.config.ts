import { DEFAULT_DIALOG_CONFIG } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: DEFAULT_DIALOG_CONFIG,
      useValue: { width: '70vw', hasBackdrop: true },
    },
  ],
};
