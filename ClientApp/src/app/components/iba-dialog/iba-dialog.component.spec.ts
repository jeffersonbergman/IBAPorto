import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaDialogComponent } from './iba-dialog.component';

describe('IbaDialogComponent', () => {
  let component: IbaDialogComponent;
  let fixture: ComponentFixture<IbaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbaDialogComponent]
    });
    fixture = TestBed.createComponent(IbaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
