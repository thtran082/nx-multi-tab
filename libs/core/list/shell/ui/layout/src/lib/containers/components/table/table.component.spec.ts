import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTabListTableComponent } from './table.component';

describe('MultiTabListTableComponent', () => {
  let component: MultiTabListTableComponent;
  let fixture: ComponentFixture<MultiTabListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiTabListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTabListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
