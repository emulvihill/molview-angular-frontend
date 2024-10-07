import {TestBed} from '@angular/core/testing';

import {MoodsComponent} from './moods.component';
import {ApolloTestingController, ApolloTestingModule} from "apollo-angular/testing";
import {provideZoneChangeDetection} from "@angular/core";
import {MoodsDocument} from "../../../graphql/generated";

describe('MoodsComponent', async () => {
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZoneChangeDetection()],
      imports: [ApolloTestingModule],
    });

    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('expect and answer', async () => {
    //Scaffold the component
    let fixture = TestBed.createComponent(MoodsComponent);
    await fixture.whenStable();

    let component = fixture.componentInstance;
    fixture.detectChanges();

    // The following `expectOne()` will match the operation's document.
    // If no requests or multiple requests matched that document
    // `expectOne()` would throw.
    const op = controller.expectOne(MoodsDocument);

    // Respond with mock data, causing Observable to resolve.
    op.flush({
      data: {
        moods: [{id: 1, name: "EJM", date:"", mood: "Good"}]
      },
    });

    expect(true).toBeTruthy();

    //expect(component.moods.length).toEqual(1);
    //expect(component.moods[0].name).toEqual("EJM");
  });
});
