import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDetailSemuaAlatPage } from './view-detail-semua-alat.page';

describe('ViewDetailSemuaAlatPage', () => {
  let component: ViewDetailSemuaAlatPage;
  let fixture: ComponentFixture<ViewDetailSemuaAlatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewDetailSemuaAlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
