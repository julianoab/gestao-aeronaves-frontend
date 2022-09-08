import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoAeronaveComponent } from './gestao-aeronave.component';

describe('GestaoAeronaveComponent', () => {
  let component: GestaoAeronaveComponent;
  let fixture: ComponentFixture<GestaoAeronaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoAeronaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoAeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
