import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdRegistrationComponent } from './bd-registration.component';

describe('BdRegistrationComponent', () => {
  let component: BdRegistrationComponent;
  let fixture: ComponentFixture<BdRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
