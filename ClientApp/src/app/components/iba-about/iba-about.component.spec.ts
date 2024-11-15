import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaAboutComponent } from './iba-about.component';

describe('IbaAboutComponent', () => {
  let component: IbaAboutComponent;
  let fixture: ComponentFixture<IbaAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaAboutComponent]
    });
    fixture = TestBed.createComponent(IbaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
