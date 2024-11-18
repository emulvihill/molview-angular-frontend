import {AfterViewInit, Component, Input} from "@angular/core";
import {ConstructorParams, ContextInfo, MolView, MolViewRenderMode, MolViewSelectionMode} from "wglmolview";
import {MatCardModule} from "@angular/material/card";
import {AtomInfoComponent} from "../atom_info/atom.info.component";
import {PdbData} from "../../model/pdb-data.model";

@Component({
  selector: "molview",
  standalone: true,
  imports: [MatCardModule, AtomInfoComponent],
  templateUrl: "./molview.component.html",
  styleUrl: "./molview.component.css",
})
export class MolViewComponent implements AfterViewInit {

  private params: ConstructorParams =
    {
      domElement: "viewport", onInfoUpdated: (info: ContextInfo) => {
        this.info = info.message || "";
        const id = parseInt(info?.atoms?.[0]?.id?.replace("atom", ""));
        this.selectedAtomId = !isNaN(id) ? id : 0;
      },
    };

  private mv?: MolView;
  public info: string = "";

  public selectedAtomId: number = 0;
  private _pdbData: PdbData | undefined = undefined;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.mv = new MolView(this.params);
  }

  @Input() set pdbData(pdbData: PdbData|undefined) {
    this._pdbData = pdbData;
    if (this._pdbData) {
      this.mv?.setPDBData(this._pdbData.data);
    } else {
      this.mv?.init();
    }
  }

  get pdbData(): PdbData|undefined {
    return this._pdbData;
  }

  @Input() set renderMode(mode: MolViewRenderMode) {
    this.mv?.setRenderMode(mode);
  }

  @Input() set selectionMode(mode: MolViewSelectionMode) {
    this.mv?.setSelectionMode(mode);
  }
}
