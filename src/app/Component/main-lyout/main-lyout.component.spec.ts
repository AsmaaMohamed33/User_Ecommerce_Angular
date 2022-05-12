import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLyoutComponent } from './main-lyout.component';

describe('MainLyoutComponent', () => {
  let component: MainLyoutComponent;
  let fixture: ComponentFixture<MainLyoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLyoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
