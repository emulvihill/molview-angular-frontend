import {Component, OnInit} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MolViewComponent} from "./component/molview/molview.component";

import {ContextInfo, MolViewRenderMode, MolViewSelectionMode} from "wglmolview";
import {AtomInfoService} from "./service/atom.info.service";
import {PdbData} from "./model/pdb-data.model";
import {PdbDataService} from "./service/pdb-data.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {AtomInfoComponent} from "./component/atom_info/atom.info.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButton, MatCard, MolViewComponent, MatLabel, MatSelect, MatOption, MatFormField, FormsModule, MatCardContent, AtomInfoComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})

export class AppComponent implements OnInit {
  atomInfoService: AtomInfoService;
  pdbDataService: PdbDataService;

  renderMode: MolViewRenderMode = "ball_and_stick";
  selectionMode: MolViewSelectionMode = "identify";

  pdbData: PdbData[] = [];
  selectedPdbId: number | null = null;
  currentPdb: PdbData | null = null;
  selectedAtomId: number = NaN;

  constructor(atomInfoService: AtomInfoService, pdbDataService: PdbDataService) {
    this.atomInfoService = atomInfoService;
    this.pdbDataService = pdbDataService;
  }

  ngOnInit(): void {
    this.pdbDataService.getAllPdbData().subscribe(data => {
      this.pdbData = data;
      console.log(`Fetched all PDB data, count: ${data?.length}`);
    });
  }

  onPdbSelect(event: any): void {
    const selectedPdbId = event.value;
    if (selectedPdbId !== null) {
      this.pdbDataService.findPdbDataById(selectedPdbId).subscribe(pdb => {
        this.currentPdb = pdb;
      });
    }
  }

  setRenderMode(mode: MolViewRenderMode) {
    this.renderMode = mode;
    console.log(`Render mode set to: ${mode}`);
  }

  setSelectionMode(mode: MolViewSelectionMode) {
    this.selectionMode = mode;
    console.log(`Selection mode set to: ${mode}`);
  }

  onInfoChange(info: ContextInfo) {
    console.log(`Atom info changed: ${info.message}`);

    this.selectedAtomId = parseInt(info?.atoms?.[0]?.id?.replace("atom", ""));
  }
}
