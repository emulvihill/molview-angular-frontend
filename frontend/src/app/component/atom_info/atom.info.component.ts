import {Subscription} from "rxjs";
import {ChangeDetectorRef, Component, Input, OnChanges, OnDestroy} from "@angular/core";
import {AtomInfoService} from "../../service/atom.info.service";
import {MarkdownComponent, MarkdownService} from "ngx-markdown";

@Component({
  selector: "atomInfo",
  template: `<div markdown [data]="info"></div>`,
  standalone: true,
  imports: [
    MarkdownComponent,
  ],
})

export class AtomInfoComponent implements OnChanges, OnDestroy {

  @Input()
  pdbFile: string = "";

  @Input()
  atomId: number = 0;

  info: string = "";

  private querySubscription!: Subscription;

  constructor(private readonly atomInfoService: AtomInfoService,
              private mdService:MarkdownService,
              private readonly cd: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.runQuery();
  }

  private runQuery() {
    this.querySubscription?.unsubscribe();
    this.querySubscription = this.atomInfoService.getAtomInfo(this.pdbFile, this.atomId).subscribe(data => {
      this.info = data;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
