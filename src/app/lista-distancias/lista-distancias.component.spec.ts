import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListaDistanciasComponent} from './lista-distancias.component';

describe('ListaDistanciasComponent', () => {
  let component: ListaDistanciasComponent;
  let fixture: ComponentFixture<ListaDistanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDistanciasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListaDistanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
