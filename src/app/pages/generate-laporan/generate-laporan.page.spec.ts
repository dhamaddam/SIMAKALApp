import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerateLaporanPage } from './generate-laporan.page';

describe('GenerateLaporanPage', () => {
  let component: GenerateLaporanPage;
  let fixture: ComponentFixture<GenerateLaporanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GenerateLaporanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
