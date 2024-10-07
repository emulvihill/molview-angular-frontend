import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MoodService} from "./service/mood.service";
import {MoodsComponent} from "./component/moods/moods.component";
import {CommonModule} from "@angular/common";
import {MoodTrackerComponent} from "./component/mood-tracker/mood-tracker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MoodsComponent, MoodTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  moodService: MoodService;

  constructor(moodService: MoodService) {
    this.moodService = moodService;
  }

}
