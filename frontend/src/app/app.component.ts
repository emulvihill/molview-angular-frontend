import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MoodService} from "./service/mood.service";
import {MoodsComponent} from "./component/moods/moods.component";
import {CommonModule} from "@angular/common";
import {MoodTrackerComponent} from "./component/mood-tracker/mood-tracker.component";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MolViewComponent} from "./component/molview/molview.component";

import {MolViewRenderMode, MolViewSelectionMode} from "wglmolview";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MoodsComponent, MoodTrackerComponent, MatButton, MatCard, MolViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  moodService: MoodService;

  renderMode: MolViewRenderMode = "ball_and_stick";
  selectionMode: MolViewSelectionMode = "identify";

  constructor(moodService: MoodService) {
    this.moodService = moodService;
  }

  setRenderMode(mode: MolViewRenderMode) {
    this.renderMode = mode;
    console.log(`Render mode set to: ${mode}`);
  }

  setSelectionMode(mode: MolViewSelectionMode) {
    this.selectionMode = mode;
    console.log(`Selection mode set to: ${mode}`);
  }
}
