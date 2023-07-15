import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateKalibrasiPage } from './update-kalibrasi.page';

describe('UpdateKalibrasiPage', () => {
  let component: UpdateKalibrasiPage;
  let fixture: ComponentFixture<UpdateKalibrasiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateKalibrasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
