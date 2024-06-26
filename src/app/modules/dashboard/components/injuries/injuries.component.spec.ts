import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuriesComponent } from './injuries.component';

describe('InjuriesComponent', () => {
  let component: InjuriesComponent;
  let fixture: ComponentFixture<InjuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjuriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
