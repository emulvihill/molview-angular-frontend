import {AfterViewInit, Component, effect, input, output} from "@angular/core";
import {ConstructorParams, ContextInfo, MolView, MolViewRenderMode, MolViewSelectionMode} from "wglmolview";
import {PdbData} from "../../model/pdb-data.model";

@Component({
  selector: "molview",
  imports: [],
  templateUrl: "./molview.component.html",
  styleUrl: "./molview.component.css",
})
export class MolViewComponent implements AfterViewInit {

  private params: ConstructorParams =
    {
      domElement: "viewport",
      onInfoUpdated: (info: ContextInfo) => this.infoUpdated.emit(info),
    };

  pdbData = input<PdbData>();
  renderMode = input.required<MolViewRenderMode>();
  selectionMode = input.required<MolViewSelectionMode>();

  infoUpdated = output<ContextInfo>();

  private mv?: MolView;

  constructor() {

    effect(() => {
      const pdb = this.pdbData();
      if (pdb) {
        this.mv?.setPDBData(pdb.data);
      } else {
        this.mv?.init();
      }
    });

    effect(() => {
      const rm = this.renderMode();
      this.mv?.setRenderMode(rm);
    });

    effect(() => {
      const sm = this.selectionMode();
      this.mv?.setSelectionMode(sm);
    });
  }

  ngAfterViewInit(): void {
    this.mv = new MolView(this.params);
  }
}
