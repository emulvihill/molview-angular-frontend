import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";
import {Apollo} from "apollo-angular";
import {ATOM_INFO} from "../../graphql/query";

@Injectable({
  providedIn: 'root'
})
export class AtomInfoService {

  constructor(private readonly apollo: Apollo) {
  }

  getAtomInfo(pdbData: string, atomId: number): Observable<string> {
    if (!pdbData || !atomId) {
      return new Observable<string>();
    }

    return this.apollo
      .query<any>({
        query: ATOM_INFO,
        variables: { pdbFile: pdbData, atomId: atomId }
      })
      .pipe(
        map((result: ApolloQueryResult<any>) => result.data.atomInfo as string)
      );
  }
}

