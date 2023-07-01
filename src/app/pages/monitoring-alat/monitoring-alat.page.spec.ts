import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoringAlatPage } from './monitoring-alat.page';

describe('MonitoringAlatPage', () => {
  let component: MonitoringAlatPage;
  let fixture: ComponentFixture<MonitoringAlatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonitoringAlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
