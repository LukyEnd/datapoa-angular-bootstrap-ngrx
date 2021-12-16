import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniBusComponent } from './mini-bus.component';

describe('MiniBusComponent', () => {
  let component: MiniBusComponent;
  let fixture: ComponentFixture<MiniBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniBusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
