import {Subscription} from "rxjs";
import {ChangeDetectorRef, Component, Input, OnChanges, OnDestroy} from "@angular/core";
import {AtomInfoService} from "../../service/atom.info.service";
import {MarkdownComponent} from "ngx-markdown";
import {NgIf} from "@angular/common";

@Component({
    selector: "atomInfo",
    templateUrl: 'atom-info.component.html',
    styleUrls: ['atom-info.component.css'],
    imports: [
        MarkdownComponent,
        NgIf,
    ]
})

export class AtomInfoComponent implements OnChanges, OnDestroy {

  @Input()
  active: boolean = false;

  @Input()
  pdbId: number = NaN;

  @Input()
  atomId: number = NaN;

  loading: boolean = false;
  info: string = "";
  querySubscription!: Subscription;

  constructor(private readonly atomInfoService: AtomInfoService,
              private readonly cd: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.runQuery();
  }

  private runQuery() {
    this.querySubscription?.unsubscribe();
    if  (!this.active || !this.pdbId || isNaN(this.atomId)) return;
    this.loading = true;
    this.querySubscription = this.atomInfoService.getAtomInfo(this.pdbId, this.atomId).subscribe(data => {
      this.info = data;
      this.loading = false;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
