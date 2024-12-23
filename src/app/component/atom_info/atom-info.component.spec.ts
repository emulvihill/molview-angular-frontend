import {TestBed} from "@angular/core/testing";

import {ApolloTestingController, ApolloTestingModule} from "apollo-angular/testing";
import {provideZoneChangeDetection} from "@angular/core";
import {AtomInfoComponent} from "./atom-info.component";
import {ATOM_INFO} from "../../../graphql/atom-info.queries";
import {MarkdownModule, provideMarkdown} from "ngx-markdown";

describe('AtomInfoComponent', async () => {
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZoneChangeDetection(), provideMarkdown()],
      imports: [ApolloTestingModule],
    });

    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('expect and answer', async () => {
    //Scaffold the component
    let fixture = TestBed.createComponent(AtomInfoComponent);
    await fixture.whenStable();

    let component = fixture.componentInstance;
    fixture.detectChanges();

    // The following `expectOne()` will match the operation's document.
    // If no requests or multiple requests matched that document
    // `expectOne()` would throw.
    const op = controller.expectOne(ATOM_INFO);

    // Respond with mock data, causing Observable to resolve.
    op.flush({
      data: {
        info: "FUN"
      },
    });

    expect(true).toBeTruthy();

    //expect(component.moods.length).toEqual(1);
    //expect(component.moods[0].name).toEqual("EJM");
  });
});
