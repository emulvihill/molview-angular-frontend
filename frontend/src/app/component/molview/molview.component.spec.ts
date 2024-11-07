import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolViewComponent } from './molview.component';

describe('MolViewComponent', () => {
  let component: MolViewComponent;
  let fixture: ComponentFixture<MolViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MolViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
