import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponente } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarComponente;
  let fixture: ComponentFixture<ListarComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComponente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
