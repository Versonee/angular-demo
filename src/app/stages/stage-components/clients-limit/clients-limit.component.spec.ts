import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLimitComponent } from './clients-limit.component';

describe('ClientsLimitComponent', () => {
  let component: ClientsLimitComponent;
  let fixture: ComponentFixture<ClientsLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
