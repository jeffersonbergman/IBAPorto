import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaFooterComponent } from './iba-footer.component';

describe('IbaFooterComponent', () => {
  let component: IbaFooterComponent;
  let fixture: ComponentFixture<IbaFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaFooterComponent]
    });
    fixture = TestBed.createComponent(IbaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
