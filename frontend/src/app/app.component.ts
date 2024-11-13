import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MolViewComponent} from "./component/molview/molview.component";

import {MolViewRenderMode, MolViewSelectionMode} from "wglmolview";
import {AtomInfoService} from "./service/atom.info.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButton, MatCard, MolViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  atomInfoService: AtomInfoService;

  renderMode: MolViewRenderMode = "ball_and_stick";
  selectionMode: MolViewSelectionMode = "identify";

  constructor(atomInfoService: AtomInfoService) {
    this.atomInfoService = atomInfoService;
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
