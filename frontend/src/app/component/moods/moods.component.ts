import {Subscription} from 'rxjs';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Mood} from "../mood";
import {MoodService} from "../../service/mood.service";
import {useQuery} from "@apollo/client";
import {MoodsDocument} from "../../../graphql/generated";

@Component({
  selector: 'moods',
  template: `
    @for (mood of moods; track mood.id) {
      <div>id: {{ mood.id }}</div>
      <div>Name: {{ mood.name }}</div>
      <div>Date: {{ mood.date }}</div>
      <div>Mood: {{ mood.mood }}</div>
    }
  `,
  standalone: true
})

export class MoodsComponent implements OnInit, OnDestroy {

  moods: Mood  [] = [];
  error: any;

  private querySubscription!: Subscription;

  constructor(private readonly moodService: MoodService,
              private readonly cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.querySubscription = this.moodService.getMoods().subscribe(data => {
        this.moods = data;
        this.cd.detectChanges();
      });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

}
