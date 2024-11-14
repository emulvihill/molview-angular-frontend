import {Subscription} from "rxjs";
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {AtomInfoService} from "../../service/atom.info.service";

@Component({
  selector: 'atomInfo',
  template: `
      <div>{{ info }}</div>
  `,
  standalone: true
})

export class AtomInfoComponent implements OnInit, OnDestroy {

  info: String = "";
  error: any;

  private querySubscription!: Subscription;

  constructor(private readonly atomInfoService: AtomInfoService,
              private readonly cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.querySubscription = this.atomInfoService.getAtomInfo().subscribe(data => {
        this.info = data;
        this.cd.detectChanges();
      });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
