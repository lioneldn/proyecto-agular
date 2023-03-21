import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabyeduComponent } from './labyedu.component';

describe('LabyeduComponent', () => {
  let component: LabyeduComponent;
  let fixture: ComponentFixture<LabyeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabyeduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabyeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
