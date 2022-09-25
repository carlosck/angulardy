import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscSectionComponent } from './misc-section.component';

describe('MiscSectionComponent', () => {
  let component: MiscSectionComponent;
  let fixture: ComponentFixture<MiscSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
