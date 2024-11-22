import {TestBed} from "@angular/core/testing";

import {provideZoneChangeDetection} from "@angular/core";
import {ApolloTestingModule} from "apollo-angular/testing";
import {AtomInfoService} from "./atom.info.service";

describe('AtomInfoService', () => {
  let service: AtomInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZoneChangeDetection()],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(AtomInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
