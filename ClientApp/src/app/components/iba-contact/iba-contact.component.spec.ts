import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaContactComponent } from './iba-contact.component';

describe('IbaContactComponent', () => {
  let component: IbaContactComponent;
  let fixture: ComponentFixture<IbaContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaContactComponent]
    });
    fixture = TestBed.createComponent(IbaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
