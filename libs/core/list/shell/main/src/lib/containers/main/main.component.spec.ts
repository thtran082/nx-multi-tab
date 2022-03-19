import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreListShellMainComponent } from './main.component';

describe('CoreListShellMainComponent', () => {
  let component: CoreListShellMainComponent;
  let fixture: ComponentFixture<CoreListShellMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreListShellMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreListShellMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
