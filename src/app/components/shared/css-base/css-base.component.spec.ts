import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CssBaseComponent } from './css-base.component';

describe('CssBaseComponent', () => {
  let component: CssBaseComponent;
  let fixture: ComponentFixture<CssBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
