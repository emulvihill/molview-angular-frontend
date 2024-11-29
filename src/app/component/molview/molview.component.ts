import {AfterViewInit, Component, EventEmitter, Input, Output} from "@angular/core";
import {ConstructorParams, ContextInfo, MolView, MolViewRenderMode, MolViewSelectionMode} from "wglmolview";
import {MatCardModule} from "@angular/material/card";
import {PdbData} from "../../model/pdb-data.model";

@Component({
    selector: "molview",
    imports: [MatCardModule],
    templateUrl: "./molview.component.html",
    styleUrl: "./molview.component.css"
})
export class MolViewComponent implements AfterViewInit {

  private params: ConstructorParams =
    {
      domElement: "viewport",
      onInfoUpdated: (info: ContextInfo) => this.infoUpdated.emit(info),
    };

  private mv?: MolView;

  private _pdbData: PdbData | null = null;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.mv = new MolView(this.params);
  }

  @Output() infoUpdated = new EventEmitter<ContextInfo>();

  @Input() set pdbData(pdbData: PdbData | null) {
    this._pdbData = pdbData;
    if (this._pdbData) {
      this.mv?.setPDBData(this._pdbData.data);
    } else {
      this.mv?.init();
    }
  }

  get pdbData(): PdbData | null {
    return this._pdbData;
  }

  @Input() set renderMode(mode: MolViewRenderMode) {
    this.mv?.setRenderMode(mode);
  }

  @Input() set selectionMode(mode: MolViewSelectionMode) {
    this.mv?.setSelectionMode(mode);
  }
}
