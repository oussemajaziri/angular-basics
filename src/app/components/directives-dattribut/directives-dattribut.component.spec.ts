import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDAttributComponent } from './directives-dattribut.component';

describe('DirectivesDAttributComponent', () => {
  let component: DirectivesDAttributComponent;
  let fixture: ComponentFixture<DirectivesDAttributComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesDAttributComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesDAttributComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
