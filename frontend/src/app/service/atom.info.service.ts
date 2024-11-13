import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {GetAtomInfoGQL} from "../../graphql/generated";

@Injectable({
  providedIn: 'root'
})
export class AtomInfoService {

  constructor(private readonly atomInfoGQL: GetAtomInfoGQL) {
  }

  getAtomInfo(): Observable<String> {
    return this.atomInfoGQL.watch().valueChanges.pipe(map(result => result.data.atomInfo));
  }

}
