import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTrackerComponent } from './mood-tracker.component';
import {ApolloTestingModule} from "apollo-angular/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('MoodTrackerComponent', () => {
  let component: MoodTrackerComponent;
  let fixture: ComponentFixture<MoodTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule, NoopAnimationsModule, MoodTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
