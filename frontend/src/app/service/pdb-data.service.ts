import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";
import {Apollo, MutationResult} from "apollo-angular";
import {ALL_PDB_DATA, CREATE_PDB_DATA, DELETE_PDB_DATA, FIND_PDB_DATA_BY_ID} from "../../graphql/pdb-data-queries";
import {PdbData} from "../model/pdb-data.model";

@Injectable({
  providedIn: "root",
})
export class PdbDataService {
  constructor(private readonly apollo: Apollo) {
  }

  getAllPdbData(): Observable<PdbData[]> {
    return this.apollo
      .query<any>({
        query: ALL_PDB_DATA,
      })
      .pipe(
        map((result: ApolloQueryResult<any>) => result.data.allPdbData as PdbData[]),
      );
  }

  createPdbData(input: { name: string, data: string, compound: string }): Observable<PdbData> {
    return this.apollo
      .mutate({
        mutation: CREATE_PDB_DATA,
        variables: input,
      })
      .pipe(
        map((result: MutationResult<any>) => result.data.createPdbData as PdbData),
      );
  }

  findPdbDataById(id: number): Observable<PdbData> {
    return this.apollo
      .query<any>({
        query: FIND_PDB_DATA_BY_ID,
        variables: {id},
      })
      .pipe(
        map((result: ApolloQueryResult<any>) => result.data.findPdbDataById as PdbData),
      );
  }

  deletePdbData(id: number): Observable<PdbData> {
    return this.apollo
      .mutate({
        mutation: DELETE_PDB_DATA,
        variables: {id},
      })
      .pipe(
        map((result: MutationResult<any>) => result.data.deletePdbData as PdbData),
      );
  }
}
