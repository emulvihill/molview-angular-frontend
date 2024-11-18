import {Component, OnInit} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MolViewComponent} from "./component/molview/molview.component";

import {MolViewRenderMode, MolViewSelectionMode} from "wglmolview";
import {AtomInfoService} from "./service/atom.info.service";
import {PdbData} from "./model/pdb-data.model";
import {PdbDataService} from "./service/pdb-data.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButton, MatCard, MolViewComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})

export class AppComponent implements OnInit {
  atomInfoService: AtomInfoService;
  pdbDataService: PdbDataService;

  renderMode: MolViewRenderMode = "ball_and_stick";
  selectionMode: MolViewSelectionMode = "identify";

  pdbData: PdbData[] = [];

  chosenIndex: number = 0;

  constructor(atomInfoService: AtomInfoService, pdbDataService: PdbDataService) {
    this.atomInfoService = atomInfoService;
    this.pdbDataService = pdbDataService;
  }

  ngOnInit(): void {
    this.pdbDataService.getAllPdbData().subscribe(data => {
      this.pdbData = data;
      console.log(`Fetched all PDB data, count: ${data?.length}`);
    });
    setInterval(() => {
      this.chosenIndex = Math.floor(Math.random() * this.pdbData?.length||0);
    }, 8000);
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
