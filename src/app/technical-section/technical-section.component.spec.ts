import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSectionComponent } from './technical-section.component';

describe('TechnicalSectionComponent', () => {
  let component: TechnicalSectionComponent;
  let fixture: ComponentFixture<TechnicalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
