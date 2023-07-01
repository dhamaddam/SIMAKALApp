import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JadwalKalibrasiPage } from './jadwal-kalibrasi.page';

describe('JadwalKalibrasiPage', () => {
  let component: JadwalKalibrasiPage;
  let fixture: ComponentFixture<JadwalKalibrasiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JadwalKalibrasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
