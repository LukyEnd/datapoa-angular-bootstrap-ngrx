import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFormatComponent } from './css-format.component';

describe('CssFormatComponent', () => {
  let component: CssFormatComponent;
  let fixture: ComponentFixture<CssFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
