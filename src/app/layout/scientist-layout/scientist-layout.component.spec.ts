import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistLayoutComponent } from './scientist-layout.component';

describe('ScientistLayoutComponent', () => {
  let component: ScientistLayoutComponent;
  let fixture: ComponentFixture<ScientistLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientistLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
