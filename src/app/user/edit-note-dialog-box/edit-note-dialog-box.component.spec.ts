import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoteDialogBoxComponent } from './edit-note-dialog-box.component';

describe('EditNoteDialogBoxComponent', () => {
  let component: EditNoteDialogBoxComponent;
  let fixture: ComponentFixture<EditNoteDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNoteDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNoteDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
