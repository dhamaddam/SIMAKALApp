import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeluruhAlatAdminPage } from './seluruh-alat-admin.page';

describe('SeluruhAlatAdminPage', () => {
  let component: SeluruhAlatAdminPage;
  let fixture: ComponentFixture<SeluruhAlatAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeluruhAlatAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
