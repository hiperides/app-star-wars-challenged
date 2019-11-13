import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensDetalheComponent } from './personagens-detalhe.component';

describe('PersonagensDetalheComponent', () => {
  let component: PersonagensDetalheComponent;
  let fixture: ComponentFixture<PersonagensDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagensDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
