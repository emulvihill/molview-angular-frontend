import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideZoneChangeDetection} from "@angular/core";
import {graphqlProvider} from "./graphql.provider";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {provideHttpClient} from "@angular/common/http";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZoneChangeDetection(),
        provideRouter(routes),
        provideHttpClient(),
        graphqlProvider],
      imports: [NoopAnimationsModule, AppComponent],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
