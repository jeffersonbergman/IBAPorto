import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaMinistriesComponent } from './iba-ministries.component';

describe('IbaMinistriesComponent', () => {
  let component: IbaMinistriesComponent;
  let fixture: ComponentFixture<IbaMinistriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaMinistriesComponent]
    });
    fixture = TestBed.createComponent(IbaMinistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
