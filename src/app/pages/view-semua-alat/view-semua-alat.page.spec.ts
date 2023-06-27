import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSemuaAlatPage } from './view-semua-alat.page';

describe('ViewSemuaAlatPage', () => {
  let component: ViewSemuaAlatPage;
  let fixture: ComponentFixture<ViewSemuaAlatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewSemuaAlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
