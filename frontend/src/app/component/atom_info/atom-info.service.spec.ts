import {TestBed} from "@angular/core/testing";
import {ApolloQueryResult, NetworkStatus} from "@apollo/client/core";
import {of} from "rxjs";
import {Apollo} from "apollo-angular";
import {AtomInfoService} from "../../service/atom.info.service";
import {provideMarkdown} from "ngx-markdown";

describe('AtomInfoService', () => {
  let service: AtomInfoService;
  let apolloSpy: jasmine.SpyObj<Apollo>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Apollo', ['query']);
    TestBed.configureTestingModule({
      providers: [
        AtomInfoService,
        provideMarkdown(),
        { provide: Apollo, useValue: spy }
      ]
    });
    service = TestBed.inject(AtomInfoService);
    apolloSpy = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAtomInfo', () => {
    const pdbId = 1;
    const atomId = 123;
    const mockResult: ApolloQueryResult<any> = {
      data: {atomInfo: "Sample Atom Info"}, error: undefined, loading: false,
      networkStatus: NetworkStatus.loading,
    };

    it('should return the atom info if pdbData and atomId are provided', (done) => {
      apolloSpy.query.and.returnValue(of(mockResult));

      service.getAtomInfo(pdbId, atomId).subscribe((result) => {
        expect(result).toBe('Sample Atom Info');
        done();
      });
    });

    it('should return an empty Observable if pdbData or atomId is missing', (done) => {
      apolloSpy.query.and.returnValue(of(mockResult));

      service.getAtomInfo(0, atomId).subscribe((result) => {
        expect(result).toBe('');
        done();
      });

      service.getAtomInfo(0, 0).subscribe((result) => {
        expect(result).toBe('');
        done();
      });
    });
  });
});
