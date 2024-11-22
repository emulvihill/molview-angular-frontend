import {ComponentFixture, TestBed} from "@angular/core/testing";
import {of, Subscription} from "rxjs";
import {MarkdownService, provideMarkdown} from "ngx-markdown";
import {AtomInfoService} from "../../service/atom.info.service";
import {AtomInfoComponent} from "./atom-info.component";

describe("AtomInfoComponent", () => {
  let component: AtomInfoComponent;
  let fixture: ComponentFixture<AtomInfoComponent>;
  let atomInfoServiceSpy: jasmine.SpyObj<AtomInfoService>;
  let markdownService: MarkdownService;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj("AtomInfoService", ["getAtomInfo"]);
    await TestBed.configureTestingModule({
      providers: [
        {provide: AtomInfoService, useValue: spy},
        provideMarkdown(),
      ],
    }).compileComponents();
    atomInfoServiceSpy = TestBed.inject(AtomInfoService) as jasmine.SpyObj<AtomInfoService>;
    markdownService = TestBed.inject(MarkdownService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnChanges", () => {
    const pdbId = 1;
    const atomId = 123;
    const mockResult = "Sample Atom Info";

    beforeEach(() => {
      atomInfoServiceSpy.getAtomInfo.and.returnValue(of(mockResult));
    });

    it("should update info and call change detection if pdbId and atomId are provided", () => {
      component.pdbId = pdbId;
      component.atomId = atomId;
      fixture.detectChanges();

      expect(component.info).toBe(mockResult);
      expect(atomInfoServiceSpy.getAtomInfo.calls.count()).toBe(1);
    });

    it("should not update info if pdbId or atomId is missing", () => {
      component.active = true;
      component.pdbId = NaN;
      component.atomId = atomId;
      fixture.detectChanges();

      expect(component.info).toBe("");
      expect(atomInfoServiceSpy.getAtomInfo.calls.count()).toBe(0);

      component.pdbId = pdbId;
      component.atomId = 0;
      fixture.detectChanges();

      expect(component.info).toBe("");
      expect(atomInfoServiceSpy.getAtomInfo.calls.count()).toBe(1);
    });
  });

  describe("ngOnDestroy", () => {
    let subscriptionSpy: jasmine.Spy;

    beforeEach(() => {
      component.querySubscription = new Subscription();
      subscriptionSpy = spyOn(component.querySubscription, "unsubscribe");
    });

    it("should unsubscribe from the query subscription on destroy", () => {
      component.ngOnDestroy();

      expect(subscriptionSpy).toHaveBeenCalled();
    });
  });
});
