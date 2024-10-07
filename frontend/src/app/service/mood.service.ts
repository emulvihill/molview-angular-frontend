import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {CreateMoodGQL, CreateMoodMutationVariables, Mood, MoodInput, MoodsGQL} from "../../graphql/generated";

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(private readonly moodsGQL: MoodsGQL, private readonly createMoodGQL: CreateMoodGQL) {
  }

  getMoods(): Observable<Array<Mood>> {
    return this.moodsGQL.watch().valueChanges.pipe(map(result => result.data.moods))
  }

  trackMood(input: CreateMoodMutationVariables): void {
  this.createMoodGQL.mutate(input)
      .subscribe((result) => console.log(result));
  }

}
