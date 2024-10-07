import { TestBed } from '@angular/core/testing';

import { MoodService } from './mood.service';
import {provideZoneChangeDetection} from "@angular/core";
import {ApolloTestingModule} from "apollo-angular/testing";

describe('MoodService', () => {
  let service: MoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZoneChangeDetection()],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(MoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
