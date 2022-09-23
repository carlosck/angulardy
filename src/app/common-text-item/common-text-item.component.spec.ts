import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTextItemComponent } from './common-text-item.component';

describe('CommonTextItemComponent', () => {
  let component: CommonTextItemComponent;
  let fixture: ComponentFixture<CommonTextItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTextItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonTextItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
