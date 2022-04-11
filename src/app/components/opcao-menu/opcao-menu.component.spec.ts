import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoMenuComponent } from './opcao-menu.component';

describe('OpcaoMenuComponent', () => {
  let component: OpcaoMenuComponent;
  let fixture: ComponentFixture<OpcaoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcaoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
