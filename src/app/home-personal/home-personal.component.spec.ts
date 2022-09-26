import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomePersonalComponent } from './home-personal.component';

describe('HomePersonalComponent', () => {
  let component: HomePersonalComponent;
  let fixture: ComponentFixture<HomePersonalComponent>;
  let compiled : HTMLDivElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render profile pic',  waitForAsync(() => {    
    const compiled = fixture.debugElement.nativeElement;
    console.log('compiled',compiled)
        
    expect(compiled.querySelector('.home_personal_left img').src).toContain(component.profilePic);
  }));

  it('should personal contact elements before render be 5 ',  waitForAsync(() => {
               
    expect(component.contactItems.length).toBe(5);

  }));
  it('should render personal contact elements be 5',  waitForAsync(() => {
           
    compiled = fixture.debugElement.nativeElement;
    let itemCount = compiled.querySelectorAll('.home_personal_right p').length
    expect(itemCount).toBe(5);
  }));

});
