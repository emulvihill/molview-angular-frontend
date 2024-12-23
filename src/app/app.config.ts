import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {graphqlProvider} from './graphql.provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideMarkdown} from "ngx-markdown";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    graphqlProvider,
    provideAnimationsAsync(),
    provideMarkdown(),
  ]
};
