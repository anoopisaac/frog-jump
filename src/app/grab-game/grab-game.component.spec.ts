import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabGameComponent } from './grab-game.component';

describe('GrabGameComponent', () => {
  let component: GrabGameComponent;
  let fixture: ComponentFixture<GrabGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
