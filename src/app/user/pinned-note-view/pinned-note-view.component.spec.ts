import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedNoteViewComponent } from './pinned-note-view.component';

describe('PinnedNoteViewComponent', () => {
  let component: PinnedNoteViewComponent;
  let fixture: ComponentFixture<PinnedNoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinnedNoteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedNoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
