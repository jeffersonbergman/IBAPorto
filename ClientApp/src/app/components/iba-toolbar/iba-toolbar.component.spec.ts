import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaToolbarComponent } from './iba-toolbar.component';

describe('IbaToolbarComponent', () => {
  let component: IbaToolbarComponent;
  let fixture: ComponentFixture<IbaToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaToolbarComponent]
    });
    fixture = TestBed.createComponent(IbaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
