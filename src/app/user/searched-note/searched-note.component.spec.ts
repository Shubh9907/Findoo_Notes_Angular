import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedNoteComponent } from './searched-note.component';

describe('SearchedNoteComponent', () => {
  let component: SearchedNoteComponent;
  let fixture: ComponentFixture<SearchedNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
