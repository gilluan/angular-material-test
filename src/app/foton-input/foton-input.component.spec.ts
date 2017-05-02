import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotonInputComponent } from './foton-input.component';

describe('FotonInputComponent', () => {
  let component: FotonInputComponent;
  let fixture: ComponentFixture<FotonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
