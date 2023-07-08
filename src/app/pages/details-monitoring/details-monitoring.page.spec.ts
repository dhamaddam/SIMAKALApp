import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsMonitoringPage } from './details-monitoring.page';

describe('DetailsMonitoringPage', () => {
  let component: DetailsMonitoringPage;
  let fixture: ComponentFixture<DetailsMonitoringPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsMonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
