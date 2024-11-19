import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {graphqlProvider} from './graphql.provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideMarkdown} from "ngx-markdown";

localStorage.setItem("token",
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0dXNlciIsImlhdCI6MTczMjA0ODE2NSwiZXhwIjoxNzMyMTM0NTY1fQ.7gHctaCwzM94wOCtOHAVB4VuQt_9p0Ql8q5pmhtPrjmMUNS9ey9OfQIn6vFgUZKKqRkmY6JgHMlvx5y2Oyrqzw");

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
