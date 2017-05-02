import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotonEmailComponent } from './foton-email.component';

describe('FotonEmailComponent', () => {
  let component: FotonEmailComponent;
  let fixture: ComponentFixture<FotonEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotonEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotonEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
