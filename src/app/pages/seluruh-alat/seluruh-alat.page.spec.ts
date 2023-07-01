import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeluruhAlatPage } from './seluruh-alat.page';

describe('SeluruhAlatPage', () => {
  let component: SeluruhAlatPage;
  let fixture: ComponentFixture<SeluruhAlatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeluruhAlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
