import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosFormularioComponent } from './erros-formulario.component';

describe('ErrosFormularioComponent', () => {
  let component: ErrosFormularioComponent;
  let fixture: ComponentFixture<ErrosFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrosFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
