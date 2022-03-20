import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreListShellUiLayoutComponent } from './layout.component';

describe('CoreListShellUiLayoutComponent', () => {
  let component: CoreListShellUiLayoutComponent;
  let fixture: ComponentFixture<CoreListShellUiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreListShellUiLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreListShellUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
