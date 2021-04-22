import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageNavigationComponent } from './stage-navigation.component';

describe('StageNavigationComponent', () => {
  let component: StageNavigationComponent;
  let fixture: ComponentFixture<StageNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
