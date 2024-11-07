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

  /*it('should set render mode to sticks', () => {
    component.renderMode = 'sticks';
    expect(component.mv?.getRenderMode()).toBe('sticks');
  });

  it('should set render mode to ball_and_stick', () => {
    component.renderMode = 'ball_and_stick';
    expect(component.mv?.getRenderMode()).toBe('ball_and_stick');
  });

  it('should set render mode to space_fill', () => {
    component.renderMode = 'space_fill';
    expect(component.mv?.getRenderMode()).toBe('space_fill');
  });

  it('should set selection mode to identify', () => {
    component.selectionMode = 'identify';
    expect(component.mv?.getSelectionMode()).toBe('identify');
  });

  it('should set selection mode to distance', () => {
    component.selectionMode = 'distance';
    expect(component.mv?.getSelectionMode()).toBe('distance');
  });

  it('should set selection mode to rotation', () => {
    component.selectionMode = 'rotation';
    expect(component.mv?.getSelectionMode()).toBe('rotation');
  });

  it('should set selection mode to torsion', () => {
    component.selectionMode = 'torsion';
    expect(component.mv?.getSelectionMode()).toBe('torsion');
  });*/
});
